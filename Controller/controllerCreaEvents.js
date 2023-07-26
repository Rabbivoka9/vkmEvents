import Events from "../Models/modelEvents.js";
export const AffEvent = (req, res) =>{
       res.send('Affichange')
}


export const ReqEvent = async (req,res)=>{
       const {titreevenent,photofond, titregeneral, titredescription,description,imageprofil, titre1, titre2} = req.body;

       if (titreevenent===""||photofond===""||titregeneral===""||titredescription===""||description===""||imageprofil===""||titre1===""||titre2===""){
              return  res.status(500).json ({status:'veuillez remplir tout les champs'})
         }

         const  PlanEvenement = await Events.create({
              titreevenent,
              photofond,
              titregeneral,
              titredescription,
              description,
              imageprofil,
              titre1,
              titre2
       })
       
       return res.status(200).json ({PlanEvenement})

      
}
