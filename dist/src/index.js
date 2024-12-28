"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles/styles");
const emojiTransformer_1 = require("./transformers/emojiTransformer");
const input = "Hello, Emoji World!";
const transformed = (0, emojiTransformer_1.transformText)(input, styles_1.emojiStyle);
console.log(transformed); // Output: 🇭🇪🇱🇱🇴, 🇪🇲🇴🇯🇮 🇼🇴🇷🇱🇩!
