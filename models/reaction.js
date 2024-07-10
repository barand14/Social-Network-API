const { Schema, model } = require('mongoose');

// Schema to create a course model
const reactiontSchema = new Schema(
  {
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionText: {
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
    

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



module.exports = reactionSchema;