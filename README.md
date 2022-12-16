# Order-Products-React-App

Welcome to the Order Products React App!

This application allows users to browse and order products from the store. Users can check the available products which are fetched from Firebase backend
they can add products to their cart by clicking the "Add to Cart" button on the product. They can also remove items from their cart or update the quantities on the cart page.

### Project purpose :

In this web application I handled some asynchronous tasks with the help of Redux Toolkit (Sending HTTP requests and similar tasks), also I used two different alternatives of where to put the side effect code because the reducer functions must be pure, side-effect free, and synchronous. The first possible place to put my asynchronous code is directly into the component. The second possible place is inside the action creators functions bacause redux actually has a solution that allows us to perform side effects and run asynchronous tasks as part of this action creators without changing the reducer function. 

Also in this project I used Redux DevTools to inspect and debug my Redux store. Redux DevTools allowed me to view the current state of the store, dispatch actions, and see the changes to the state that result from those actions.


I created a Store folder to setup my Redux store, I created multiple slices in two separate files a ui.js file and cart.js file, each file has one slice, one for managing the cart and one slice for user interface logic like toggling the shopping cart.



## Topics :

Built with React, React redux, Redux Toolkit, Javascript, CSS and HTML.


## Setup :

To get started, clone or download the repository and navigate to the root directory in your terminal. Then, run the following commands:

- Install all dependencies: run npm install
- Install Redux Toolkit: run npm install @reduxjs/toolkit
- Install React Redux: run npm install react-redux
- Start the development server: run npm start


This will install all necessary dependencies and start the development server. The app will be available at http://localhost:3000 in your browser.

