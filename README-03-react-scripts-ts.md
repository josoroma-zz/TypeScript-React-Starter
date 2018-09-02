# TypeScript with React

- https://github.com/Microsoft/TypeScript-React-Starter

- https://reactjs.org/docs/static-type-checking.html

Static type checkers like Flow and TypeScript identify certain types of problems before we even run our code. They can also improve developer workflow by adding features like auto-completion. For this reason, we recommend using Flow or TypeScript instead of PropTypes for larger code bases.

By the end, we'll have:

- A project with React and TypeScript.
  - https://www.typescriptlang.org/docs/handbook/basic-types.html
  - https://github.com/sw-yx/react-typescript-cheatsheet
- Linting with TSLint.
  - https://palantir.github.io/tslint/usage/configuration
  - https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts
  - https://github.com/palantir/tslint-react
  - https://github.com/alexjoverm/tslint-config-prettier
- Testing with Jest and Enzyme.
  - https://jestjs.io
  - http://airbnb.io/enzyme
- State management with Redux.
  - https://redux.js.org/basics/usagewithreact

## Use the latest NPM LTS version

- https://github.com/creationix/nvm#nvmrc

```
nvm install lts/*

echo "lts/*" > .nvmrc # to default to the latest LTS version

cat .nvmrc
```

## Install create-react-app

Let's set some useful tools and canonical defaults for our React project via `create-react-app`.

```
npm install -g create-react-app
```

## Create a new project called ts-app

```
create-react-app ts-app --scripts-version=react-scripts-ts
```

Note: `react-scripts-ts` is a set of adjustments to take the standard `create-react-app` project pipeline and bring `TypeScript` into the mix.

## Running the project

```
npm start
```

## Project layout

```
my-app/
├─ .gitignore
├─ images.d.ts
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ package.json
├─ tsconfig.json
├─ tsconfig.prod.json
├─ tsconfig.test.json
└─ tslint.json
```

## Initial setup

### tsconfig.json

Contains TypeScript-specific options for our project.

### tsconfig.prod.json and tsconfig.test.json builds

We also have a tsconfig.prod.json and a tsconfig.test.json in case we want to make any tweaks to our production builds, or our test builds.

### tslint.json

Stores the settings that our linter, TSLint, will use.

### package.json

Contains our dependencies, as well as some shortcuts for commands we'd like to run for testing, previewing, and deploying our app.

### public

Contains static assets like the HTML page we're planning to deploy to, or images. We can delete any file in this folder apart from index.html.

### src

Contains our TypeScript and CSS code.

`index.tsx` is the *entry-point* for our file, and is mandatory.

### images.d.ts

Will tell TypeScript that certain types of image files can be import-ed, which create-react-app supports.

## Setting up source control

```
cd ts-app

git init

git add -A

git commit -m 'create-react-app ts-app --scripts-version=react-scripts-ts'
```