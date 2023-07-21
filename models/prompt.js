import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId, //document in the database
    ref: "User", // 1 to many relationship 1 user -> many prompt
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
