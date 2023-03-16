import { Component } from "react";

export default class ItemAddForm extends Component {

    state = {
        text: "",
    }

    onTextChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = () => {
        this.props.onText(this.state.text);
        this.setState({
            text: "",
        })
    }

    render() {
        return (
            <div className={"d-flex mt-2"}>
                <input type="text" onChange={this.onTextChange} value={this.state.text}/>
                <button className={"btn btn-primary"} onClick={this.onSubmit}>Add</button>
            </div>
        )
    }
}