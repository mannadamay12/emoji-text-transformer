/**
 * Applies a transformation style to the given text.
 * @param text - The input text to transform.
 * @param style - The transformation style function.
 * @returns The transformed text.
 */
export const transformText = (text: string, style: (text: string) => string): string => {
    if (!text.trim()) {
      throw new Error("Input text cannot be empty or whitespace.");
    }
    return style(text);
  };
  