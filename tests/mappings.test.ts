import { alphabetMapping } from "../src/mappings/alphabetMapping";

describe("Alphabet Mapping", () => {
  test("Contains all uppercase letters", () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    uppercaseLetters.forEach(letter => {
      expect(alphabetMapping[letter]).toBeDefined();
    });
  });

  test("Regional indicators mapping for uppercase letters", () => {
    expect(alphabetMapping["H"]).toBe("🇭");
    expect(alphabetMapping["E"]).toBe("🇪");
    expect(alphabetMapping["L"]).toBe("🇱");
    expect(alphabetMapping["O"]).toBe("🇴");
    expect(alphabetMapping["W"]).toBe("🇼");
  });
});