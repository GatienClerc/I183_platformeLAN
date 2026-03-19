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
import {hashPassword} from "../assets/JS/hash.js";


router.post('/', async (req, res) => {
    if (req.body.lastname == null || req.body.firstname == null || req.body.username == null || req.body.birthdate == null || req.body.password == null || req.body.email == null || req.body.role_id == null) {
        res.status(400).json({error: "Missing data"});
        return;
    }
    req.body.password = await hashPassword(req.body.password, 10)
    const data = Object.values(req.body);
    let response = await CRUD.createInEntity("users", ['lastname', 'firstname', 'username', 'birthdate', 'password', 'email', 'role_id' ], data);
    res.status(201).json(response)
})


router.get('/', async (req, res) => {
    const column = req.query.column;
    const filter = req.query.filter;
    const limit = parseInt(req.query.limit);

    if (!(parseInt(limit) > 0) && limit) {
        res.status(400).json({error: "limit invalid number"});
        return;
    }
    let genres = await CRUD.getAllFromEntity("users", column, filter, limit);
    res.status(200).json(genres)
})


router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (!(id > 0)) {
        res.status(400).json({error: "id should be a positive integer"});
        return;
    }
    let genres = await CRUD.getFromEntityById("users", id);
    res.status(200).json(genres)
})


router.put('/:id', async (req, res) => {
    if (req.body.lastname == null || req.body.firstname == null || req.body.username == null || req.body.birthdate == null || req.body.password == null || req.body.email == null || req.body.role_id == null) {
        res.status(400).json({error: "Missing data"});
        return;
    }
    const id = parseInt(req.params.id);
    if (!(id > 0)) {
        res.status(400).json({error: "id should be a positive integer"});
        return;
    }
    req.body.password = await hashPassword(req.body.password, 10)
    const data = Object.values(req.body);
    let response = await CRUD.updateInEntity("users", id,['lastname', 'firstname', 'username', 'birthdate', 'password', 'email', 'role_id' ], data);
    res.status(200).json(response);
})


router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (!(id > 0)) {
        res.status(400).json({error: "id should be a positive integer"});
        return;
    }
    let response = await CRUD.deleteFromEntity("users", id)
    res.status(204).json(response)
})


export default router;