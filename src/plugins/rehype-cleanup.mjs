import { visit } from 'unist-util-visit'
import { markContentFeature } from './utils/content-features.mjs'

function hasProperty(properties, key) {
  return Boolean(properties && Object.hasOwn(properties, key))
}

export default function rehypeCleanup() {
  return (tree, file) => {
    visit(tree, 'element', (node, index, parent) => {
      if (hasProperty(node.properties, 'dataFootnoteRef') || hasProperty(node.properties, 'dataFootnoteBackref')) {
        markContentFeature(file, 'hasFootnotes')
      }

      if (node.tagName === 'li' && node.properties?.className?.includes('task-list-item')) {
        const children = node.children
        let inputIndex = -1

        for (let i = 0; i < children.length; i++) {
          const child = children[i]
          if (child.type === 'element' && child.tagName === 'input' && child.properties?.type === 'checkbox') {
            inputIndex = i
            break
          }
        }

        if (inputIndex !== -1) {
          for (let i = inputIndex + 1; i < children.length; i++) {
            const child = children[i]
            if (child.type === 'comment') continue
            if (child.type === 'text') {
              if (child.value.startsWith(' ')) {
                child.value = child.value.replace(/^\s+/, '')
              }
              break
            } else {
              break
            }
          }
        }
      }

      if (node.tagName !== 'p') {
        return
      }
      if (!node.children?.length) {
        return
      }
      if (!parent) {
        return
      }

      const rawFigureNodes = []

      for (const child of node.children) {
        if (child.type === 'raw' && child.value && child.value.trim().startsWith('<figure')) {
          rawFigureNodes.push(child)
        } else if (child.type !== 'text' || child.value.trim() !== '') {
          return
        }
      }

      if (rawFigureNodes.length > 0) {
        parent.children.splice(index, 1, ...rawFigureNodes)
        return index
      }
    })
  }
}
