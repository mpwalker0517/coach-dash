function getFirstDayOfMonth(dateString) {
    let date = new Date(dateString);
    date.setDate(date.getDate()+1);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const year = firstDay.getFullYear();
    const month = String(firstDay.getMonth() + 1).padStart(2, '0');
    const day = String(firstDay.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getLastDayOfMonth(dateString) {
    const date = new Date(dateString);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const year = lastDay.getFullYear();
    const month = String(lastDay.getMonth() + 1).padStart(2, '0');
    const day = String(lastDay.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

module.exports.getFirstDayOfMonth = getFirstDayOfMonth
module.exports.getLastDayOfMonth = getLastDayOfMonth