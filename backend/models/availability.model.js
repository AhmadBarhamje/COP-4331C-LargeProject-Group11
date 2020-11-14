const mongoose = require('mongoose')

const availabilitySchema = new mongoose.Schema({
    userId: {type: String, required: true},
    userName: {type: String, required: true},
    availability: {
        sun: {type: [Boolean], default: new Array(96).fill(false), required:true},
        mon: {type: [Boolean], default: new Array(96).fill(false), required:true},
        tue: {type: [Boolean], default: new Array(96).fill(false), required:true},
        wed: {type: [Boolean], default: new Array(96).fill(false), required:true},
        thu: {type: [Boolean], default: new Array(96).fill(false), required:true},
        fri: {type: [Boolean], default: new Array(96).fill(false), required:true},
        sat: {type: [Boolean], default: new Array(96).fill(false), required:true},
    }
})

module.exports = mongoose.model("Availability", availabilitySchema);