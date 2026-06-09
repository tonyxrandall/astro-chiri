export const normalizeTags = (value: unknown): string[] => {
  if (value == null) return [];
  if (typeof value === "string") {
    return value.split(",").map((tag) => tag.trim()).filter(Boolean);
  }
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item : item && typeof item === "object" && "tag" in item ? (item as { tag?: unknown }).tag : ""))
      .filter((item): item is string => typeof item === "string")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
};
