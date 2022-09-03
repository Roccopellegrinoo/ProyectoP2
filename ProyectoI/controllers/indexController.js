const indexController = {
home: function(req, res) {
    res.render('index', { title: 'Express' });
  },

search: function(req, res) {
    res.render('resultadoBusqueda', { title: 'Express' });
  },






}

module.exports = indexController