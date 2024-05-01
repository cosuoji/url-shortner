import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    url: {
        type: String, 
        //required: true,
    }, 
    longUrl: {
        type: String, 
        //required: true, 
    },
    clickCount:{
        type: Number, 
        default: 0,
    }
})

const UrlSetup =  mongoose.model("UrlSetup", urlSchema);
export default UrlSetup