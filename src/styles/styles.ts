import { alphabetMapping } from "../mappings/alphabetMapping";

/**
 * Transforms a given text into emoji style using the alphabet mapping.
 * All letters are converted to uppercase regional indicators.
 * @param text - The input text to transform.
 * @returns The transformed text with regional indicator emojis.
 */
export const emojiStyle = (text: string): string => {
  return text
    .split("")
    .map((char) => {
      // Convert to uppercase first
      const upperChar = char.toUpperCase();
      // Only transform letters, preserve other characters
      return alphabetMapping[upperChar] || char;
    })
    .join("");
};