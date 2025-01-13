import { FaHome, FaPlusCircle } from "react-icons/fa";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AddPage = () => {
  return (
    <>
      <Header />
      <div className='mt-3'>
        <input
          type='text'
          placeholder='Title'
          className='w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg bg-white'
        />
      </div>

      <div className='mt-3'>
        <textarea
          type='text'
          placeholder='Please enter your note here'
          className='w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg bg-white'
          rows={5}
          style={{ resize: "none" }}
        />
      </div>

      <div className='mt-3'>
        <button
          type='button'
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
    </>
  );
};

export default AddPage;
