const crypto = require('crypto');
function formatDateTime(dateTime) {
    const date = new Date(dateTime);

    // 获取年月日
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // 获取小时，分钟，秒
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // 上午/下午
    const meridiem = hour < 12 ? '上午' : '下午';

    // 调整小时为12小时制
    const displayHour = hour > 12 ? hour - 12 : hour;

    // 格式化输出
    const formattedDateTime = `${year}年${month}月${day}日 ${meridiem}${displayHour}:${minute}:${second}`;

    return formattedDateTime;
}

function generateRandomId(length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

module.exports = {
    formatDateTime, generateRandomId
}