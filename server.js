require('./model/survive')
const logic = require('./model/logic')
const sceneRoutes = require('./routes/scene')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.use('/scene', sceneRoutes)

app.get('/', (req, res) => {
    res.redirect('/scene/1')
})

app.listen(PORT, function(){
    console.log(`Survivor game app listening at http://localhost:${PORT}`)
})