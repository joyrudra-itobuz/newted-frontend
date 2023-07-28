import React, { useEffect, useState } from "react";
import "./_style.scoped.scss";
import config from "../../config/config";
import axios from "axios";

function AllNotes() {
  interface Note {
    heading: string;
    isDeleted: boolean;
    body?: string;
  }

  interface NoteResponse {
    data: { data: Note[] | null; message: string; success: boolean };
  }

  const [allNotes, setAllNotes] = useState<Note[]>([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  useEffect(() => {
    console.log(allNotes);
  }, [allNotes]);

  const getAllNotes = async () => {
    const apiURl = config.serverEndpoint + "/all-notes";

    const allNoteResponse: NoteResponse = await axios.get(apiURl);

    setAllNotes(allNoteResponse?.data?.data ?? []);

    console.log(allNotes);
  };

  return (
    <div className="all-notes-container gap-5 bg-[#181818] text-white px-5">
      {allNotes?.map((data, index) => {
        if (!data?.isDeleted)
          return (
            <div
              key={index}
              className="bg-gray-400 bg-opacity-10 p-5 h-40 overflow-auto"
            >
              <h2 className="truncate">{data?.heading}</h2>
              <p className="mt-5">{data?.body}</p>
            </div>
          );

        return null;
      })}
    </div>
  );
}

export default React.memo(AllNotes);
