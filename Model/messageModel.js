const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const messageSchema = mongoose.Schema(
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      content: {
        type: String,
        trim: true,
      },
      reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
      },
    },
    {
      timeStamp: true,
    }
  );
  
const messageModel=mongoose.model("Message",messageSchema);
module.exports=messageModel