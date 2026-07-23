export function normalizeBase64(input: string): string {
  const trimmed = input.trim();
  if (trimmed.startsWith("data:image/")) return trimmed;
  return `data:image/png;base64,${trimmed}`;
}

export function isValidBase64Image(src: string): boolean {
  // ponytail: basic check — full validation happens via img.onerror
  return /^data:image\/[a-zA-Z+]+;base64,[A-Za-z0-9+/=]+$/.test(src);
}
