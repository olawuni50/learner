import {Schema, models, model, Document} from 'mongoose'

export interface ILearner extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    startDateTime: Date;
    endDateTime: Date;
    imageUrl: string;
    price?: string;
    isFree: boolean;
    url?: string;
    category: {_id:string, name:string}
    organizer: {_id:string, firstName:string, lastName:string}

}

const LearnerSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String},
    location: {type:String},
    createdAt: {type:Date, default: Date.now},
    startDateTime: {type:Date, default: Date.now},
    endDateTime: {type:Date, default: Date.now},
    imageUrl: {type:String, required: true},
    price: {type:String},
    isFree: {type:Boolean, default:false},
    url: {type:String},
    category:{type:Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type:Schema.Types.ObjectId, ref: 'User'},
    // user: {type:Schema.Types.ObjectId, ref: 'User'},
})

const Learner = models.Learner || model('Learner', LearnerSchema);

export default Learner
