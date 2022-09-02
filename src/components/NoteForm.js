import { Component } from "react";
import Button from "./Button";
import './NoteForm.css';

const styles = { 
    submit: {

    }
}

class NoteForm extends Component {
    render() {
        const { addNote, createNote, updateNotes } = this.props;
        const getData = () => {
            const data = {
                title: '',
                description: '',
            }
            data.title = document.getElementById('title').value;
            data.description = document.getElementById('description').value;
            addNote(data);
            createNote();
            updateNotes();
        }

        return (
            <div className="noteForm">
                <div className="form">
                    <div>
                        <input className="text" type='text' id='title' name='title' placeholder='Title' />
                        <input className="text" type='text' id='description' name='description' placeholder='Description' />
                    </div>
                    <Button style={styles.submit} onClick={getData} children='Ok' />
                </div>
            </div>
        )
    }
}

export default NoteForm;