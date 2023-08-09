import Events from "../Models/modelEvents.js";


export const AffEvent = async(req, res) =>{
// const {idUser} =req.body
// if (idUser === ''){
//   return res.status(500).json ({status :"veuillez remplir tout champs"})
// }

// // const Event = await Events.findOne({
// //   where:{idUser}});

//   return res.status(200).json ({Events})

  
}




export const ReqEvent = async (req, res) => {
  const { idUser, titreevenent, titregeneral, titredescription, description,  titre1, titre2,soust1,soust2,soust3,soust4,soust5,soust6,soust7,soust8 } = req.body;
  // Vérifier si toutes les propriétés sont remplies
  if (titreevenent === "" ||titregeneral === "" || titredescription === "" || description === "" || titre1 === "" || titre2 === "" || idUser ===""||soust1===""||soust2 ===""||soust3 ===""||soust4===""||soust5===""||soust6===""||soust7===""||soust8==="") {
    return res.status(500).json({ status: 'veuillez remplir tout les champs' });
  }

  try {
     // Utiliser l'ID généré pour créer l'événement
  const PlanEvenement = await Events.create({
    
    idUser,
    titreevenent,
    titregeneral,
    titredescription,
    description,
    titre1,
    soust1,
    soust2,
    soust3,
    soust4,
    soust5,
    soust6,
    soust7,
    soust8,
    titre2
  });

  return res.status(200).json({ 
    titreEvent:PlanEvenement.titreevenent,
    titregeneral:PlanEvenement.titregeneral,
    titredescription:PlanEvenement.titredescription,
    description:PlanEvenement.description,
    titre1:PlanEvenement.titre1,
    titre2:PlanEvenement.titre2,
    soust1:PlanEvenement.soust1,
    soust2:PlanEvenement.soust2,
    soust3:PlanEvenement.soust3,
    soust4:PlanEvenement.soust4,
    soust5:PlanEvenement.soust5,
    soust6:PlanEvenement.soust6,
    soust7:PlanEvenement.soust7,
    soust8 : PlanEvenement.soust8
  });
    
  } catch (error) {
    console.log("error", error)
  }


 
}

