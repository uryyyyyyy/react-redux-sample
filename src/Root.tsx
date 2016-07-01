import React = require('react');
import {Link} from "react-router"
import {Paths} from "./Models";

interface Props {
    children: any
}

export default class Root extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <h1>React Redux sample</h1>
                <li><Link to="/" >Home</Link></li>
                <li><Link to={Paths.COUNTER} >Counter</Link></li>
                <li><Link to={Paths.TODO} >Todo</Link></li>
                <li><Link to={Paths.CHAT} >Chat</Link></li>
                <li><Link to="/random_url" >Notfound</Link></li>
                {this.props.children}
            </div>
        );
    }
}