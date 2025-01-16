import { FaHome, FaPlusCircle } from "react-icons/fa";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { addNote } = useContext(NoteContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Check if title and body are empty
    if (!title.trim() || !body.trim()) {
      setError(true);
      setMessage("Please enter body and title of note");
      return;
    }
    // Create a new note
    const newNote = {
      title,
      body,
    };
    // Add the note
    await addNote(newNote);

    setSuccess(true);
    //    // Navigate to home page
    navigate("/");
  };
  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <input
            type='text'
            placeholder='Title'
            className='w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg bg-white'
            onChange={(e) => setTitle(e.target.value)}
            name='title'
            value={title}
          />
        </div>

        <div className='mt-3'>
          <textarea
            type='text'
            placeholder='Please enter your note here'
            className='w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg bg-white'
            rows={5}
            style={{ resize: "none" }}
            onChange={(e) => setBody(e.target.value)}
            name='body'
            value={body}
          />
        </div>

        <div className='mt-3'>
          <button
            type='submit'
            placeholder='Please enter your note here'
            className='w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg bg-blue-600 text-white'
          >
            Add Note <FaPlusCircle className='inline ml-1' />
          </button>
          <Link
            to='/'
            className='block w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg bg-red-600 text-white'
          >
            Home <FaHome className='inline ml-1' />
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddPage;
