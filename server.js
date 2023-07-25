const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const { readFromFile, readAndAppend, writeToFile } = require('./helpers/fsUtils');

// Helper method for generating unique ids
// const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/api/notes', (req, res) =>
 {readFromFile("./db/db.json").then(db => {
  const data = JSON.parse(db)
  res.json(data)
})}
);
app.post("/api/notes", async(req, res) => 
{
const data = req.body
const db = await readFromFile("./db/db.json")
const dbData = JSON.parse(db)
dbData.push({...data, id: Date.now()})
writeToFile("./db/db.json", dbData)
res.sendStatus(201)
})
app.delete("/api/notes/:id", async(req, res) =>{
const idtoDelete = parseInt(req.params.id)  
try{
const db = await readFromFile("./db/db.json")
const dbData = JSON.parse(db)
const noteIndex = dbData.findIndex((note)=> note.id === idtoDelete)
if (noteIndex === -1){
return res.status(404).json({message: "note not found"}) 
}
dbData.splice(noteIndex, 1)
await writeToFile("./db/db.json", dbData)
res.sendStatus(200)
} catch(err){
console.error (err)
res.status (500).json({message: "server error"})  
}
})

// .then(db => {
// const dbData = JSON.parse(db)
// dbData.push(data)
// writeToFile("./db/db.json", dbData).then (()=> res.sendStatus (201))
// })
// })

app.listen (PORT)
console.log ("server running", PORT)