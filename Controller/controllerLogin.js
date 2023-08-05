
import Users from "../Models/modelUsers.js";


export const AffLogin = async(req, res) =>{
  try {
    const data = await Users.findAll();
    res.json(data);
   } catch (error) {
    console.error(error);
  res.status(500).json({ error: 'Une erreur s\'est produit lors de la recuperation des informations' });
  } 
}




export const ReqLogin = async (req, res) => {
  const { username,  password } = req.body;
  if (username === "" || password === "" ) {
    return res.status(500).json({ status: 'veuillez remplir tout les champs' });
  }
  const Username = await Users.findOne({
    where:{username}});
    const Password = await Users.findOne({
      where:{password}});
 
      if ( ! Username ) {
        return res.status(500).json({ status: 'veuillez remplir tout les champs' });
      }
      if (! Password)
      return res.status(500).json({ status: 'veuillez remplir tout les champs' });
      {console.log("ok")
    }

      return res.status(200).json({ Password });

}

