
module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/env', {
      "corejs": 3,
      "targets": "> 0.25%, not dead",
      "useBuiltIns": "usage"
    }],
  	"@babel/preset-typescript"
  ]
  const plugins = [
    '@babel/plugin-transform-runtime'
  ];

  return {
    presets,
    plugins
  };
}
