const db = require("../config/connection");
const { User, MessagePost } = require("../models");
const userSeeds = require("./userSeeds.json");
const messageSeeds = require("./messageSeeds.json");

db.once("open", async () => {
  try {
    // clean database
    await MessagePost.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await MessagePost.create(messageSeeds);

    // for (let i = 0; i < messageSeeds.length; i++) {
    //   const { _id, messageAuthor } = await MessagePost.create(messageSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         messages: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
