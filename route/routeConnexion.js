//  const express = require ("express")
import express from "express"
import { AffLogin, ReqLogin } from "../Controller/controllerLogin.js"
const routerLogin = express.Router() //creation d'une instance du router d'express qui nous permettra de definir nos route

 routerLogin.get("/AffUser",AffLogin)

 routerLogin.post ("/ReqLogin",ReqLogin)

 export default routerLogin