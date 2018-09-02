# Presentational and Container Components by Dan Abramov

- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

- https://medium.com/@learnreact/container-components-c0e67432e005

- https://www.fullstackreact.com/p/using-presentational-and-container-components-with-redux

- https://redux.js.org/basics/usagewithreact#implementing-container-components

## Presentational components

- Are concerned with how things look.

- May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.

- Often allow containment via this.props.children.

- Have no dependencies on the rest of the app, such as Flux actions or stores.

- Don’t specify how the data is loaded or mutated.

- Receive data and callbacks exclusively via props.

- Rarely have their own state (when they do, it’s UI state rather than data).

- Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.

- Examples: Page, Sidebar, Story, UserInfo, List.

## Container components

- Are concerned with how things work.

- May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.

- Provide the data and behavior to presentational or other container components.

- Call Flux actions and provide these as callbacks to the presentational components.

- Are often stateful, as they tend to serve as data sources.

- Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.

- Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

## Benefits of This Approach

- Better separation of concerns. You understand your app and your UI better by writing components this way.

- Better reusability. You can use the same presentational component with completely different state sources, and turn those into separate container components that can be further reused.

- Presentational components are essentially your app’s “palette”. You can put them on a single page and let the designer tweak all their variations without touching the app’s logic. You can run screenshot regression tests on that page.

- This forces you to extract “layout components” such as Sidebar, Page, ContextMenu and use this.props.children instead of duplicating the same markup and layout in several container components.

## Dichotomies

### Stateful and Stateless

Some components use React setState() method and some don’t.

While container components tend to be stateful and presentational components tend to be stateless, this is not a hard rule. 

Presentational components can be stateful, and containers can be stateless too.

### Classes and Functions

Components can be declared both as classes and as functions.

Functional components are simpler to define but they lack certain features currently available only to class components. 

Because functional components are easier to understand, I suggest you to use them unless you need state, lifecycle hooks, or performance optimizations, which are only available to the class components at this time.

### Pure and Impure

People say that a component is pure if it is guaranteed to return the same result given the same props and state.

Pure components can be defined both as classes and functions, and can be both stateful and stateless.

Another important aspect of pure components is that they don’t rely on deep mutations in props or state, so their rendering performance can be optimized by a shallow comparison in their shouldComponentUpdate() hook.

Currently only classes can define shouldComponentUpdate().
