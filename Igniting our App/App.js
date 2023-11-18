/**
 * React.createElement is nothing but an Object (Creating JS object)
 * root.render(heading) - render method is responsible to convert this heading object
 * into html and putting inside into root.
 */

// const heading = React.createElement("h1",{
//     "id":"heading" // attributes
// },
// "Namastey JS from react" // children
// ); // creating heading object
// const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(heading) // This will return object to us
// root.render(heading) // This is converting heading object to html file.

/**
 * Render get the createElement object and converted into h1 tag and render it to DOM (Data Object Model)
 */

/**
 * <div id="parent">
 *      <div id="child-1">
 *          <h1>This is h1 tag></h1>
 *          <h2>This is h2 tage</h2>
 *      </div>
 *      <div id="child-2">
 *          <h1>This is h1 tag></h1>
 *          <h2>This is h2 tage</h2>
 *      </div>
 * </div>
 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", 
    {
        "id":"parent"
    },
    React.createElement("div",
    {
        "id":"child"
    },
    [React.createElement("h1",{},"This is h1 tag"),("h2",{},"This is H2 Tag")]
    )
)

const parent2 = React.createElement("div", {
    "id":"parent",
    },
    React.createElement("div", {
        "id":"child-1"
     },
     [React.createElement("h1", {}, "this is tag h1"),("h2",{},"This is tag h2")]
    ),
    React.createElement("div", {
        "id":"child-2"
     },
     [React.createElement("h1", {}, "this is tag h1"),("h2",{},"This is tag h2")]
    ),

)

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(parent2)
root.render(parent2)



