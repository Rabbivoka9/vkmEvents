//  const express = require ("express")
import express from "express"
import { AffInvite, ReqInvite } from "../Controller/controllerInviter.js"
const routerInvite = express.Router() //creation d'une instance du router d'express qui nous permettra de definir nos route

 routerInvite.get("/AffInvite",AffInvite)

 routerInvite.post ("/ReqInvite",ReqInvite)

 export default routerInvite