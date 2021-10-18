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
      <div className="flex-row justify-center" style={{backgroundBlendMode: "color: blue"}}>
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <MessageForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
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
