module.exports = function(api) {
    api.cache(true);
    return {
        "presets": [
            [
                "@babel/env",
                {
                    "debug": true,
                    "useBuiltIns": "usage"
                }
            ],
            "@babel/typescript"
        ]
    }
}