import { Component } from "react";

class Safelink extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <a className={this.state.classes} href={this.state.url} rel="noreferrer" target={"_blank"}>{this.state.linktext}</a>
        );
    }
}

export default Safelink;