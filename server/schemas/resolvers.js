const { AuthenticationError } = require("apollo-server-express");
const { User, MessagePost } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
<<<<<<< HEAD
    categoryMessages: async (parent, args, context) => {},

    // finish this here above

    users: async () => {
      return User.find().populate("thoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("thoughts");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You need to be logged in!");
=======
    allMessages: async () => {
      return await MessagePost.find({}).populate("comments");
    },
    categoryMessages: async (parent, { classCategory }) => {
      return await MessagePost.find({ classCategory });
>>>>>>> a02081cce1ab6910d9cdb274e5e19deb71b490e8
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
<<<<<<< HEAD
    addComment: async (parent, { thoughtId, commentText }, context) => {
=======
    addMessage: async (parent, { messageText }, context) => {
      if (context.user) {
        const message = await MessagePost.create({
          messageText,
          messageAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { messages: message._id } }
        );

        return message;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { messageId, commentText }, context) => {
>>>>>>> a02081cce1ab6910d9cdb274e5e19deb71b490e8
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
<<<<<<< HEAD

    removeComment: async (parent, { thoughtId, commentId }, context) => {
=======
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
>>>>>>> a02081cce1ab6910d9cdb274e5e19deb71b490e8
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
