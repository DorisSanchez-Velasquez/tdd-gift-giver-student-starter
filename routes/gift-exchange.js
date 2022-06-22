const express = require(`express`)
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")
const { BadRequestError } = require("../utils/errors")

router.post('/pairs', async(req,res, next) => {
        // res.status(200).json({"names": []})
        //Watch resources: playlist video #16 for try/catch
    try
    {
        if(!req.body || !req.body.names)
        {
            throw new BadRequestError()
        }
        // let giftResults = GiftExchange.pairs(req.body.names)
        res.status(200).json(await GiftExchange.pairs(req.body.names));  
    }
    catch(err)
    {
        next(err);
    }
})

router.post('/traditional', async(req,res, next) => {
    // res.status(200).json({"names": []})
    try
    {
        if(!req.body || !req.body.names) //If no valid body or no names doesn't exist, throw error
        {
            throw new BadRequestError() 
        }
        // let giftResults = GiftExchange.traditional(req.body.names)
        res.status(200).json(await GiftExchange.traditional(req.body.names));  
    }
    catch(err)
    {
        next(err);
    }
})

module.exports = router