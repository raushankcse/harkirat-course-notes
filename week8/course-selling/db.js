const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://raushankcse_db_user:01032003@cluster0.igfpjot.mongodb.net/course");

const usersSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
  firstName: String,
  lastName: String,
})

const adminSchema = new Schema({
  email : {type: String, unique: true},
  password: String,
  firstName:String,
  lastName: String
})

const courseSchema = new Schema({
  title: String,
  description : String,
  price: String,
  imageUrl : String,
  creatorId : Schema.ObjectId
})

const purchaseSchema = new Schema({
  courseId: Schema.ObjectId,
  userId: Schema.ObjectId
})



const userModel = mongoose.model('users', usersSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);
const adminModel = mongoose.model('admin', adminSchema);

module.exports = {
  userModel: userModel,
  courseModel: courseModel,
  purchaseModel: purchaseModel,
  adminModel: adminModel
}