"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../src/styles/styles");
const emojiTransformer_1 = require("../src/transformers/emojiTransformer");
describe("Emoji Text Transformer", () => {
    test("Transforms text to emoji style", () => {
        const input = "Hello";
        const output = "🇭🇪🇱🇱🇴";
        expect((0, emojiTransformer_1.transformText)(input, styles_1.emojiStyle)).toBe(output);
    });
    test("Handles empty input", () => {
        expect(() => (0, emojiTransformer_1.transformText)("", styles_1.emojiStyle)).toThrow("Input text cannot be empty or whitespace.");
    });
    test("Handles text with special characters", () => {
        const input = "Hello, World!";
        const output = "🇭🇪🇱🇱🇴, 🇼🇴🇷🇱🇩!";
        expect((0, emojiTransformer_1.transformText)(input, styles_1.emojiStyle)).toBe(output);
    });
});
