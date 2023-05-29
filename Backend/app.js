//Zugriff auf Variablen aus der env-Datei
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const multer = require('multer');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use('/uploads', express.static('uploads'))
//app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const uploads = multer({storage: storage});


const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    id: String,

    //role: String
    
    /*title: String,
    sex: String,
    firstname: String,
    lastname: String,
    profession: String,
    skill: String,
    equipement: String,
    area: String,
    period: String*/
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

app.use(async function (req, res, next) {
    await mongoose.connect(process.env.Connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    next();
});

/*app.use(async function (req, res, next) {
    await mongoose.connect(`${process.env.Connection}${database}?retryWrites=true&w=majority`)
    next();
});*/

app.get('/', (req, res) => {
    res.send('Basic Route of the backend')
});

app.use(express.json());
app.post('/register', async(req,res)=>{
    const{id, firstname, lastname, email, password} = req.body;
    // sind alle Felder ausgefüllt
    if(!id || !firstname || !lastname || email || password){
        res.status(404).send({message: "Please fill out all fields."});
    }
    // existiert der Nutzer
    const existsUser = await User.findOne({email});

    if(existsUser){
        res.status(409).send({message: "User already exists."});
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({id, firstname, lastname, email, password: hashedPassword});

    try{
        await User.create(user);
        res.status(201).send({message: "User succesfully created."});
    }
    catch(error){
        res.status(500).send({message: "Something went wrong"});
    }

})

app.get('/getuser', async(req, res) => {
    const users = await User.find({});
    res.send(users);
})

app.post('/postuser', async(req, res) => {
    await User.create(user);
    res.status(200).send("Neuer User angelegt, Datenbank aktualisiert.");
})

app.get('/getoffer', async(req, res) => {
    try{
        const offers = await Offer.find({});
        res.send(offers);
    }
    catch(error){
        console.log(error);
    }
    
})

app.post('/postoffer', async(req, res) => {
    console.log(req.body);
    try{
        await Offer.create(offer);
        res.status(200).send("Neues Angebot angelegt, Datenbank aktualisiert.");
    }
    catch(error){
        console.error(error);
        res.sendStatus(500);
    }
})
/*
app.post("/api/posts", upload.single("image"), async (req, res) => {
    console.log(req);
    const { id, title, location, instagramLink, price,heart } = req.body;
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    const post = new Post({id, title, location, instagramLink, price, imageUrl,heart });
    try {
      const newPost = await Post.create(post);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });*/

app.get('/getrequest', async(req, res) => {
    try{
        const requests = await Request.find({});
        res.send(requests);
    }
    
    catch(error){
        console.log(error);
    }
})

app.post('/postrequest', async(req, res) => {
    console.log(req.body);
    try{
        await Request.create(request);
        res.status(200).send("Neue Anfrage angelegt, Datenbank aktualisiert.");
    }
    catch{
        console.error(error);
        res.sendStatus(500);
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});

/*




//app.delelte zum Löschen

//app.put zum Aktualisieren

*/