export default (model, id) => {
  return model.findById(id).then(user => user);
};
