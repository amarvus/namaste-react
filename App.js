import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, [
        React.createElement("div", {key : "child1", className:"child"}, [
        React.createElement("h1", {key : "h1-1"}, "I'm h1 tag."),
        React.createElement("h2", {key : "h2-1"}, "I'm h2 tag.")
    ]),
    React.createElement(
        "div", {key : "child2", className:"child"}, [
        React.createElement("h1", {key : "h1-2"}, "I'm h1 tag."),
        React.createElement("h2", {key : "h2-2"}, "I'm h2 tag.")
    ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// console.log(parent);




// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!"); // {} is for attributes. {id : "heading"}

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);