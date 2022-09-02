import { Component } from "react";
import Note from './Note';
import Button from "./Button";
import NoteForm from "./NoteForm";

const styles = {
    notesBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '100px',
    },
    addNote: {
        margin: '20px 20%',
        width: '60%',
        height: '40px',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    cancelNote: {
        fontSize: '1rem',
        margin: '20px 20%',
        width: '60%',
        height: '40px',
        backgroundColor: 'red',
        color: 'white',
        cursor: 'pointer',
    },
}

class Notes extends Component {
    render() {
        const { notes, addNote, createNote, creatingNewNote, updateNotes, removeNote } = this.props;
        return (
            <div style={styles.notesBox}>
                {notes.map( el => 
                            <Note key={el.title} title={el.title} description={el.description} removeNote={removeNote} />
                          )}
                { creatingNewNote ? <NoteForm addNote={addNote} createNote={createNote} updateNotes={updateNotes} /> : null}
                <Button 
                    onClick={createNote}
                    style={creatingNewNote ? styles.cancelNote : styles.addNote}
                    children={ creatingNewNote ? 'Cancel' : 'New note' }
                />
            </div>
        )
    }
}

export default Notes;