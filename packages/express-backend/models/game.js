import mongoose from "mongoose";

const GameSchema = new mongoose.schema(

    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        hostId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        sport: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        maxPlayers: {
            type: Number,
            required: false,
        },
        players: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        dateTime: {
            type: Date,
            required: true,
        },
        equipment: {
            type: String,
            required: true,
            trim: true,
        },
        skillLevel: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Game = mongoose.model("Game", GameSchema);

export default Game;