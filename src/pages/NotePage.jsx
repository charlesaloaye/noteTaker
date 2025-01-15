import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const NotePage = () => {
  const { note, fetchNote, deleteNote } = useContext(NoteContext);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchNote(id);
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirm = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirm) {
      alert("Note not deleted");
    }
    await deleteNote(note.id);

    navigate("/");
  };
  if (!note) {
    return (
      <div className='bg-red-500 rounded p-5 text-center text-white'>
        <p> This note has been removed or deleted by you</p>
        <Link
          to='/'
          className='text-white bg-blue-500 p-2 rounded block w-1/4 mx-auto mt-5'
        >
          <FaArrowLeftLong className='inline' /> Home
        </Link>
      </div>
    );
  }
  return (
    <>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <div className='mt-72'>
        <div>
          <Link to='/' className='text-red-800'>
            <FaArrowLeftLong className='inline mr-1' /> Home
          </Link>
        </div>

        <button
          onClick={handleDelete}
          className='bg-red-700 text-white px-3 py-1 rounded-lg mt-6'
        >
          <FaTrash className='mr-1 inline' /> Delete
        </button>
      </div>
    </>
  );
};

export default NotePage;
