import React, { useEffect, useState } from "react";
import "./_style.scoped.scss";
import config from "../../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllNotes() {
  interface Note {
    heading: string;
    body?: string;
  }

  interface NoteResponse {
    data: { data: Note[] | null };
    message: string;
    success: boolean;
  }

  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    const apiURl = config.serverEndpoint + "/all-notes";

    const allNoteResponse: NoteResponse = await axios.get(apiURl);

    setAllNotes(allNoteResponse.data.data ?? []);
  };

  return (
    <div className="all-notes-container bg-[#1E1E1E] h-screen w-full">
      {allNotes?.map((data, index) => {
        return (
          <div
            key={index}
            className="p-5 bg-gray-400 bg-opacity-10 text-white cursor-pointer"
          >
            <h2>{data.heading}</h2>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );
}
