import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
    WebpackPluginInstance,
    ProgressPlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';

import { BuildOptions } from './types';

export const buildPlugins = ({
    paths,
}: BuildOptions): WebpackPluginInstance[] =>
    [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]__[contenthash:8].css',
            chunkFilename: 'css/[name]__[contenthash:8].css',
        }),
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        paths.stylelintConfig &&
            new StylelintWebpackPlugin({
                configFile: paths.stylelintConfig,
                fix: true,
            }),
    ].filter((plugin): plugin is WebpackPluginInstance => Boolean(plugin));
