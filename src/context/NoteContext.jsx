import { createContext, useEffect, useState } from "react";
import axios from "axios";
const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([{}]);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      setNotes(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNote = async (id) => {
    try {
      const res = await axios.get(`/api/notes/${id}`);
      setNote(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const addNote = async (note) => {
    try {
      await axios.post("/api/notes", note);
      setNotes((prevNotes) => [...prevNotes, note]);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, note, fetchNote, addNote, deleteNote, loading }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
