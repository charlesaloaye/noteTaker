import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../Header";

const Search = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 pt-4 md:px-8'>
      <div className='items-start justify-between gap-x-4 py-4 border-b sm:flex'>
        <Header isHome={false} />
        <div className='mt-6 sm:mt-0'>
          <div className='relative'>
            <svg
              className='w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
              />
            </svg>
            <input
              type='text'
              placeholder='Search Notes'
              className='w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg sm:max-w-xs'
            />
          </div>

          <div className='mt-5 text-end'>
            <Link to='/new-note' className='bg-blue-800 p-2 rounded text-white'>
              New Note <FaPlusCircle className='inline ml-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
