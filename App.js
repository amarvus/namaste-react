import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTML Element (render)
const heading = React.createElement("h1", {id : "heading"}, "Namaste React 🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading);


// JSX => transpiled before it reaches the JS (by PARCEL-Babel)
// JSX => React.createElement => ReactElement - JS Object => HTML Element (render)
const jsxHeading = <h1 id = "heading">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading);

root.render(jsxHeading);

// React Functional Component
const HeadingComponent = () => (
    <div id = "container">
        <h1>Namaste React Functional Component 🚀</h1>
    </div>
);

// root.render(<HeadingComponent/>);

// Component Composition
const Title = () => (
    <div id = "container">
        <HeadingComponent/>
        <h1>Namaste React 2nd Functional Component 🚀</h1>
    </div>
);

root.render(<Title/>);
