import { emojiStyle } from "../src/styles/styles";
import { transformText } from "../src/transformers/emojiTransformer";

describe("Emoji Text Transformer", () => {
  test("Transforms text to emoji style", () => {
    const input = "Hello";
    const output = "🇭🇪🇱🇱🇴";
    expect(transformText(input, emojiStyle)).toBe(output);
  });

  test("Handles empty input", () => {
    expect(() => transformText("", emojiStyle)).toThrow("Input text cannot be empty or whitespace.");
  });

  test("Handles text with special characters", () => {
    const input = "Hello, World!";
    const output = "🇭🇪🇱🇱🇴, 🇼🇴🇷🇱🇩!";
    expect(transformText(input, emojiStyle)).toBe(output);
  });
});
