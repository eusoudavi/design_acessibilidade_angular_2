# A11yP2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

This project was updated to Angular CLI version 13. The steps to update are on my [GitHub](https://github.com/eusoudavi/design_acessibilidade_angular)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can run `npm run start`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Transições

Foi aberto uma branch chamada **transição** para ilustrar uma solução "improvisada" para criar animações no Angular.
O problema dessas transições é que toda vez que há a entrada ou saída de algum elemento no DOM, vamos criando soluções "improvisadas/gambiarras" para que as transições funcionem.

Um exemplo de "gambiarra" utilizada para que a transição funcione é a utlização do `setTimeout()`.
