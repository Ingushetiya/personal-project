import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // Резолв
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        // Добавляем CSS лоадеры
        config.module.rules.push(buildCssLoaders(true));

        // Исключаем svg из существующих правил
        config.module.rules = config.module.rules.map((rule: any) => {
            if (/svg/.test(rule.test)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        // Добавляем loader для svg
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    return config;
};
