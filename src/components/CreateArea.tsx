import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAdd, IoMdColorPalette } from 'react-icons/io';
import { addNote, updateNote } from '../redux/notesSlice';
import { RootState } from '../redux/store';
import EditNoteModal from './EditNoteModal';
import './../App.css';

interface Note {
  title: string;
  content: string;
  pinned: boolean;
  image: string | null;
  backgroundColor: string;
}

const CreateArea: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState<Note>({
    title: '',
    content: '',
    pinned: false,
    image: null,
    backgroundColor: '#fff',
  });
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleExpanded = () => setExpanded(true);

  const submitButton = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addNote(note));
    setNote({
      title: '',
      content: '',
      pinned: false,
      image: null,
      backgroundColor: '#fff',
    });
    setExpanded(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNote((prevNote) => ({ ...prevNote, image: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote((prevNote) => ({ ...prevNote, backgroundColor: event.target.value }));
  };

  const handleEditSave = (
    newTitle: string,
    newContent: string,
    newImage: string | null,
    newBackgroundColor: string
  ) => {
    if (currentNoteIndex === null) return;

    const updatedNote = {
      title: newTitle,
      content: newContent,
      image: newImage,
      backgroundColor: newBackgroundColor,
      pinned: notes[currentNoteIndex].pinned, // retain the pinned state
    };

    dispatch(updateNote({ index: currentNoteIndex, note: updatedNote }));
    setCurrentNoteIndex(null);
    setEditModalOpen(false); // Close the modal after saving
  };

  return (
    <div>
      <form style={{ backgroundColor: note.backgroundColor }}>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          />
          {note.image && (
            <div>
              <img src={note.image} alt="Note" style={{ maxWidth: '100%', marginTop: '10px' }} />
            </div>
          )}
        </p>
        {isExpanded && (
          <>
            <label htmlFor="imageUpload" style={{ cursor: 'pointer', marginRight: '10px' }}>
              <IoIosAdd size={24} />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              aria-label="Upload Image"
            />
            <label htmlFor="backgroundColor" style={{ cursor: 'pointer' }}>
              <IoMdColorPalette size={24} />
            </label>
            <input
              type="color"
              id="backgroundColor"
              onChange={handleBackgroundColorChange}
              style={{ display: 'none' }}
              aria-label="Choose Background Color"
            />
          </>
        )}

        <button onClick={submitButton} className="add-note-button" aria-label="Add Note">
          <IoIosAdd size={35} />
        </button>
      </form>

      <EditNoteModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleEditSave}
        currentTitle={note.title}
        currentContent={note.content}
        currentImage={note.image}
        currentBackgroundColor={note.backgroundColor}
      />
    </div>
  );
};

export default CreateArea;
