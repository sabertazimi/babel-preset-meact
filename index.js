const defaultTargets = {
    android: 30,
    chrome: 35,
    edge: 14,
    explorer: 9,
    firefox: 52,
    safari: 8,
    ucandroid: 1
};

const buildTargets = (options) => {
    return Object.assign({}, defaultTargets, options.additionalTargets);
};

module.exports = function buildMeactPreset(context, options) {
    const transpileTargets = (options && options.targets) ||
        buildTargets(options || {});

    return {
        presets: [
            require('babel-preset-env').default(null, {
                targets: transpileTargets
            }),
        ],
        plugins: [
            require('babel-plugin-transform-react-jsx'),
            require('babel-plugin-transform-meact-jsx')
        ].filter(Boolean)
    };
};