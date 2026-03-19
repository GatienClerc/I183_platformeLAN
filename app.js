"use strict";

/***********************************************************************************************************************
 *  Imports
 **********************************************************************************************************************/
import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import usersRouter from "./routes/users";

/***********************************************************************************************************************
 *  Express
 **********************************************************************************************************************/
const app = express();
const port = 3000;

// read JSON
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
/***********************************************************************************************************************
 *  Pages
 **********************************************************************************************************************/

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, "signup.html"));
});

/***********************************************************************************************************************
 *  Routers
 **********************************************************************************************************************/
app.use('/api/users', usersRouter);
//app.use('/api/roles', rolesRouter);
//app.use('/api/users_take_part_in_lans', users_take_part_in_lansRouter);
//app.use('/api/lans', lansRouter);

// start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});