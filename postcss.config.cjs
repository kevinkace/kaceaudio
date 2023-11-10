module.exports = () => ({
    plugins : [
        // require('postcss-composes'), // breaks majority of css
        require('postcss-nested')(),
        require('postcss-import')(),
        // require('postcss-modules-values')(), // doesn't work with mq

        require('postcss-custom-media')(),
    ],
});
