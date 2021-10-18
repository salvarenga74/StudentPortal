import React from "react";
import { useQuery } from "@apollo/client";

import MessageList from "../components/MessageList";
import { QUERY_ALL_MESSAGES } from "../utils/queries";
import MessageForm from "../components/MessageForm";

const AllMessages = () => {
  const { loading, data } = useQuery(QUERY_ALL_MESSAGES);
  const messages = data?.allMessages || [];
  console.log(data)
  return (
    <main>
      <div className="flex-row justify-center box pr-3 mr-6" style={{backgroundBlendMode: "color: blue"}}>
        <div
          className="box"
          
        >
          <MessageForm />
        </div>
        <div className="box pr-3 mr-6">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MessageList
              messages={messages}
              title="Viewing posts from all classes"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default AllMessages;
