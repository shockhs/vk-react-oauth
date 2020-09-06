module.exports = {
    plugins: ['prettier'],
    extends: ['airbnb', 'prettier'],
    env: {
        es6: true,
        browser: true,
    },
    rules: {
        'prettier/prettier': ['error'],
        'max-len': [
            'error',
            {
                code: 130,
                ignoreUrls: true,
            },
        ],
        'max-params': ['error', 3],
        'brace-style': ['error', 'stroustrup'],
        'no-unused-vars': ['warn'],
        'no-var': ['off'],
        'one-var': ['off'],
    },
}
