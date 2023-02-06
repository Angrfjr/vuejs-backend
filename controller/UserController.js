import User from "../models/UserModel.js";
import Feedback from "../models/FeedbackModel.js"

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const getUsersById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const createUsers = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateUsers = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const deleteUsers = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const getFeedback = async(req, res) => {
    try {
        const response = await Feedback.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const saveFeedback = async (req, res) => {
    const email = req.body.email;
    const firstName= req.body.firstName;
    const masukan = req.body.masukan;
    const phoneNumber = req.body.phoneNumber;
    const kecamatan = req.body.kecamatan;
    try {
        await Feedback.create({ 
            email:email, 
            firstName:firstName, 
            masukan:masukan, 
            phoneNumber:phoneNumber, 
            kecamatan:kecamatan 
        });
        res.status(201).json({ msg: "Feedback Created Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}