require('./model/survive')
const logic = require('./model/logic')
const sceneRoutes = require('./routes/scene')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/scene', sceneRoutes)

app.get('/', (req, res) => {
    res.redirect('/scene/1')
})
app.post('/scene/1/pick', async (req, res) => {
    console.log("Scene 1 Pick",req.body)
    let item1 = req.body.item1
    let item2= req.body.item2
    let inventory = await logic.scene_1(item1,item2)
    res.send("Added to inventory" + item1 + "&" + item2)
})

app.listen(PORT, function(){
    console.log(`Survivor game app listening at http://localhost:${PORT}`)
})