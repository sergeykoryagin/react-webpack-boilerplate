import { Configuration } from 'webpack';

import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { BuildOptions } from './types';

export const buildConfig = (options: BuildOptions): Configuration => {
    const { paths, mode } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name]___[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    };
};
