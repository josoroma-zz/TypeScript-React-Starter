# Learn the basics of React

- https://reactjs.org/docs/hello-world.html

## Functional components

- https://reactjs.org/docs/components-and-props.html#functional-and-class-components

Is a pure JS function that accepts props as its argument, and returns some JSX.

```
const Heading = (props) => <h1>{props.children}</h1>;
```

```
const Button = (props) => <button className="button" {...props} />;
```

## Class based components

 - https://reactjs.org/docs/react-component.html#render

 - https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class

It extends `React.Component`, and its only required method is `render()`.

Our component get lifecycle hooks and internal or local state.

We can decide whether or not they should update.

## Props are Read-Only

- https://reactjs.org/docs/components-and-props.html#props-are-read-only

Whether we declare a component as a function or a class, it must *never modify* its own props.

## Diagram of modern React lifecycle methods (by Dan Abramov)

 - https://twitter.com/dan_abramov/status/981712092611989509

## Inline if with logical operator

- https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator

We may embed any expressions in JSX by wrapping them in curly braces. This includes the JS logical && operator.

```
const Mailbox = (props) => {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

## Lists and keys

- https://reactjs.org/docs/lists-and-keys.html#keys

```
const Blog = (props) => {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

## Forms

- https://reactjs.org/docs/forms.html#controlled-components

- https://reactjs.org/docs/uncontrolled-components.html

HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.

## Mounting - componentDidMount()

 - https://reactjs.org/docs/react-component.html#componentdidmount

Is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If we need to load data from a remote endpoint, this is a good place to instantiate the network request.

*What does mounting mean?*

- https://www.fullstackreact.com/30-days-of-react/day-7

```
Since we're defining virtual representations of nodes in our DOM tree with React, we're not actually defining DOM nodes. Instead, we're building up an in-memory view that React maintains and manages for us. When we talk about mounting, we're talking about the process of converting the virtual components into actual DOM elements that are placed in the DOM by React.
```

## Unmounting - componentWillUnmount()

- https://reactjs.org/docs/react-component.html#componentwillunmount

It is invoked immediately before a component is unmounted and destroyed.

Useful for deletion or cleanup phases.

## shouldComponentUpdate or React.PureComponent

 - https://reactjs.org/docs/react-component.html#shouldcomponentupdate
 - https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action
 - https://reactjs.org/docs/react-api.html#reactpurecomponent

We can control the amount of re-renders our component does using the `shouldComponentUpdate` method. This method gives us the next and current props and state, and lets us implement a boolean expression that triggers a re-render or not.

A much simpler way is to extend the `React.PureComponent` class instead of `React.Component`. This one comes with a simple implementation of the `shouldComponentUpdate` method, that just checks whether the current and next state and props are equal.

## Higher-Order Components

- https://reactjs.org/docs/higher-order-components.html

A higher-order component (HOC) is an advanced technique in React for reusing component logic.

HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.

A HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

The wrapped component can receive all the props of the container, along with new props, which the HOC can use to render its output.

## Refs and the DOM

- https://reactjs.org/docs/refs-and-the-dom.html

Refs provide a way to access DOM nodes or React elements created in the render method.

In the typical React dataflow, props are the only way that parent components interact with their children.

To modify a child, we re-render it with new props. However, there are a few cases where we need to imperatively modify a child outside of the typical dataflow.

The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

### Creating Refs

- https://reactjs.org/docs/refs-and-the-dom.html#creating-refs

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

### Callback Refs

- https://reactjs.org/docs/refs-and-the-dom.html#callback-refs

```
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

## Render Props

- https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns

The term *render prop* refers to a simple technique for sharing code between React components using a prop whose value is a function.

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

## Typechecking with PropTypes

- https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

```
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```