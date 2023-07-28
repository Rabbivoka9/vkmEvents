
import Users from "../Models/modelUsers.js";


export const AffUsers = async(req, res) =>{
  // try {
  //   const data = await Events.findAll();
  //   res.json(data);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Une erreur s\'est produit lors de la recuperation des informations' });
  // } 
}




export const ReqUsers = async (req, res) => {
  const { username,  email, password, confpassword } = req.body;

  // Vérifier si toutes les propriétés sont remplies
  if (username === "" ||email === "" || password === "" || confpassword === "") {
    return res.status(500).json({ status: 'veuillez remplir tout les champs' });
  }



  // Utiliser l'ID généré pour créer l'événement
  const PlanUsers = await Users.create({
    
    username,
    email,
    password,
    confpassword
    
  });

  return res.status(200).json({ PlanUsers });
}

