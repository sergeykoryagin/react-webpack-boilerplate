import { RuleSetRule } from 'webpack';

export const buildCssLoader = (): RuleSetRule => ({
    test: /\.css$/i,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) =>
                        Boolean(resPath.includes('.module.')),
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
            },
        },
    ],
});
