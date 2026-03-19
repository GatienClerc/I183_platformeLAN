/***********************************************************************************************************************
 * Program name :           users.js
 * Description :            route for users table
 * Author :                 Cédric Jankiewicz
 * Creation date :          19.03.2026
 * Modified by :            -
 * Modification date :      -
 * Version :                0.1.0
 **********************************************************************************************************************/
import express from 'express';
const router = express.Router();
import { CRUD } from "../database/database-connection.js";
import {verifyPassword} from "../assets/JS/hash.js";


router.post('/', async (req, res) => {
    if (req.body.email == null || req.body.password == null) {
        res.status(400).json({error: "Missing data"});
        return;
    }
    let genre = await CRUD.getAllFromEntity("users", "email", req.body.email, 1);
    let r = await verifyPassword(req.body.password, genre[0].password)
    console.log(r)
    if (r) {
        res.status(200).json({result: true});
    }
    else {res.status(200).json({result: false});}
})

export default router;