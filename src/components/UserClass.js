import React from "react";
import UserContext from "../utils/UserContext";

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

        //console.log(json);

        this.setState({
            userInfo: json,
        });
        
    }

    componentDidUpdate(){
        //console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        //console.log("componentWillUnmount");
        
    }

    render() {

        const {name, id, avatar_url, login} = this.state.userInfo;
        //console.log("rendered");
        
        return(
            
            <div className="user-card">
                <div>
                    LoggedIn User: 
                    <UserContext.Consumer>
                        {({loggedInUser}) => (<h1 className="font-bold">{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <img src={avatar_url}></img>
                <h2>Name: {name} </h2>
                <h3>User: {login} </h3>
                <h3>ID: {id} </h3>
        </div>
        );
    }
}

export default UserClass;