import UrlSetup from "../database/url.schema.js";
import ErrorWithStatus from "../exceptions/error.with.status.js";


function algoToShorten(){
 let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 let newUrl = []
 for(let i = 0; i < 4; i++){
    newUrl.push(letters[(Math.floor(Math.random() * 52))])
 }
 newUrl = newUrl.join("")
 return newUrl
}

export const shorten = async(urlToShorten) =>{
    try{
       let url = await algoToShorten()
       let longUrl = urlToShorten

       const newUrl = new UrlSetup({url, longUrl})
       await newUrl.save()

       return{
        message: "new Url saved",
        data: {
            url: newUrl
        }
       }
    }
    catch(error){
        throw new ErrorWithStatus(error.message, 500)
    }
}

export const redirectAndUpdate = async(urlExtension) =>{
    try{
        //check if the url exists
        const urlToVisit = await UrlSetup.find({url: urlExtension})
        if(urlToVisit.length < 1){
            throw new ErrorWithStatus("url not found", 400)
        }

        let updatedCount = urlToVisit[0].clickCount + 1
        await UrlSetup.findOneAndUpdate({url: urlExtension}, {clickCount: updatedCount})
        
        return {
            redirect : urlToVisit[0].longUrl
        }
        
    }
    catch(error){
        throw new ErrorWithStatus(error.message,500)
    }
}