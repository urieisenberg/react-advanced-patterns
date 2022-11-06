A simple pattern that allows for configurable inital state, and an optional state reset handler.
for example - user may call some fn to reset state from your hook and pass some initial state value. then the initialState is passed to the hook into your internal state mechanism.

Passing props to state is genrally frowned upon, which is why you have to make sure the value passed here is only an initialiser.

## Pros

- Important Feature for most UIs - Setting and resetting state is typically a very important requirement for most UI components. This gives a lot of flexibility to the user of your component.

## Cons

- May be Trivial - You may find yourself building a component/custom hook where state initialisers are perhaps trivial.
