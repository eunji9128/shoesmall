import { Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h4>About page</h4>
            <p>blablablabla</p>
            <Outlet></Outlet>
        </div>
    )
}

export default About;