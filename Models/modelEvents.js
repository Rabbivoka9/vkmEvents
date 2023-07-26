import { DataTypes, INTEGER } from "sequelize";
import db from "../database.js";


const Events = db.define("Events",{
       Id:{type: DataTypes.INTEGER,
       allowNull:false
},
       titreevenent: {type:DataTypes.STRING,
       allowNull:false
},
       photofond: {type:DataTypes.STRING,
       allowNull:false
},
       titregeneral: {type:DataTypes.STRING,
       allowNull:false
},
       titredescription: {type:DataTypes.STRING,
       allowNull:false
},
       description: {type: DataTypes.STRING,
       allowNull:false
},
       imageprofil: {type: DataTypes.STRING,
       allowNull:false},
       titre1: {type: DataTypes.STRING,
       allowNull:false},

       titre2: {type: DataTypes.STRING,
       allowNull:false},

       createdAt:{ type:DataTypes.DATE, 
       allowNull: false},

       updateDat: {type:DataTypes.DATE,
       allowNull:false}


})
export default Events

