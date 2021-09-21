const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	blogTitle: String,
	blogContent: String,
    author: String,
	comments: Array,
	date: {
		type: String,
		default: Date.now
	},
	likes: {
		type: Number,
		default: 0
	},
});

// Making a MongoDB model for the schema-
module.exports = mongoose.model('Blog', blogSchema);
