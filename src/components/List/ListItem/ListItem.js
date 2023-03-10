import "./list-item.css";
import { Component } from "react";

class ListItem extends Component {

    state = {
        done: false,
        important: false,
    }
    clickDone = () => {
        this.setState(state => {
            return {
                done: !this.state.done,
            }
        })
    }
    clickImport = () => {
        this.setState(state => {
            return {
                important: !this.state.important,
            }
        })
    }

    onDefault = () => {
        this.setState({
            done: false,
            important: false,
        })
    }
    render() {
        const {text, important} = this.props;

        let classes = "list-item";

        if(this.state.done) {
            classes += " done"
        }

        if(this.state.important) {
            classes += " important"
        }

        return (
            <span className={classes}>
                <span className={"list-item-label"}
                      onClick={this.clickDone}>{text}</span>

                <button className={"btn btn-outline-success btn-sm"}
                        onClick={this.clickImport}>
                    <span className={"fa fa-exclamation"}></span>
                </button>

                <button className={"btn btn-outline-danger btn-sm"}>
                    <span className={"fa fa-trash"}></span>
                </button>

                <button className={"btn btn-outline-danger btn-sm"}
                        onClick={this.onDefault}>
                    <span>D</span>
                </button>
            </span>
        )

    }
}

export default ListItem;