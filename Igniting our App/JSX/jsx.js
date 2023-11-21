import React from "react"
import ReactDOM from "react-dom/client"

// JSX - is not html in jS
// JSX code transpile before it reached to the JS engine and transpiling is done by parcel Babel
const JsxHeading = () => (
    <h1 id="heading">
        This is H1 tag using JSX
    </h1>
);

const reactElement = (<h1>This is React Element</h1>)

// headingComponent and headingComponent1 both are the same, just a different way to write the functional component
const HeadingComponent = () => (
    <div>
        <h2>{ console.log ("Hello JavaScript"/* {} This is used to write peace of JS code inside component */)}</h2>
        <h2>{reactElement}</h2>
        {JsxHeading()}
        <h2>This is react functional component</h2>
    </div>
);

const HeadingComponent1 = () => <h2>This is react functional component2</h2>

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(JsxHeading);
root.render(<HeadingComponent></HeadingComponent>)