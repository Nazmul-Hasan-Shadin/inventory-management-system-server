const mongoose= require('mongoose')
require('dotenv').config()

const getConnection=()=>{
    let connentUri;
    if (process.env.NODE_ENV==='development') {
        connentUri= process.env.URI
        connentUri=connentUri.replace('<username>',process.env.DB_USER)
        connentUri=connentUri.replace('<password>',process.env.DB_PASS)
    }
    return connentUri
}

const connectToDatabase= async()=>{
    console.log('database connecting');
    const uri= getConnection()
    console.log(uri);
    await mongoose.connect(uri)
    console.log('connected');
}


module.exports=connectToDatabase


