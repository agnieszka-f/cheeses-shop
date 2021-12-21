/* eslint-disable linebreak-style */
const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/orders', async (req, res) => { 
  const {firstName, lastName, city, postCode, street, nrHouse, nrFlat, email, phone, moreInfo, productsId, sum, sumTotal, delivery } = req.body;
  if(firstName && lastName && city && postCode && street && nrHouse && email && phone && productsId && productsId.length > 0 && sum && sumTotal && delivery ){
    try {
      const newOrder = new Order({firstName:firstName, lastName:lastName, city:city, postCode:postCode, street:street, nrHouse:nrHouse, nrFlat:nrFlat, email:email, phone:phone, moreInfo:moreInfo, sum:sum, sumTotal:sumTotal, delivery:delivery, productsId: [...productsId] });
      await newOrder.save();
      const result = await Order.findById(newOrder._id);
      if(result) res.json(result);
      else res.status(404).json({ messsage: 'Not found' });
    } catch(err) {
      res.status(500).json(err);
    }
  } else res.status(404).json({message: 'Not all required fields have been completed'});
});


module.exports = router;
