import { Router } from "express";
import * as urlController from "../controllers/url.controller.js"


const urlRoute = Router();

urlRoute.post("/shortner", urlController.shorten)
urlRoute.get("/:url", urlController.redirectAndUpdate)

export default urlRoute