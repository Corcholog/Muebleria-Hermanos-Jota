const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');

module.exports = mongoose.models.User || mongoose.model('User', userSchema);