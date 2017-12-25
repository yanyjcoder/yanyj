import {errorMessage, successMessage} from '../tool/Common';
import mongoose from 'mongoose';
let TicketProfit = require('../models/TicketProfit');

export let save = (ticketProfit = {time: new Date(), amount: 0.0}) => {
  console.log(ticketProfit);
  let _ticketProfit = new TicketProfit({...ticketProfit});
  return _ticketProfit.save((error, docs) => {
    if (error) return errorMessage(error);
    return successMessage([]);
  });
};

export let findAll = () => {
  return TicketProfit.find({deleteFlag: false}, (error, docs) => {
    if (error) return errorMessage(error);
    return successMessage(docs);
  });
};

export let findById = (id) => {
  let ObjectId = mongoose.Types.ObjectId(id);
  return TicketProfit.find({_id: ObjectId, deleteFlag: false}, (error, docs) => {
    if (error) return errorMessage(error);
    return successMessage(docs);
  });
};

export let updateById = async (id, profit) => {
  let ObjectId = mongoose.Types.ObjectId(id);
  return TicketProfit.update({_id: ObjectId}, profit, (error, docs) => {
    if (error) return errorMessage(error);
    return successMessage([docs]);
  });
};
