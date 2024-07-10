const { Schema, model } = require('mongoose');
const reactionSchema = require("./reaction")
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    userName: {
      type: String,
      required: true  
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
    reactions: [
     reactionSchema
    ],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
