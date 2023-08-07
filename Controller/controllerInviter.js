import Inviter from "../Models/modelInviter.js";


export const AffInvite = async(req, res) =>{
  // try {
  //   const data = await Events.findAll();
  //   res.json(data);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Une erreur s\'est produit lors de la recuperation des informations' });
  // } 
}

export const ReqInvite = async (req, res) => {
  const { nom, table} = req.body;
  if (nom === "" ||table === "" ) {
   return res.status(200).json({ status: 'veuillez remplir tout les champs' });
   }
   const PlanInvite = await Inviter.create({
    nom,
    table
   });
  return res.status(200).json({ PlanInvite });
}

