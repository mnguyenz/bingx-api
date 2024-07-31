import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    roots: ['<rootDir>/tests'],
    moduleNameMapper: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '^~(.*)$': '<rootDir>/src/$1'
    }
};

export default config;
