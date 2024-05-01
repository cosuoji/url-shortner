import * as urlService from "../services/url.services.js"


export const shorten = async(req, res) =>{
    try{
        const {url} = req.body;
        const urlToShorten = url
        const result = await urlService.shorten(urlToShorten);
        res.json(result)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export const redirectAndUpdate = async(req, res) =>{
    try{
        const {url} = req.params
        const urlExtension = url
        const result = await urlService.redirectAndUpdate(urlExtension)
        let newUrl = "https://" + result.redirect
        res.redirect(newUrl)
        //res.json(result)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}