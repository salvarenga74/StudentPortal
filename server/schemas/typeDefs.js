const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type MessagePost {
    _id: ID
    messageText: String
    messageAuthor: String
    classCategory: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Query {
    allMessages: [MessagePost]
    singleMessage(messageId: ID!): MessagePost
    categoryMessages(classCategory: String): [MessagePost]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMessage(messageText: String!): MessagePost
    addComment(messageId: ID!, commentText: String!): MessagePost
    removeMessage(messageId: ID!): MessagePost
    removeComment(messageId: ID!, commentId: ID!): MessagePost
  }
`;

module.exports = typeDefs;
