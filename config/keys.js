if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}

// module.exports = { mongoURI:"mongodb+srv://dev:gUDSvzl1fedP9JLm@cluster0-bekc3.mongodb.net/sundaymarket",
// secretOrKey: "B6bC3OzCv8"};
