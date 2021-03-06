import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($messageText: String!, $classCategory: String!) {
    addMessage(messageText: $messageText, classCategory: $classCategory) {
      _id
      messageText
      messageAuthor
      createdAt
      classCategory
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($messageId: ID!, $commentText: String!) {
    addComment(messageId: $messageId, commentText: $commentText) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
