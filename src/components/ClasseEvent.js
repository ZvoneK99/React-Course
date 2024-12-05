import { Component } from "react";
class ClasseEvent extends Component{

    handleClick() {
        console.log("Class based evend handling");
    }
    render() {
        return <div>This is a class based component
                <button onClick={this.handleClick}>Click</button>
                </div>
    }
}

export default ClasseEvent;