import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series.</h2>
            <p>Data from GitHub API</p>
        
            {/* <User name = {"Amar (function)"} location = {"Busan"} /> */}
            <UserClass name = {"Amar (class)"} location = {"Beram"} />
        
        </div>

    );
};

export default About;