const csvFilePath = './customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')
const path = require('path')

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
  fs.writeFileSync(path.join(__dirname,'customer-data.json'),JSON.stringify(jsonObj))
})
.on('done',(error)=>{
    console.log('done')
})
