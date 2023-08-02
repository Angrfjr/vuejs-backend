import Data from "../models/atk.js";

export const getAtk = async(req, res) =>{
    try {
        const response = await Data.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
 
export const createAtk = async(req, res) =>{
    try {
        await Data.create(req.body);
        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateAtk = async(req, res) =>{
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

export const deleteAtk = async(req, res) =>{
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