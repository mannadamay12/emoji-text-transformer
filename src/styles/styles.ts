import { alphabetMapping } from "../mappings/alphabetMapping";

/**
 * Transforms a given text into emoji style using the alphabet mapping.
 * @param text - The input text to transform.
 * @returns The transformed text.
 */
export const emojiStyle = (text: string): string => {
  return text
    .split("")
    .map((char) => alphabetMapping[char] || char) // Use the emoji mapping or keep the character unchanged
    .join("");
};
