const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/start.js');
let configFactory = defaults.__get__('configFactory');
const StylelintPlugin = require('stylelint-webpack-plugin');

let myConfigFactory = function (webpackEnv) {
  let devConfig = configFactory(webpackEnv);
  devConfig.plugins.push(new StylelintPlugin());
  return devConfig;
};

defaults.__set__('configFactory', myConfigFactory);
