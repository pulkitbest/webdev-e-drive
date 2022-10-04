const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=e4c6a9b0d360e3329b0e14287a4b8b30&query=45,-75'

const request = http.request(url, (response)=>{
    let data = ''

    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error)=>{
    console.log('An error', error)
})

request.end()