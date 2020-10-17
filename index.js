//install express
const express = require('express')
const app = express()

//tell express we will use ejs as the view engine
app.set('view engine', 'ejs')

//import express-ejs-layouts and require it
const ejsLayouts = require('express-ejs-layouts')
//set up middleware
app.use(ejsLayouts)

app.get('/', (req, res) => {
    //res.send('Home route loaded');
    res.render('index.ejs')
})

app.get('/water', (req, res) => {
    //res.send('Water route loaded');
    res.render('water.ejs',{traits: ['private', 'mysterious','psychic','charming', 'emotional','sensitive']})
})

app.use('/water',require('./controllers/water'))

app.get('/air', (req, res) => {
    //res.send('Air route loaded');
    res.render('air.ejs',{traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
})

app.use('/air',require('./controllers/air'))

app.get('/fire', (req, res) => {
    //res.send('Fire route loaded');
    res.render('fire.ejs',{traits: ['passionate', 'strong emotion', 'tempermental', 'energetic', 'accomplished', 'interesting']})
})

app.use('/fire',require('./controllers/fire'))

app.get('/earth', (req, res) => {
    //res.send('Earth route loaded');
    res.render('earth.ejs',{traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})

app.use('/earth',require('./controllers/earth'))

app.listen(8000, () => {
    console.log('Listening on port 8000...')
})