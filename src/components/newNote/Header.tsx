import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import "./_style.scoped.scss";
import SaveIcon from "@mui/icons-material/Save";

export default function Header() {
  const [heading, setHeading] = useState(String);
  const [body, setBody] = useState(String);

  interface Note {
    heading: string;
    body?: string;
  }

  interface NoteResponse {
    data: Note | null;
    message: string;
    success: boolean;
  }

  useEffect(() => {
    console.log(heading);
  }, [heading]);

  useEffect(() => {
    console.log(body);
  }, [body]);

  const saveButtonHandler = async () => {
    const apiURL = config.serverEndpoint + "/new-note";

    console.log({ apiURL });

    const newNoteData: Note = {
      heading,
      body,
    };
    const noteResponse: NoteResponse = await axios.post(apiURL, newNoteData);

    console.log(noteResponse.data);
  };

  const handleChange =
    (state: any, key: string) =>
    ({ target }: any) => {
      state(target[key]);
    };

  return (
    <header className="new-note-header p-[20px] text-white h-full w-full bg-gray-300 bg-opacity-0">
      <input
        className="mb-10 w-full bg-transparent text-2xl px-2 focus-visible:outline-dashed focus-visible:outline-gray-700"
        type="text"
        placeholder="Heading"
        onChange={handleChange(setHeading, "value")}
      />
      <div className="h-[20rem] w-full break-all min-h-[40vh]">
        <div
          contentEditable={true}
          role={"textbox"}
          aria-multiline={true}
          className="break-normal bg-transparent break-words p-2 border border-stone-600 focus-visible:outline-dashed focus-visible:outline-gray-700 h-full overflow-y-auto"
          placeholder="What's On Your Mind?"
          onInput={handleChange(setBody, "innerText")}
        ></div>
      </div>

      <button
        className="fixed top-[90vh] right-14 h-10 w-10 scale-[300%] rounded-full p-2  hover:shadow-2xl hover:bg-gray-600 transition-transform duration-300"
        onClick={saveButtonHandler}
      >
        <SaveIcon />
      </button>
    </header>
  );
}
