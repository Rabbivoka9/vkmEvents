import { DataTypes, INTEGER,STRING } from "sequelize";
import db from "../database.js";


const Inviter = db.define("Inviter",{
  
       nom: {type:DataTypes.STRING,
       allowNull:false
},
       table: {type:DataTypes.STRING,
      allowNull:true
 },

       createdAt:{ type:DataTypes.DATE, 
       allowNull: false},

       updatedAt: {type:DataTypes.DATE,
       allowNull:false}


})
export default Inviter

