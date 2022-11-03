Perhaps inspired by React's controlled form elements, control props allow users of your component to control the UI state via certain "control" props. For example - state value passed by props and state updater like onChange, which is similar to how controlled input elements work in React. For example

## Pros

- Inversion of Control - A very easy solution to cede control over the users of your component.

## Cons

- Duplicate code - For more complex scenarios, the user of the component may have to duplicate some logic you'd have handled internally.

