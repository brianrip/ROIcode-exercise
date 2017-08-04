class Converter {

  convert(text){
    return Object.keys(phoneticMap).reduce((acc, key) => {
      return acc.replace(key, phoneticMap[key]);
    }, text);
  }
}


const phoneticMap = {
  "won": "two",
  "too": "three",
  "Too": "Three",
  "to": "three",
  "for": "five",
  "fore": "five",
  "ate": "nine",
  "tin": "eleven"
}

module.exports = Converter;
