import React, { useEffect, useState } from "react";
import "./_style.scoped.scss";
import config from "../../config/config";
import axios from "axios";

export default function AllNotes() {
  interface Note {
    heading: string;
    body?: string;
  }

  interface NoteResponse {
    data: Note[] | null;
    message: string;
    success: boolean;
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

    setAllNotes(allNoteResponse.data ?? []);
  };

  return (
    <div className="all-notes-container">
      {allNotes.map((data, index) => {
        return (
          <div key={index}>
            <h2>{data.heading}</h2>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );
}
