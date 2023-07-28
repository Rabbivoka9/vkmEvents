//  const express = require ("express")
import express from "express"
import { AffUsers, ReqUsers } from "../Controller/controllerUser.js"
const routerUsers = express.Router() //creation d'une instance du router d'express qui nous permettra de definir nos route

 routerUsers.get("/AffUser",AffUsers)

 routerUsers.post ("/ReqUsers",ReqUsers)

 export default routerUsers