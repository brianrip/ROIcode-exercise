const expect = require('chai').expect;

const converter = require('../lib/converter')

// convert and increment words that sounds like a number
describe('Converter', () => {
  const Converter = new converter();

  describe('Converter.convert()', () => {
    it('should convert words that sound like the number 1 to "two".', () => {
      const text = "won";

      expect(Converter.convert(text)).to.eq("two");
    });

    it('should convert words that sound like the number 2 to "three".', () => {
      const text = "to";

      expect(Converter.convert(text)).to.eq("three");
    });

    it('should convert words that sound like the number 4 to "five".', () => {
      const text = "for";

      expect(Converter.convert(text)).to.eq("five");
    });

    it('should convert words that sound like the number 8 to "nine".', () => {
      const text = "ate";

      expect(Converter.convert(text)).to.eq("nine");
    });

    it('should convert words that sound like the number 10 to "eleven".', () => {
      const text = "tin";

      expect(Converter.convert(text)).to.eq("eleven");
    });

    it('should convert sentences', () => {
      const text = "I am here for the to pies.";

      expect(Converter.convert(text)).to.eq("I am here five the three pies.");
    });

    it('should convert a sentence with all the possible conversions.', () => {
      const text = "I won a prize for how fast I ate a tin of sardines. " +
      "When they wasked who wanted to be at the forefront of the " +
      "celebration. I replied, 'Me too!'" ;

      expect(Converter.convert(text)).to.eq("I two a prize five how fast I " +
      "nine a eleven of sardines. When they wasked who wanted three be at the fivefront " +
      "of the celebration. I replied, 'Me three!'");
    });

    it('should convert segments of words', () => {
      const text = "I entered the wild foray.";

      expect(Converter.convert(text)).to.eq("I entered the wild fiveay.");
    });
  });
});
