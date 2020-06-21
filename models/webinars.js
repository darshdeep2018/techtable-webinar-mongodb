const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const webinarSchema = new Schema({
    host_of_webinar: {
        type: String,
        required: true
    },
    meeting_id:{
        type: String,
    },
    meeting_password:{
        type: String,
    },
    platform_for_meeting:{
        type: String,
    },
    type_of_webinar:{
        type:String,
        required:true
    },
    agenda: {
        type: String,
        required: true
    },
    registration_link: {
        type: String,
        required: true
    },
    posting_date: {
        type: String,
        required: true
    },
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
}, {
    timestamps: true
});

var webinars = mongoose.model('webinar', webinarSchema);

module.exports = webinars;