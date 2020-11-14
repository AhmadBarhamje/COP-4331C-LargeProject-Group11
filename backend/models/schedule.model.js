const mongoose = require('mongoose')
const Avail = require('./availability.model')

const scheduleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ownerId: {type: String, default:"testDefault", required: true},
    memberList: {type: Array, default: [], required: true},
    totalAvailability: {
        sun: {type:[[String]], default: new Array(96).fill([]), required:true},
        mon: {type:[[String]], default: new Array(96).fill([]), required:true},
        tue: {type:[[String]], default: new Array(96).fill([]), required:true},
        wed: {type:[[String]], default: new Array(96).fill([]), required:true},
        thu: {type:[[String]], default: new Array(96).fill([]), required:true},
        fri: {type:[[String]], default: new Array(96).fill([]), required:true},
        sat: {type:[[String]], default: new Array(96).fill([]), required:true},
    }
})


scheduleSchema.methods = {
    addMember: async function(user) {
        try {
            let updateSchedule = this.totalAvailability.toJSON();
            let userAvailability = await Avail.findOne({userName: user});
            let userSchedule = userAvailability.availability.toJSON();

            for (var day in userSchedule) {
                for (var i = 0; i < 96; i++) {
                    if (userSchedule[day][i]) {
                        updateSchedule[day][i].push(user);
                    }
                }
            }
            this.totalAvailability = updateSchedule;
            this.memberList.push(user);
            this.save();
            return;
        } catch(error) {
            console.error(error);
            return;
        }
    },
    removeMember: async function(user) {
        try {
            let updateSchedule = this.totalAvailability.toJSON();
            
            for (var day in updateSchedule) {
                for (var i = 0; i < 96; i++) {
                    updateSchedule[day][i] = updateSchedule[day][i].filter(item => item !== user);
                }
            }
            this.totalAvailability = updateSchedule; 
            this.memberList = this.memberList.filter(item => item !== user);
            this.save();
            return;
        } catch(error) {
            console.error(error);
            return;
        }
    }
}

module.exports = mongoose.model("Schedule", scheduleSchema);