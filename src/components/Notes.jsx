import React, { useContext, useEffect, useState } from "react";
import Card from "./shared/Card";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoteContext from "../context/NoteContext";
const Notes = () => {
  const { notes, loading } = useContext(NoteContext);
  return (
    <>
      {!loading &&
        notes.map((note, index) => (
          <Card key={index}>
            <div className='py-5 flex items-start justify-between'>
              <div className='flex gap-3'>
                <div className='text-start'>
                  <span className='block text-sm text-gray-600'>
                    {note.title}
                  </span>
                  <span className='block text-sm text-gray-700 font-semibold'>
                    {note.body}
                  </span>
                </div>
              </div>

              <Link
                to={`/note/${note.id}`}
                className='text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100'
              >
                <FaEdit className='text-blue-700' />
              </Link>
            </div>
          </Card>
        ))}
    </>
  );
};

export default Notes;
