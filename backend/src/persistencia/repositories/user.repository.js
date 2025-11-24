const User = require('../models/user.model');

function findAll({ limit = 0, skip = 0 } = {}) {
  return User.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
}
function findById(id) {
  return User.findById(id).lean();
}
function findByEmail(email) {
  return User.findOne({ email }).lean();
}
function create(data) { 
    return User.create(data); 
}
function update(id, data) { 
    return User.findByIdAndUpdate(id, data, { new: true, runValidators: true }); 
}
function remove(id) { 
    return User.findByIdAndDelete(id); 
}

module.exports = { findAll, findById, findByEmail, create, update, remove };