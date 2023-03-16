import "./list-item.css";
import { Component } from "react";

class ListItem extends Component {

    render() {
        const {onDelete, text, clickDone, clickImport, important, done} = this.props;

        let classes = "list-item";

        if(done) {
            classes += " done";
        }

        if(important) {
            classes += " important";
        }

        return (
            <span className={classes}>
                <span className={"list-item-label"}
                      onClick={() => clickDone()}>{text}</span>

                <button className={"btn btn-outline-success btn-sm"}
                        onClick={() => clickImport()}>
                    <span className={"fa fa-exclamation"}></span>
                </button>

                <button className={"btn btn-outline-danger btn-sm"} onClick={() => onDelete()}>
                    <span className={"fa fa-trash"}></span>
                </button>
            </span>
        )

    }
}

export default ListItem;