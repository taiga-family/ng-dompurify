import {Config} from 'jest';
import {resolve} from 'path';
import {pathsToModuleNameMapper} from 'ts-jest';

process.env.TZ = 'Europe/Moscow';
process.env.FORCE_COLOR = 'true';
process.env.TS_JEST_DISABLE_VER_CHECKER = 'true';

const {compilerOptions} = require(resolve(__dirname, 'tsconfig.json'));

process.env.TZ = 'Europe/Moscow';
process.env.FORCE_COLOR = 'true';
process.env.TS_JEST_DISABLE_VER_CHECKER = 'true';

const config: Config = {
    rootDir: __dirname,
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: resolve(__dirname, 'tsconfig.json'),
            isolatedModules: true,
        },
    },
    extensionsToTreatAsEsm: ['.ts'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    modulePathIgnorePatterns: ['dist'],
    transform: {'^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular'},
    testMatch: ['<rootDir>/**/*.spec.ts'],
    coverageDirectory: '<rootDir>/coverage/demo',
    collectCoverageFrom: ['<rootDir>/projects/demo/**/*.ts', '!<rootDir>/**/*.spec.ts'],
    coverageReporters: ['html', 'lcov', 'json', 'text', 'lcov'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: `<rootDir>/${compilerOptions.baseUrl}/`
            .replace(/\.\//g, '/')
            .replace(/\/\/+/g, '/'),
    }),
    verbose: true,
};

export default config;
