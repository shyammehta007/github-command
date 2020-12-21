function toEpoch() {
    const date = new Date()
    const epoch = date.getTime(date.toDateString()) / 1000
    return epoch
}

function toDate(epoch) {
    const date = new Date(epoch)
    return date.toDateString()
}

module.exports = {
    toEpoch,
    toDate
}