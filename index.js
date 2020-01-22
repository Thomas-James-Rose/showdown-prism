const showdownPrism = {
  type: 'lang',
  filter: (text, converter, options) => {
     // do stuff with the output
     return text;
  }
};

module.exports = showdownPrism