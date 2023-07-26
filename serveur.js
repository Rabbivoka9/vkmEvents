// const express = require("express") //importation d'express//
import express from "express"
import router from "./route/routeCreaEvents.js"
import Events from "./Models/modelEvents.js"
// const router = require ("./routeLogin")

const app = express()

app.use("/",router)
await Events.sync(); // synchronisation de la base des donnees
app.listen(5001) //definition du port