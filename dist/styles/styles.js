"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiStyle = void 0;
const alphabetMapping_1 = require("../mappings/alphabetMapping");
/**
 * Transforms a given text into emoji style using the alphabet mapping.
 * @param text - The input text to transform.
 * @returns The transformed text.
 */
const emojiStyle = (text) => {
    return text
        .split("")
        .map((char) => alphabetMapping_1.alphabetMapping[char] || char) // Use the emoji mapping or keep the character unchanged
        .join("");
};
exports.emojiStyle = emojiStyle;
