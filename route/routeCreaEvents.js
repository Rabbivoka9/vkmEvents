//  const express = require ("express")
import express from "express"
import { AffEvent, ReqEvent } from "../Controller/controllerCreaEvents.js"
const router = express.Router() //creation d'une instance du router d'express qui nous permettra de definir nos route

 router.get("/AffEvent",AffEvent)

 router.post ("/ReqEvent",ReqEvent)

 export default router