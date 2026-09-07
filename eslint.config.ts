import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...taiga.configs.recommended,
    ...taiga.configs.jest,
    {
        files: ['CHANGELOG.md'],
        rules: {'markdown/heading-increment': 'off'},
    },
];
