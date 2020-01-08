const server = 'http://192.168.0.6:3000';

const headers = {
    'Content-Type': 'application/json'
}

export function getHotels(data) {
    return fetch(server+'/hotels', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });
}

export function getHotel(hotelId) {
    return fetch(server+'/hotels/'+hotelId);
}