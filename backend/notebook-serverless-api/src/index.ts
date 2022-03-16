import Users from './API/Users';
import Notes from './API/Notes';
import NoteBooks from './API/Notebooks';
import express from 'express';
import init from './utilities/database/dbConnectivity';
import bodyParser from 'body-parser';
const cors = require('cors');

//DB
init();

const app = express();
const port = 5000;
const corsOptions = {
    origin:['https://localhost:3000'],
    Credential:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))



//API
app.use('/user', Users.Users);
app.use('/notes', Notes.Notes);
app.use('/noteBook', NoteBooks.NoteBooks);

//Basic Routes
app.get('/', (req:any, res:any) => {
    res.send('Users Page')
})

//Server PORT
app.listen(port, () => {
    console.log(`Server running at ${port}`)
})


module.exports = app;