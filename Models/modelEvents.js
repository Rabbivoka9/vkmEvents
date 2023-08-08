import { DataTypes, INTEGER,STRING } from "sequelize";
import Users from "./modelUsers.js";
import db from "../database.js";



const Events = db.define("Events",{

idUser: {
       type:DataTypes.INTEGER,
       allowNull:false
},
  
       titreevenent: {type:DataTypes.STRING,
       allowNull:false
},
      photofond: {type:DataTypes.STRING,
      allowNull:true
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
       allowNull:true},
       titre1: {type: DataTypes.STRING,
       allowNull:false},

       titre2: {type: DataTypes.STRING,
       allowNull:false},

       createdAt:{ type:DataTypes.DATE, 
       allowNull: false},

       updatedAt: {type:DataTypes.DATE,
       allowNull:false}


})

Events.belongsTo(Users, { foreignKey : "idUser"});


     
export default Events

