import { visit } from 'unist-util-visit'
import { markContentFeature } from './utils/content-features.mjs'

export default function rehypeCopyCode() {
  return (tree, file) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre') {
        return
      }

      if (!node.children?.length) {
        return
      }

      const hasCodeElement = node.children.some((child) => child.tagName === 'code')
      if (!hasCodeElement) {
        return
      }

      markContentFeature(file, 'hasCodeBlock')

      node.properties = node.properties || {}
      node.properties.className = node.properties.className || []
      if (!node.properties.className.includes('copy-code-block')) {
        node.properties.className.push('copy-code-block')
      }

      const copyButton = {
        type: 'element',
        tagName: 'button',
        properties: {
          className: ['copy-button'],
          type: 'button',
          'aria-label': 'Copy code to clipboard'
        },
        children: []
      }

      const wrapper = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['copy-code-wrapper']
        },
        children: [copyButton, node]
      }

      if (parent && typeof index === 'number') {
        parent.children[index] = wrapper
      }
    })
  }
}
