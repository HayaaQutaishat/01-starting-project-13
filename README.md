# Redux-Toolkit-React-App


### Project purpose :

In this web application I handled some asynchronous tasks with the help of Redux Toolkit (Sending HTTP requests and similar tasks), also I used two different alternatives of where to put the side effect code because the reducer functions must be pure, side-effect free, and synchronous. The first possible place to put my asynchronous code is directly into the component. The second possible place is inside the action creators functions bacause redux actually has a solution that allows us to perform side effects and run asynchronous tasks as part of this action creators without changing the reducer function. 

Also in this project I used Redux DevTools to inspect and debug my Redux store. Redux DevTools allowed me to view the current state of the store, dispatch actions, and see the changes to the state that result from those actions.
