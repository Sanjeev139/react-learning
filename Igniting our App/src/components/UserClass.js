import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo : {
                name: "defaultname"
            }
        }
        console.log(this.props.name + "Constructor called");
    }

    async componentDidMount() {
        const getUser = await fetch("https://api.github.com/users/sanjeevitt");
        const json = await getUser.json()
        this.setState(json)
    }

    componentWillUnmount() {
        /**
         * It'll call when you move from another component from this component
         * It'll help you to clean some stuff 
        */
        console.log("Componenet will UNmount")
    }

    render() {
        //const { name } = this.props
        const { count, name, login } = this.state;
        console.log(this.props.name + " render Called");
        return (
            <div className="user-card">
                <img src="https://avatars.githubusercontent.com/u/50225347?v=4"></img>
                <h4>Count : {count}</h4>
                <h2>Name: {login}</h2>
                <h3>Location: Bangalore</h3>
                <h3>Github: sanjeev139</h3>
            </div>
        )
    }
}

export default UserClass;