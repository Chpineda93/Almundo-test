const db = require('../database/makeConnection');

const HOTEL_TABLE = 'hotels';

function getHotels(data, callback) {
    console.log(data)
    db(HOTEL_TABLE).select('*').where('name', 'like', '%'+ data.search +'%').then(function (hotels){
        callback(hotels);
    });
}

function getHotel(id, callback) {
    db(HOTEL_TABLE).select('*').where({ id: id }).then(function(hotel) {
        callback(hotel);
    });
}

module.exports = {
    getHotels: getHotels,
    getHotel: getHotel
}