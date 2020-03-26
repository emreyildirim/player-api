const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    surname: {
      type: String
    },
    name:  {
      type: String
    },
    picture: {
        type: String
    },
    team: {
        type: String
    },
    teamlogo: {
        type: String
    },
    position: {
        type: String
    },
    nationality: {
        type: String
    },
    flag: {
        type: String
    },
    value: {
        type: String
    },
    matches: {
        type: String
    },
    goals: {
        type: String
    },
    asists: {
        type: String
    }

});

module.exports = mongoose.model("Player",PlayerSchema);
