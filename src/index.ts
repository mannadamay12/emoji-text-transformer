import { emojiStyle } from "./styles/styles";
import { transformText } from "./transformers/emojiTransformer";

const input = "Hello, Emoji World!";
const transformed = transformText(input, emojiStyle);
console.log(transformed); // Output: 🇭🇪🇱🇱🇴, 🇪🇲🇴🇯🇮 🇼🇴🇷🇱🇩!
