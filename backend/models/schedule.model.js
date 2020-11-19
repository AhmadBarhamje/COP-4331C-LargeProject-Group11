const mongoose = require('mongoose')
const Avail = require('./availability.model')

const HOURLY_INTERVAL = 24;
const THIRTY_MIN_INTERVAL = 48;
const FIFTEEN_MIN_INTERVAL = 96;

const scheduleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ownerId: {type: String, default:"testDefault", required: true},
    memberList: {type: Array, default: [], required: true},
    totalAvailability: {
        sun: {type:[[String]], default: new Array(THIRTY_MIN_INTERVAL).fill([]), required:true},
        mon: {type:[[String]], default: new Array(THIRTY_MIN_INTERVAL).fill([]), required:true},
        tue: {type:[[String]], default: new Array(THIRTY_MIN_INTERVAL).fill([]), required:true},
        wed: {type:[[String]], default: new Array(THIRTY_MIN_INTERVAL).fill([]), required:true},
        thu: {type:[[String]], default: new Array(THIRTY_MIN_INTERVAL).fill([]), required:true},
        fri: {type:[[String]], default: new Array(THIRTY_MIN_INTERVAL).fill([]), required:true},
        sat: {type:[[String]], default: new Array(THIRTY_MIN_INTERVAL).fill([]), required:true},
    }
})

scheduleSchema.methods = {
    addMember: async function(user) {
        try {
            let updateSchedule = this.totalAvailability.toJSON();
            let userAvailability = await Avail.findOne({userName: user});
            let userSchedule = userAvailability.availability.toJSON();

            for (var day in userSchedule) {
                for (var i = 0; i < THIRTY_MIN_INTERVAL; i++) {
                    if (userSchedule[day][i]) {
                        updateSchedule[day][i].push(user);
                    }
                }
            }
            this.totalAvailability = updateSchedule;
            this.memberList.push(user);
            await this.save();
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
                for (var i = 0; i < THIRTY_MIN_INTERVAL; i++) {
                    updateSchedule[day][i] = updateSchedule[day][i].filter(item => item !== user);
                }
            }
            this.totalAvailability = updateSchedule; 
            this.memberList = this.memberList.filter(item => item !== user);
            await this.save();
            return;
        } catch(error) {
            console.error(error);
            return;
        }
    },
    updateAvailability: async function(user) {
        try {
            let updateSchedule = this.totalAvailability.toJSON();
            let userAvailability = await Avail.findOne({userName: user});
            let userSchedule = userAvailability.availability.toJSON();

            for (var day in updateSchedule) {
                for (var i = 0; i < THIRTY_MIN_INTERVAL; i++) {
                    if (updateSchedule[day][i].includes(user) && !userSchedule[day][i]) { // User is already here, but no longer available
                        updateSchedule[day][i] = updateSchedule[day][i].filter(item => item !== user);
                    } else if (!updateSchedule[day][i].includes(user) && userSchedule[day][i]) { // User is not here, and is now available
                        updateSchedule[day][i].push(user);
                    }
                }
            }
            this.totalAvailability = updateSchedule;
            await this.save();
            return;
        } catch(error) {
            console.error(error);
            return;
        }
    }
}

module.exports = mongoose.model("Schedule", scheduleSchema);