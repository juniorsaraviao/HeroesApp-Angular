# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0 ([Fernando Herrera's Angular Course](https://www.udemy.com/course/angular-fernando-herrera/)).

- Angular 11
- Lazy load
- [Angular Material](https://material.angular.io/)
- [Flex layout](https://www.npmjs.com/package/@angular/flex-layout)
- [RxJs](https://rxjs.dev/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Steps to run the project
1. Install json-server following this [link](https://www.npmjs.com/package/json-server).
2. Locate the file db.json on the **server** folder.
3. Open cmd, move to the db.json route and run this command `json-server --watch db.json` (the dafault port is 3000).
4. Run `ng serve`.
5. Open `http://localhost:4200/` on your favorite browser.
6. Go to login page

![Login](https://raw.githubusercontent.com/juniorsaraviao/HeroesApp-Angular/master/resources/LoginPage.jpg)  
7. You'll see the following page

![MainPage](https://raw.githubusercontent.com/juniorsaraviao/HeroesApp-Angular/master/resources/MainPage.jpg)
8. Also, you can do the following actions: List Heroes, Add Heroe, Search Hero.

![MainPage](https://raw.githubusercontent.com/juniorsaraviao/HeroesApp-Angular/master/resources/Menu.jpg)
9. Have fun with **HeroesApp** :call_me_hand: :star2:

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
