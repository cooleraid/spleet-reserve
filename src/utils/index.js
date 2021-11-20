exports.roomTypes = (room_type = null) => {
    let room_types = [
        { room_type: 'regular', weekday_rate: 7 / 100, weekend_rate: 10 / 100 },
        { room_type: 'deluxe', weekday_rate: 8.5 / 100, weekend_rate: 12 / 100 },
        { room_type: 'palatial', weekday_rate: 11 / 100, weekend_rate: 16 / 100 }
    ];
    return room_types.find(r => r.room_type === room_type);
}