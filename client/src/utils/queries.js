import { gql } from "@apollo/client";

<<<<<<< HEAD
=======

>>>>>>> aa6ef0ba82c125ad9fc54c502ff422026d17b320
export const QUERY_ALL_MESSAGES = gql`
  query allMessages {
    allMessages {
      _id
      messageText
      messageAuthor
      createdAt
      classCategory
    }
  }
`;
export const QUERY_CATEGORY_MESSAGES = gql`
  query getAllMessages($classCategory: String!) {
    categoryMessages(classCategory: $classCategory) {
      _id
      messageText
      messageAuthor
      classCategory
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_MESSAGE = gql`
  query getSingleMessage($messageId: ID!) {
    singleMessage(messageId: $messageId) {
      _id
      messageText
      messageAuthor
      classCategory
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;
