const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')
// const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        cssnano({
            preset: ['default', {
                // TODO.md: not clear the mechanism
                // autoprefixer: true
            }]
        }),
        // postcssPresetEnv({
        //     stage: 4,
        //     features: {
        //         'nesting-rules': false
        //     },
        //     // autoprefixer: {} // auto
        // })
    ]
}
