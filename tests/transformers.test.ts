import { emojiStyle } from "../src/styles/styles";
import { transformText } from "../src/transformers/emojiTransformer";

describe("Emoji Text Transformer", () => {
  test("Transforms uppercase text to emoji style", () => {
    const input = "HELLO";
    const output = "🇭🇪🇱🇱🇴";
    expect(transformText(input, emojiStyle)).toBe(output);
  });

  test("Transforms lowercase text to uppercase emoji style", () => {
    const input = "hello";
    const output = "🇭🇪🇱🇱🇴";
    expect(transformText(input, emojiStyle)).toBe(output);
  });

  test("Handles empty input", () => {
    expect(() => transformText("", emojiStyle)).toThrow("Input text cannot be empty or whitespace.");
  });

  test("Handles mixed case text", () => {
    const input = "Hello, World!";
    const output = "🇭🇪🇱🇱🇴, 🇼🇴🇷🇱🇩!";
    expect(transformText(input, emojiStyle)).toBe(output);
  });

  test("Preserves non-letter characters", () => {
    const input = "Hi! :)";
    const output = "🇭🇮! :)";
    expect(transformText(input, emojiStyle)).toBe(output);
  });
});