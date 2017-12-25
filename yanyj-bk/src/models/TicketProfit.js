import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TicketProfitSchema = new Schema({
  time: {
    type: String,
    // unique: true,
    require: true
  },
  principal: {
    type: Number,
    require: true,
    default: 0.0
  },
  occupancy: {
    type: Number,
    require: true,
    default: 0.0
  },
  principalLoss: { // false:存在， true:损失
    type: Boolean,
    require: true,
    default: false
  },
  extractAmount: {
    type: Number,
    default: 0.0
  },
  deleteFlag: {
    type: Boolean,
    default: false
  },
  extractRecords: [
    {
      time: String,
      amount: Number
    }
  ]
});

module.exports = mongoose.model('TicketProfit', TicketProfitSchema);
