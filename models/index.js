const User = require('./User');
const Day = require('./Day');


User.hasMany(Day, {
    foreignKey: 'user_id',
});

Day.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User , Day };