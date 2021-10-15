import { gql } from "@apollo/client";

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//     }
//   }
// `;

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

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//     }
//   }
// `;
