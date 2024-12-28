# Emoji Text Transformer

Transform plain text into stylized emoji text with customizable mappings. This TypeScript package provides a flexible way to convert regular text into emoji-based representations.

## Installation

```bash
npm install @mannadamay12/emoji-text-transformer
```

## Usage

```typescript
import { transformText, emojiStyle } from '@mannadamay12/emoji-text-transformer';

// Basic usage
const text = "Hello World";
const transformed = transformText(text, emojiStyle);
console.log(transformed); // Output: 🇭🇪🇱🇱🇴 🇼🇴🇷🇱🇩

// Error handling
try {
  const empty = transformText("", emojiStyle);
} catch (error) {
  console.error(error); // Error: Input text cannot be empty or whitespace.
}
```

## Features

- Transform text to regional indicator emojis for uppercase letters
- Creative emoji mappings for lowercase letters
- Preserve special characters and spacing
- TypeScript support with full type definitions
- Extensible architecture for custom mappings

## API Reference

### transformText(text: string, style: (text: string) => string): string

The main transformation function that applies a style to the input text.

Parameters:
- `text`: The input text to transform
- `style`: A style function that defines the transformation rules

Returns:
- The transformed text with emoji replacements

Throws:
- Error if input is empty or only whitespace

### emojiStyle(text: string): string

The default emoji transformation style.

Parameters:
- `text`: The input text to transform

Returns:
- Text transformed using the default emoji mappings

## Character Mappings

### Uppercase Letters
Uses regional indicator symbols (🇦-🇿)

### Lowercase Letters
Uses themed emojis:
- a: 🅰️
- b: 🅱️
- c: ©️
[etc...]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [mannadamay12]