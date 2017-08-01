class Converter {

  convert(text){
    // Store initial variable to build upon
    let convertedText;

    // Iterate over all possible conversions.
    Object.keys(phoneticMap).forEach((key) => {

      // Replace text that matches possible words in a temporary variable
      let alteredText = text.replace(key, phoneticMap[key]);

      // If text was altered
      if (alteredText !== text) {

        if (!convertedText) convertedText = alteredText;
        // Ensure that we are building upon previously replaced words for our final conversion.
        convertedText = convertedText.replace(key, phoneticMap[key]);
      }
    });

    return convertedText;
  }
}


const phoneticMap = {
  "won": "two",
  "too": "three",
  "to": "three",
  "for": "five",
  "fore": "five",
  "ate": "nine",
  "tin": "eleven"
}

module.exports = Converter;
