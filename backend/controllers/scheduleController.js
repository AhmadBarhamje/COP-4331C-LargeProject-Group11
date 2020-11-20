const User = require('../models/user.model')
const Availability = require('../models/availability.model')
const Schedule = require('../models/schedule.model')

exports.setAvailability = async (req, res) => {
    try {
        let {id, userName} = req.user;
        const {newAvailability} = req.body;
        let currentAvailability = await Availability.findOne({userId:id});
        
        currentAvailability.availability = newAvailability;
        await currentAvailability.save();

        // TODO: Loop through all schedules user is in to propogate change

        return res.status(200).json({success: true});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
}

exports.getAvailability = async (req, res) => {
    try {
        let {id, userName} = req.user;
        console.log(id + ' ' + userName);
        let currentAvailability = await Availability.findOne({userId:id});
        return res.status(200).json({schedules: currentAvailability.schedules,
                                    availability: currentAvailability.availability});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
}

exports.getAllSchedules = async (req, res) => {
    try {
        let {id, userName} = req.user;
        let currentAvailability = await Availability.findOne({userId:id});
        return res.status(200).json({schedules: currentAvailability.schedules});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
}

exports.createSchedule = async (req, res) => {
    try {
        let {id, userName} = req.user;
        let {name} = req.body;
        name = userName + '.' + name;

        let check = await Schedule.findOne({name:name});
        if (check) {
            return res.status(400).json({success: false, error: "A schedule exists with that name"});
        }

        let newSchedule = await new Schedule({name: name, owner: userName}).save();
        await newSchedule.addMember(userName);
        return res.status(200).json({success: true});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
}

exports.getSchedule = async (req, res) => {
    try {
        let {name} = req.body;

        let schedule = await Schedule.findOne({name:name});
        return res.status(200).json({name: name, owner: schedule.owner, members: schedule.memberList, schedule: schedule.totalAvailability})
    } catch(error) {
        console.error(error);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
}

exports.addMember = async (req, res) => {
    try {
        let {id, userName} = req.user;
        let {name, affectedUser} = req.body;
        let schedule = await Schedule.findOne({name: name});
        if (schedule.owner !== userName) {
            return res.status(403).json({success: false, error: "Only the owner can add/remove"});
        }

        let affectedUserDoc = await User.findOne({userName: affectedUser});
        if (!affectedUserDoc.active) {
            return res.status(403).json({success: false, error: "User account not verified"});
        }
        
        await schedule.addMember(affectedUser);
        return res.status(200).json({success:true});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
}

exports.removeMember = async (req, res) => {
    try {
        let {id, userName} = req.user;
        let {name, affectedUser} = req.body;
        let schedule = await Schedule.findOne({name: name});
        if (schedule.owner !== userName) {
            return res.status(403).json({Success: false, error: "Only the owner can add/remove"});
        }
        await schedule.removeMember(affectedUser);
        return res.status(200).json({success:true});
    } catch(error) {
        console.error(error);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
}