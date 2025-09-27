const moment = require('moment-timezone');

const DateTimeTH = () => moment().tz('Asia/Bangkok');

module.exports = { DateTimeTH };
