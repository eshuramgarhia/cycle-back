let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://eshucloud:Eshucloud15@cluster0.0xn4wqq.mongodb.net/bicycleDb'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
