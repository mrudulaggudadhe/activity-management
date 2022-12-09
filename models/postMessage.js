import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    activityname: String,
    activitysubject: String,
    activitysem: String,
    activitysec: String,
    activityparticipients: String,
    activitydate: String,
    activitydesc: String,
    activitydoclink: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;