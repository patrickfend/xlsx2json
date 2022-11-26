const defaultPort = 3000
const customPort = Number(process.argv[2])
const port = isNaN(customPort) ? defaultPort : customPort

const xlsx = require('xlsx')
const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()

app.use(fileUpload())

app.get('/', (req, res) => {
  res.send('{ "status": "running" }')
})

app.post('/', (req, res) => {
  try {
    if(!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded'
      });
    } else {
      let file = xlsx.read(req.files.excel.data)
      let sheets = file.SheetNames
      let data = {}
  
      for(let i = 0; i < sheets.length; i++) {
        data[file.SheetNames[i]] = []
        let temp = xlsx.utils.sheet_to_json(
          file.Sheets[file.SheetNames[i]])
          temp.forEach((res) => {
            data[file.SheetNames[i]].push(res)
          })
      }

      res.send(data)
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

app.listen(port, () => 
  console.log(`simple-xlsx2json-api is listening on port ${port}.`)
)