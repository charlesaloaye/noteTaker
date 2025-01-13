import { createContext, useEffect, useState } from "react";
import axios from "axios";
const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([{}]);
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      setNotes(res.data);
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

  return (
    <NoteContext.Provider value={{ notes, note, fetchNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
