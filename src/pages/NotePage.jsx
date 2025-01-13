import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import { useContext, useEffect } from "react";

const NotePage = () => {
  const { note, fetchNote } = useContext(NoteContext);
  const { id } = useParams();
  useEffect(() => {
    fetchNote(id);
  }, []);

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
        <Link to='/' className='text-red-800'>
          <FaArrowLeftLong className='inline mr-1' /> Home
        </Link>
      </div>
    </>
  );
};

export default NotePage;
