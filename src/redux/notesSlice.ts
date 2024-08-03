import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  title: string;
  content: string;
  pinned: boolean;
  image: string | null;
  backgroundColor: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<{ index: number; note: Partial<Note> }>) => {
      const { index, note } = action.payload;
      state.notes[index] = { ...state.notes[index], ...note };
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes.splice(action.payload, 1);
    },
    togglePin: (state, action: PayloadAction<number>) => {
      state.notes[action.payload].pinned = !state.notes[action.payload].pinned;
    },
  },
});

export const { addNote, updateNote, deleteNote, togglePin } = notesSlice.actions;

export default notesSlice.reducer;
