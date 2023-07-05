export function limitCharacters(text: string, limitValue: number): string {
  const limit = limitValue
  if (text.length > limit) {
    return text.substring(0, limit) + '...'
  }
  return text
}
