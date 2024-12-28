"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformText = void 0;
/**
 * Applies a transformation style to the given text.
 * @param text - The input text to transform.
 * @param style - The transformation style function.
 * @returns The transformed text.
 */
const transformText = (text, style) => {
    if (!text.trim()) {
        throw new Error("Input text cannot be empty or whitespace.");
    }
    return style(text);
};
exports.transformText = transformText;
