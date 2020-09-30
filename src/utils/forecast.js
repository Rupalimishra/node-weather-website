const request = require('request')

const forecast = (latitude, longitude) => {
    const url = 'http://api.weatherstack.com/current?access_key=a82be2c5525950c7d133463f1e8658bd/' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('Unable to connect to weather service!')
        } else {
            console.log("It is currently" + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degress out.")
        }
        
    })
}

module.exports = forecast
