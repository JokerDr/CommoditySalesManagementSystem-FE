const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');
const pictureRules = require('./rules/pictureRules');
const htmlRules = require('./rules/htmlRules');


const modules = {
  rules: [
  ...jsRules,
  ...styleRules,
  // ...htmlRules,
  // ...pictureRules,
  // ...lintRules
]
}
module.exports = modules;
