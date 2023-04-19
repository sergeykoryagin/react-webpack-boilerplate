import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
});
