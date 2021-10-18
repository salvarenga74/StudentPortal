import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_MESSAGE } from "../utils/queries";

const SingleMessage = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { messageId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_MESSAGE, {
    // pass URL parameter
    variables: { messageId: messageId },
  });

  const message = data?.singleMessage || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3 className="card-header">
        <span className="card-header-title">{message.messageAuthor}</span> <br/>
        <span className="card-content" style={{ fontSize: "1rem" }}>
          created this post on {message.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="box"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            lineHeight: "1.5",
          }}
        >
          {message.messageText}
        </blockquote>
      </div>

      <div className="box">
        <CommentList comments={message.comments} />
      </div>
      <div className="box">
        <CommentForm messageId={message._id} />
      </div>
    </div>
  );
};
export default SingleMessage;
