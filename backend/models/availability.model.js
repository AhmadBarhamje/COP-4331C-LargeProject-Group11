const mongoose = require('mongoose')

const HOURLY_INTERVAL = 24;
const THIRTY_MIN_INTERVAL = 48;
const FIFTEEN_MIN_INTERVAL = 96;

const availabilitySchema = new mongoose.Schema({
    userId: {type: String, required: true},
    userName: {type: String, required: true},
    availability: {
        sun: {type: [Boolean], default: new Array(THIRTY_MIN_INTERVAL).fill(false), required:true},
        mon: {type: [Boolean], default: new Array(THIRTY_MIN_INTERVAL).fill(false), required:true},
        tue: {type: [Boolean], default: new Array(THIRTY_MIN_INTERVAL).fill(false), required:true},
        wed: {type: [Boolean], default: new Array(THIRTY_MIN_INTERVAL).fill(false), required:true},
        thu: {type: [Boolean], default: new Array(THIRTY_MIN_INTERVAL).fill(false), required:true},
        fri: {type: [Boolean], default: new Array(THIRTY_MIN_INTERVAL).fill(false), required:true},
        sat: {type: [Boolean], default: new Array(THIRTY_MIN_INTERVAL).fill(false), required:true},
    }
})

module.exports = mongoose.model("Availability", availabilitySchema);