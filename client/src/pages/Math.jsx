import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import MessageList from "../components/MessageList";
import { QUERY_CATEGORY_MESSAGES } from "../utils/queries";
import MessageForm from "../components/MessageForm";

const MathMessages = () => {
    const { classCategory } = useParams();
  const { loading, data } = useQuery(QUERY_CATEGORY_MESSAGES, {
    // pass URL parameter
    variables: { classCategory: "Math" },
  });
  const messages = data?.categoryMessages || [];
  console.log(data)
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <main>
      <div className="flex-row justify-center">
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
              title="Posts from your Math Class"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default MathMessages;