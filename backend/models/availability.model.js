const mongoose = require('mongoose')

const availabilitySchema = new mongoose.Schema({
    userId: {type: String, required: true},
    availability: {
        sun: {type: Array, default: new Array(96).fill(0), required:true},
        mon: {type: Array, default: new Array(96).fill(0), required:true},
        tue: {type: Array, default: new Array(96).fill(0), required:true},
        wed: {type: Array, default: new Array(96).fill(0), required:true},
        thu: {type: Array, default: new Array(96).fill(0), required:true},
        fri: {type: Array, default: new Array(96).fill(0), required:true},
        sat: {type: Array, default: new Array(96).fill(0), required:true}
    }
})

module.exports = mongoose.model("Availability", availabilitySchema);