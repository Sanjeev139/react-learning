import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor() {
        super()
        console.log("Parent constructor called")
    }

    componentDidMount() {
        console.log("Parent component did mount called")
    }

    render() {
        console.log("Parent render called");
        return (
        <div>
            <h1>About Us</h1>
            <UserClass name={"First - Child"}></UserClass>
        </div>
        )
    }

}

// const About = () => {
//     return <div>
//         <h1>About Us</h1>
//         <UserClass name={"First - Class"}></UserClass>
//         <UserClass name={"Second - Class"}></UserClass>
//     </div>
// }
export default About;