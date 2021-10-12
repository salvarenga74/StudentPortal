const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGOURL || 'mongodb://localhost/programming-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
