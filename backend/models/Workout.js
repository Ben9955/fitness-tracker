import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    workoutName: {
      type: String,
      required: true,
      unique: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      default: null,
    },
    weight: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    caloriesBurned: {
      type: Number,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Workout", WorkoutSchema);
