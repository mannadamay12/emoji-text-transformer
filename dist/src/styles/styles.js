"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiStyle = void 0;
const alphabetMapping_1 = require("../mappings/alphabetMapping");
/**
 * Transforms a given text into emoji style using the alphabet mapping.
 * All letters are converted to uppercase regional indicators.
 * @param text - The input text to transform.
 * @returns The transformed text with regional indicator emojis.
 */
const emojiStyle = (text) => {
    return text
        .split("")
        .map((char) => {
        // Convert to uppercase first
        const upperChar = char.toUpperCase();
        // Only transform letters, preserve other characters
        return alphabetMapping_1.alphabetMapping[upperChar] || char;
    })
        .join("");
};
exports.emojiStyle = emojiStyle;
