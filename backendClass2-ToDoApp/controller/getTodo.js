//import th model
const Todo = require("../models/ToDo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
        //Find is a function and we kept the brackets empty so all datas can come
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Lo vai saare datas."
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.getTodoById = async(req, res) =>{
    try{
        //extract from req
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        //If data not found
        if(!todo){
            return res.status(404).json({
                success: false, 
                message: "Data not found"
            })
        }
        //Data for given id FOUND
        res.status(200).json({
            success:true,
            data: todo,
            message: 'Todo ${id} data successfully fetched'
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}