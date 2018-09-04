# State Management

- https://github.com/Microsoft/TypeScript-React-Starter#state-management-in-general

On its own, React is a useful library for creating composable views. However, React doesn't prescribe any specific way of synchronizing data throughout our application. As far as a React component is concerned, data flows down through its children through the props you specify on each element. Some of those props might be functions that update the state one way or another, but how that happens is an open question.

## Installing Redux

- https://github.com/Microsoft/TypeScript-React-Starter#installing-redux

```
npm install -S redux react-redux @types/react-redux
```

## Redux in a nutshell

- https://redux.js.org/basics/usagewithreact

- Relies on synchronizing data through a centralized and immutable store of data.

- Updates to that data will trigger a re-render of our application.

- State is updated in an immutable fashion by sending explicit action messages which must be handled by functions called reducers.

Because of the explicit nature, it is often easier to reason about how an action will affect the state of our program.