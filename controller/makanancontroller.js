import Data from "../models/makanan.js";
import { Op } from 'sequelize';

export const getMakanan = async(req, res) =>{
    try {
        const response = await Data.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const createMakanan = async(req, res) =>{
    try {
        await Data.create(req.body);
        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateMakanan = async(req, res) =>{
    try {
        await Data.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const deleteMakanan = async(req, res) =>{
    try {
        await Data.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const searchMakanan = async (req, res) => {
    try {
      
      const response = await Data.findAll({
        where: {
          nama: {
            [Op.iLike]: `%${query}%`,
          },
        },
      });
  
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };