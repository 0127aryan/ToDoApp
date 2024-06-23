const ToDOModel = require("../models/ToDOModel");

module.exports.getToDo = async(req, res) => {
    try{
 const toDo = await ToDoModel.find()
 res.send(toDO)
} catch(error) {
    res.status(500).send(error);
}
}

//Add in task
module.exports.saveToDO = async(req, res) => {
const {text} = req.body;
try{
    const data = await ToDOModel.create({text});
    console.log("added successfully");
    res.send({
        message: "tasks added successfully"
    })
} catch(error){
    res.status(500).send(error);
}
};

//update task

module.exports.UpdateToDO = async(req, res) => {
    const {_id, text} = req.body;
    try{
        const data = await ToDOModel.findByIdAndUpdate(_id, {text});
        console.log("Updated successfully");
        res.send({
            message: "Updated Successfully"
         })
    } catch(error){
        res.status(500).send(error);
    }
    };

    // Delete any task
    module.exports.DeleteToDO = async(req, res) => {
        const {_id} = req.body;
        try{
            const data = await ToDOModel.findByIdAndUpdate(_id);
            console.log("Deleted successfully");
            res.send({
                message: "Task is deleted Successfully"
             })
        } catch(error){
            res.status(500).send(error);
        }
        };

        