//simple CRUD helper methods
//GET ALL
function findAll(req, res, model) {
  model.find(function(err, data) {
    if (err) return console.error(err);
    console.log('ALL data', data);
    res.json(data);
  });
}
//GET by ID
function findById(req, res, model) {
  model.findById(function(err, data) {
    if (err) return console.error(err);
    console.log('ALL data', data);
    res.json(data);
  });
}

module.exports = {
  findAll,
  findById
};
