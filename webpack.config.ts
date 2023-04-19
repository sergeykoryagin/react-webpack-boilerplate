import { Configuration } from 'webpack';

import path from 'path';

import { buildConfig } from './config/webpack/build-config';
import { BuildEnv, BuildPaths } from './config/webpack/types';

const MODE: Configuration['mode'] = 'development';

const resolvePath = (...paths: string[]) => path.resolve(__dirname, ...paths);

export default (env: BuildEnv): Configuration => {
    const paths: BuildPaths = {
        entry: resolvePath('src', 'index.tsx'),
        build: resolvePath('build'),
        html: resolvePath('public', 'index.html'),
        src: resolvePath('src'),
    };

    const port = env.port || 3000;
    const host = env.host || 'localhost';

    return buildConfig({
        paths,
        port,
        host,
        mode: MODE,
    });
};
