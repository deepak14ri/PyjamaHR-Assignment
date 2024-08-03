import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { TbPinned, TbPinnedFilled } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { deleteNote, togglePin, updateNote } from '../redux/notesSlice';
import EditNoteModal from './EditNoteModal';

interface NoteProps {
  id: number;
  title: string;
  content: string;
  pinned: boolean;
  image: string | null;
  backgroundColor: string;
}

const Note: React.FC<NoteProps> = ({
  id,
  title,
  content,
  pinned,
  image,
  backgroundColor,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (
    newTitle: string,
    newContent: string,
    newImage: string | null,
    newBackgroundColor: string
  ) => {
    dispatch(
      updateNote({
        index: id, // Ensure `id` matches the `index` used in your Redux store
        note: {
          title: newTitle,
          content: newContent,
          image: newImage,
          backgroundColor: newBackgroundColor,
        },
      })
    );
    setIsModalOpen(false); // Close the modal after saving
  };

  return (
    <div className="note" style={{ backgroundColor }}>
      <h1>{title}</h1>
      <p>{content}</p>
      {image && <img src={image} alt="note" style={{ width: '100%' }} />}
      <button onClick={() => dispatch(deleteNote(id))} aria-label="Delete Note">
        <MdDelete size={25} />
      </button>
      <button onClick={() => setIsModalOpen(true)} aria-label="Edit Note">
        <MdEdit size={25} />
      </button>
      <button onClick={() => dispatch(togglePin(id))} aria-label="Toggle Pin">
        {pinned ? <TbPinnedFilled size={25} /> : <TbPinned size={25} />}
      </button>

      <EditNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleEdit}
        currentTitle={title}
        currentContent={content}
        currentImage={image}
        currentBackgroundColor={backgroundColor}
      />
    </div>
  );
};

export default Note;
