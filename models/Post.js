//... title ,body,tags, thumbail, readtim, likes, dislikes,author, comments


const {Schema,model} = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  tags: {
    type: [String],
    required: true,
  },
  thumbanil: String,
  readTime: String,
  likes: [Schema.Types.ObjectId],
  dislikes: [Schema.Types.ObjectId],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref:'Comment'
    },
  ],
},{
    timestamps:true
});

const Post = model('Post',postSchema)

module.exports = Post
