const mongoose = require('mongoose')

const timeSlotSchema = new mongoose.Schema({
    users: {type:[String], default: [], required:true},
    numPeople: {type:Number, default: 0, required:true},
    _id: false,
    id: false
});

const scheduleSchema = new mongoose.Schema({
    ownerId: {type: String, default:"testDefault", required: true},
    memberList: {type: Array, default: [], required: true},
    totalAvailability: {
        sun: {type:[timeSlotSchema], default: new Array(96).fill(() => ({})), required:true},
        mon: {type:[timeSlotSchema], default: new Array(96).fill(() => ({})), required:true},
        tue: {type:[timeSlotSchema], default: new Array(96).fill(() => ({})), required:true},
        wed: {type:[timeSlotSchema], default: new Array(96).fill(() => ({})), required:true},
        thu: {type:[timeSlotSchema], default: new Array(96).fill(() => ({})), required:true},
        fri: {type:[timeSlotSchema], default: new Array(96).fill(() => ({})), required:true},
        sat: {type:[timeSlotSchema], default: new Array(96).fill(() => ({})), required:true},
    }
})


module.exports = mongoose.model("Schedule", scheduleSchema);


// sun: [{
//     people: {type:[String], default: [], required:true},
//     numPeople: {type:Number, default:0, required:true}
// }],

// sun: {type: Array, default: new Array(96).fill(0), required:true},
// mon: {type: Array, default: new Array(96).fill(0), required:true},
// tue: {type: Array, default: new Array(96).fill(0), required:true},
// wed: {type: Array, default: new Array(96).fill(0), required:true},
// thu: {type: Array, default: new Array(96).fill(0), required:true},
// fri: {type: Array, default: new Array(96).fill(0), required:true},
// sat: {type: Array, default: new Array(96).fill(0), required:true},