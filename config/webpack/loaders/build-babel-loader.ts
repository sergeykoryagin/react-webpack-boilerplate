import ReactRefreshBabelPlugin from 'react-refresh/babel';
import { RuleSetRule } from 'webpack';

import { BuildOptions } from '../types';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export const buildBabelLoader = ({
    isTsx,
}: BuildBabelLoaderProps): RuleSetRule => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                '@babel/plugin-transform-runtime',
                ReactRefreshBabelPlugin,
            ].filter(Boolean),
        },
    },
});
