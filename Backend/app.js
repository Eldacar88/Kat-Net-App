//Zugriff auf Variablen aus der env-Datei
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json())

app.use(async function (req, res, next) {
    await mongoose.connect(`${process.env.Connection}${database}?retryWrites=true&w=majority`)
    next();
});

const userSchema = new mongoose.Schema({
    title: String,
    sex: String,
    firstname: String,
    lastname: String,
    profession: String,
    skill: String,
    equipement: String,
    area: String,
    period: String
})

const User = mongoose.model('user', userSchema);

const offerSchema = new mongoose.Schema({
    title: String,
    location: String,
    period: String,
    help: String,
    helpspecific: String,
    telefon: String,
    email: String,
    description: String
})

const Offer = mongoose.model('offer', offerSchema);

const requestSchema = new mongoose.Schema({
    title: String,
    location: String,
    period: String,
    catastrophe: String,
    help: String,
    telefon: String,
    email: String,
    description: String
})

const Request = mongoose.model('request', requestSchema);

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use(async function (req, res, next) {
    await mongoose.connect(`${process.env.Connection}${database}?retryWrites=true&w=majority`)
    next();
});

app.get('/', (req, res) => {
    res.send('Basic Route of the backend')
});

app.get('/getuser', async(req, res) => {
    const users = await User.find({});
    res.send(users);
})

app.post('/postuser', async(req, res) => {
    await User.create(user);
    res.status(200).send("Neuer User angelegt, Datenbank aktualisiert.");
})

app.get('/getoffer', async(req, res) => {
    const offers = await Offer.find({});
    res.send(offers);
})

app.post('/postoffer', async(req, res) => {
    await Offer.create(offer);
    res.status(200).send("Neues Angebot angelegt, Datenbank aktualisiert.");
})

app.get('/getrequest', async(req, res) => {
    const requests = await Request.find({});
    res.send(requests);
})

app.post('/postrequest', async(req, res) => {
    await Request.create(request);
    res.status(200).send("Neue Anfrage angelegt, Datenbank aktualisiert.");
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});

/*




//app.delelte zum Löschen

//app.put zum Aktualisieren

*/