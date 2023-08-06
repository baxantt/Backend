//import th model
const Todo = require("../models/ToDo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try {
        const id = req.params.id;
        
        const todo = await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            data: todo,
            message: 'Successfully Deleted.'
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error, Cant get deleted",
            message:err.message,
        })
    }
}
