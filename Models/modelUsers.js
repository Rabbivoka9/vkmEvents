import { DataTypes, INTEGER,STRING } from "sequelize";
import db from "../database.js";


const Users = db.define("Users",{
  
       username: {type:DataTypes.STRING,
       allowNull:false
},
       email: {type:DataTypes.STRING,
      allowNull:true
 },
       password: {type:DataTypes.STRING,
       allowNull:false
},
        confpassword: {type:DataTypes.STRING,
       allowNull:false
},
       createdAt:{ type:DataTypes.DATE, 
       allowNull: false},

       updatedAt: {type:DataTypes.DATE,
       allowNull:false}


})
export default Users

