import { Configuration } from 'webpack';

export interface BuildPaths {
    stylelintConfig?: string;
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: Configuration['mode'];
    paths: BuildPaths;
    port: number;
    host: string;
}

export interface BuildEnv {
    port: number;
    host: string;
}
