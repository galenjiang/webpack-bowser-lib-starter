module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/env',
        {
          debug: true,

          useBuiltIns: 'usage',
          modules: false,
        },
      ],
      // if not using react, comment it
      // "@babel/preset-react",
      // use ts-loader
      //"@babel/typescript"
    ],
    plugins: [
      // [
      //   "@babel/plugin-proposal-decorators",
      //   {
      //     // "legacy": true,
      //     "decoratorsBeforeExport": true
      //   }
      // ],
      //"@babel/plugin-proposal-class-properties"
    ],
  }
}
