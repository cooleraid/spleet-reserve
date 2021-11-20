const moment = require("moment");
const Reservations = require("../models/Reservations");
const { roomTypes } = require("../utils");

exports.overstay = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { checkout_time } = req.body;
        let reservation = await Reservations.query().findOne({ reservation_id: id, deleted: false });
        if (!reservation) return res.status(404).json({ status: "error", message: "Reservation not found", data: null });
        let room_type_rates = await roomTypes(reservation?.room_type);
        if (!room_type_rates) return res.status(400).json({ status: "error", message: "Could not determine customer's overstay fee.", data: null });
        const original_checkout_time = moment(moment(moment(reservation?.checkout_time).format('YYYY-MM-DD HH:mm')));
        const eventual_checkout_time = moment(moment(moment(checkout_time).format('YYYY-MM-DD HH:mm')));
        let hours = eventual_checkout_time.diff(original_checkout_time, 'hours', true);
        hours = Math.ceil(hours);
        if (hours <= 0) return res.status(400).json({ status: "error", message: "Customer has not overstayed.", data: null });
        let overstay_fee;
        if (eventual_checkout_time.day() % 6 == 0) {
            overstay_fee = Number(reservation.amount_paid) * room_type_rates.weekend_rate;
        } else {
            overstay_fee = Number(reservation.amount_paid) * room_type_rates.weekday_rate;
        }
        return res.status(200).json({ status: "success", message: "success", data: { overstay_fee } });
    } catch (error) {
        next(error)
    }
}