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
       soust1: {type: DataTypes.STRING,
              allowNull:false},
       soust2: {type: DataTypes.STRING,
        allowNull:false},
        soust3: {type: DataTypes.STRING,
              allowNull:false},
       soust4: {type: DataTypes.STRING,
       allowNull:false},
       soust5: {type: DataTypes.STRING,
              allowNull:false},
       soust6: {type: DataTypes.STRING,
       allowNull:false},
       soust7: {type: DataTypes.STRING,
              allowNull:false},
       soust8: {type: DataTypes.STRING,
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

