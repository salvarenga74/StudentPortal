const { AuthenticationError } = require("apollo-server-express");
const { User, MessagePost } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    allMessages: async () => {
      return await MessagePost.find({}).populate("comments");
    },
    categoryMessages: async (parent, { classCategory }) => {
      return await MessagePost.find({ classCategory });
    },
    singleMessage: async (parent, {messageId}) => {
      return await MessagePost.findOne({_id: messageId}).populate('comments');
    },

  
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addMessage: async (parent, { messageText }, context) => {
      if (context.user) {
        const message = await MessagePost.create({
          messageText,
          classCategory,
          messageAuthor: context.user.username,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { messages: message._id } }
        // );

        return message;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { messageId, commentText }, context) => {
      if (context.user) {
        return MessagePost.findOneAndUpdate(
          { _id: messageId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeMessage: async (parent, { messageId }, context) => {
      if (context.user) {
        const message = await MessagePost.findOneAndDelete({
          _id: messageId,
          messageAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { messages: message._id } }
        );

        return message;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { messageId, commentId }, context) => {
      if (context.user) {
        return MessagePost.findOneAndUpdate(
          { _id: messageId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
