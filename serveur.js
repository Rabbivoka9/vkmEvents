// const express = require("express") //importation d'express//
import Users from "./Models/modelUsers.js"
import express from "express"
import router from "./route/routeCreaEvents.js"
import routerUsers from "./route/routeUsers.js"
import routerLogin from "./route/routeConnexion.js"
import routerInvite from "./route/routeInviter.js"
import Events from "./Models/modelEvents.js"
import Inviter from "./Models/modelInviter.js"
import cors from "cors"
import bodyParser from "body-parser"
// const router = require ("./routeLogin")

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",routerUsers)
app.use("/",routerLogin)
app.use("/",routerInvite)
app.use("/",router)
await Users.sync();
await Inviter.sync();
await Events.sync(); // synchronisation de la base des donnees
app.listen(3000) //definition du port