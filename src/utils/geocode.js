const request = require('request')

const geocode = () => {
    const geacodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnVwYWxpbWlzaHJhMjMiLCJhIjoiY2tmbWx3c3MzMDhleDJxczVwdHE5cXlhNyJ9.czHwpthh4UulrgrJCVoFqw&limit=1'

    request({ url: geacodeURL, json: true }, (error, response) => {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    } )
}
    
    
module.exports = geocode
