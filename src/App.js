import { Component } from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Notes from './components/Notes';

class App extends Component {
  state = {
    notes: JSON.parse(localStorage.getItem('todoitems')) || [],
    creatingNewNote: false,
  }

  addNote = (note) => {
    const { notes } = this.state;
    if (notes.find( x => x.title === note.title)){
      return
    }
    this.setState({ notes: this.state.notes.concat(note) })
  }

  updateNotes = () => {
    const { notes } = this.state;
    const notesStrings = JSON.stringify(notes);
    localStorage.setItem('todoitems', notesStrings);
  }

  removeNote = (title) => {
    const { notes } = this.state;
    this.setState({ notes: notes.filter( x => x.title !== title) })
    this.updateNotes();
  }

  createNote = () => {
    this.setState({ creatingNewNote: !this.state.creatingNewNote})
  }

  render() {
    const { notes, creatingNewNote } = this.state;
    return (
      <div>
        <Navbar />
        <Layout>
          <Notes 
            notes={notes} 
            creatingNewNote={creatingNewNote}
            addNote={this.addNote}
            createNote={this.createNote} 
            updateNotes={this.updateNotes()}
            removeNote={this.removeNote}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
