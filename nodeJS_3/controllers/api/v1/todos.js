const Todo = require('../../../models/Todo');

const getAll = (req, res) => {
    Todo.find({"user": "Britt"}, (err, docs) => {
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "todos": docs
                }
            });
        }
    })
}

const create = (req, res, next) => {

    let todo = new Todo();
    todo.text = req.body.text;
    todo.user = req.body.user;
    todo.completed = req.body.completed;
    todo.save( (err, doc) => {
        if(err){
            res.json({
                "status": "error", 
                "message": "could not save this todo item"
            })
        }
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "todo": doc
                }
            });
        }
    })  
}

module.exports.getAll = getAll;
module.exports.create = create;