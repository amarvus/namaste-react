import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {

            }
        }
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/amarvus");

        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        });
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
        
    }

    render() {

        const {name, id, avatar_url, login} = this.state.userInfo;
        console.log("rendered");
        
        return(
            
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name} </h2>
                <h3>User: {login} </h3>
                <h3>ID: {id} </h3>
        </div>
        );
    }
}

export default UserClass;