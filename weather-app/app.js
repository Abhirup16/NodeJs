const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=20685ab66657a2ac322ece3138bc401f&query=Durgapur'
request({url:url, json:true},(error,Response)=>{
    const Data = Response.body.current
    console.log('Current Temp is '+Data.temperature+' last recorded at '+Data.observation_time)
})
