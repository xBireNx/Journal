const mongoose = require('mongoose')

const accountScheme = new mongoose.Schema({
    broker: { type: String, required: true },
    initialBalance: { type: String, required: true },
    currentBalance: { type: String, required: true },
    phase: { type: String, required: true },
    target: { type: String, required: true },
    maxLoss: { type: String, required: true },
    dailyLoss: { type: String, required: true },
    profit: { type: String, required: true },
    remainingProfit: { type: String, required: true },
    commission: { type: String, required: true },
}, {collection: 'accounts'})

const Account = mongoose.model('Account', accountScheme)

module.exports = Account