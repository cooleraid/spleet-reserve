const router = require("express").Router()
let { validate, Joi } = require('express-validation')
Joi = Joi.extend(require('@joi/date'));
const reservation = require("../controllers/reservation")

//Reservation Route
router.post("/reservation/overstay/:id", validate({
    body: Joi.object({
        checkout_time: Joi.date().format("YYYY-MM-DD HH:mm").required(),
    })
}), reservation.overstay)

module.exports = router