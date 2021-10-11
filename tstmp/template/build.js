const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');
const StylelintPlugin = require('stylelint-webpack-plugin');

config.plugins.push(new StylelintPlugin())
