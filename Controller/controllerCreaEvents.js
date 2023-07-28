import Events from "../Models/modelEvents.js";


export const AffEvent = async(req, res) =>{
  try {
    const data = await Events.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produit lors de la recuperation des informations' });
  } 
}




export const ReqEvent = async (req, res) => {
  const { titreevenent, titregeneral, titredescription, description,  titre1, titre2 } = req.body;

  // Vérifier si toutes les propriétés sont remplies
  if (titreevenent === "" ||titregeneral === "" || titredescription === "" || description === "" || titre1 === "" || titre2 === "") {
    return res.status(500).json({ status: 'veuillez remplir tout les champs' });
  }



  // Utiliser l'ID généré pour créer l'événement
  const PlanEvenement = await Events.create({
    
    titreevenent,
    
    titregeneral,
    
    titredescription,
    description,
    titre1,
    titre2
  });

  return res.status(200).json({ PlanEvenement });
}

