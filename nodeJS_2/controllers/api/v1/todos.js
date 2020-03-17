const getAll = (req, res) => {
    res.send("get todos");
}

const create = (req, res) => {
    res.send("post todos");
}

const update = (req, res) => {
    res.send("PUT todos");
}

const remove = (req, res) => {
    res.send("DELETE todos " + req.params.id);
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;