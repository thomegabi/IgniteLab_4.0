import {pathsToModuleNameMapper} from 'ts-jest'
import {compilerOptions} from './tsconfig.json'
import { Config } from 'jest'; // Necessário para ele chamar automaticamente funções dentro desse arquivo

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  // rootDir: 'src', //Remoção dessa linha, pois nem tudo está no diretorio src, ent para evitar erros remova ou comente
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/', // esse <rootDir>/ serve para indicar de onde se iniciara, como todos os paths se iniciam do root, só esse comando basta 
  }),
};

export default config;
