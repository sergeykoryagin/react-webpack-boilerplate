import { RuleSetRule } from 'webpack';

import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildCssLoader } from './loaders/build-css-loader';
import { BuildOptions } from './types';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const tsBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const cssLoader = buildCssLoader();

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [svgLoader, tsBabelLoader, tsxBabelLoader, cssLoader, fileLoader];
};
