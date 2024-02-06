const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config('../.env')

/* IMPORT MODELS */
const Element = require('./models/Element');
const Character = require('./models/Character');
const Update = require('./models/Update');

const app = express();
app.listen(4000, () => {
  console.log("Listening...")
});

app.use(cors(
  {
    credentials: true,
    origin: "https://makolta.vercel.app",
    methods: ["POST", "GET", "PUT"]
  }
));
app.use(express.json());

mongoose.connect(process.env.MONGO_ATLAS_URL)

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send('Ok')
})

/* NEW ELEMENT ENDPOINT */
app.post('/new-element', async (req, res) => {
  console.log(req.body)
  const { title, summary, content, cover } = req.body;
  try {
    const elementDoc = await Element.create({
      title,
      summary,
      content,
      cover
    });
    res.json(elementDoc);
  } catch (error) {
    res.status(400).json(error);
  }
})

/* GET ALL ELEMENTS */
app.get('/elements', async (req, res) => {
  res.json(
    await Element.find()
  )
})

/* GET 1 ELEMENT ENDPOINT */
app.get('/element/:id', async (req, res) => {
  const { id } = req.params;
  const elementDoc = await Element.findById(id);
  res.json(elementDoc);
})

/* EDIT ELEMENT ENDPOINT */
app.put('/edit-element', async (req, res) => {
  const { id, title, summary, content, cover } = req.body;
  try {
    const elementDoc = await Element.findById(id);
    await elementDoc.updateOne({
      title,
      summary,
      content,
      cover
    });

    res.json(elementDoc);

  } catch (error) {
    res.status(400).json(error);
  }

})

/* NEW CHARACTER ENDPOINT */
app.post('/new-character', async (req, res) => {
  const { alias, name, avatar, summary, content } = req.body;
  try {
    const characterDoc = await Character.create({
      alias,
      name,
      avatar,
      summary,
      content
    });
    res.json(characterDoc);
  } catch (error) {
    res.status(400).json(error);
  }
})

/* GET ALL CHARACTERS */
app.get('/characters', async (req, res) => {
  res.json(
    await Character.find()
  )
})

/* GET 1 CHARACTER ENDPOINT */
app.get('/character/:id', async (req, res) => {
  const { id } = req.params;
  const characterDoc = await Character.findById(id);
  res.json(characterDoc);
})


/* NEW UPDATE ENDPOINT */
app.post('/new-update', async (req, res) => {
  const { title, content } = req.body;
  try {
    const updateDoc = await Update.create({
      title,
      content
    });
    res.json(updateDoc);
  } catch (error) {
    res.status(400).json(error);
  }
})

/* GET LAST 10 UPDATES */
app.get('/updates', async (req, res) => {
  res.json(
    await Update.find()
    .sort({createdAt: -1})
    .limit(10)
  )
})

/* LOG IN ENDPOINT */
app.post('/login', async (req, res) => {

  const userOk = (req.body.username === process.env.MYUSERNAME);
  const passOk = (req.body.password === process.env.MYPASSWORD);
  
  if (userOk && passOk) {
    res.json(req.body.username)
  } else if (userOk && !passOk) {
    res.status(400).json('Incorrect password')
  } else if (!userOk) {
    res.status(400).json('Incorrect credentials')
  }
})


module.exports = app;