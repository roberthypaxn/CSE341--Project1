const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const results = await mongodb
        .getDatabase()
        .db("sample_analytics")
        .collection("accounts")
        .find();

    results.toArray().then((users) =>{
        res.setHeader("Content-Type", "application/json")
        res.status(200).json(users);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const results = await mongodb
        .getDatabase()
        .db("sample_analytics")
        .collection("accounts").
        find({_id: userId});

    results.toArray().then((users) =>{
        res.setHeader("Content-Type", "application/json")
        res.status(200).json(users[0]);
    });
}

module.exports = {
    getAll,
    getSingle
}