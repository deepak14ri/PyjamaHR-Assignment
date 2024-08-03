import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import './App.css';

import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';
import Footer from './components/Footer';

const App: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);


  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? 'Empty'
            : `Showing ${notes.length} Notes in Database`
        }
      />
      <CreateArea />
      {[...pinnedNotes, ...unpinnedNotes].map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          pinned={note.pinned}
          image={note.image}
          backgroundColor={note.backgroundColor}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
