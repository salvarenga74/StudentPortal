import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_MESSAGE } from "../../utils/mutations";
import { QUERY_ALL_MESSAGES } from "../../utils/queries";

const MessageForm = () => {
  const [formState, setFormState] = useState({
    messageText: "",
    messageAuthor: "",
    classCategory: "English",
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
    update(cache, { data: { addMessage } }) {
      try {
        const { allMessages } = cache.readQuery({ query: QUERY_ALL_MESSAGES });
        console.log(allMessages)
        cache.writeQuery({
          query: QUERY_ALL_MESSAGES,
          data: { allMessages: [addMessage, ...allMessages] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    try {
      const { data } = await addMessage({
        variables: { ...formState },
      });
      console.log({data})
      setFormState({
        messageText: "",
        messageAuthor: "",
        classCategory: "English",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "messageText" && value.length <= 500) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== "messageText") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div style={{background: "white", textAlign: "left", paddingLeft: "10px", border: "10px"}}>
      <h3>Do you need help with an assignment?</h3>

      <p
        className={`m-0 ${
          characterCount === 500 || error ? "text-danger" : ""
        }`}
      >
        Character Count: {characterCount}/500
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >



            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" name="messageAuthor" placeholder="Text input" value={formState.messageAuthor} onChange={handleChange}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Select Class</label>
              <div className="control">
                <div className="select">
                  <select name="classCategory" defaultValue={formState.classCategory} onChange={handleChange}>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Science">Science</option>
                    <option value="Math">Math</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea type="text" className="textarea" placeholder="Enter post here" name="messageText" value={formState.messageText} onChange={handleChange}></textarea>
              </div>
            </div>


            <div className="field is-grouped">
              <div className="control" style={{paddingBottom: "10px"}}>
                <button className="button is-rounded" type="submit">Submit</button>
              </div>
              {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
            </div>



        {/* <div className="col-12 col-lg-3" style={{paddingBottom: "10px"}}>
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Thought
          </button>
        </div> */}

      </form>
    </div>
  );
};

export default MessageForm;