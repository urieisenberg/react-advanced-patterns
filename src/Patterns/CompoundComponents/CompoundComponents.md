The pattern refers to an interesting way to communicate the relationship between UI components and share implicit state by leveraging an expllicit parent - child relationship. For example the parent component handles the UI state values and updates. State values are communicated from parent to child, typically using the Context API.

## Pros

- Flexible Markup Structure: The parent component can be used to wrap any markup structure, including a table, a list, or a grid.
- Reduced Complexity: As opposed to jamming all props in one giant parent component and drilling those down to child UI components, child props go to their respective child components. This reduces complexity and makes it easier to maintain.
- Separation of Concerns: Having all the UI state logic in the Parent component and communicating that internally to all child components makes for a clear division of responsibility.
