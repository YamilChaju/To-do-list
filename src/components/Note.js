import { Component } from "react";
import "./Note.css"

class Note extends Component {
    render() {
        const { title, description, removeNote } = this.props;
        return (
            <div className="note" onClick={() => removeNote(title)}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
    }
}

export default Note;
