export type buildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: buildMode;
    paths: BuildPaths;
    port: number;
    isDev: boolean;
}

export interface BuildEnv {
    mode: buildMode;
    port: number;
}
