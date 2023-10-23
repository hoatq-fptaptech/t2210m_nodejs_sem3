const mongoose = require("mongoose");
const server = "mongodb://localhost:27017";
const db_name = "t2210m";
class Database{
    constructor(){
        mongoose.connect(`${server}/${db_name}`)
        .then(()=>{
            console.log(`Connected database ${db_name}`);
        }).catch(err=>{
            console.log(err);
        })
    }
}
module.exports = new Database();