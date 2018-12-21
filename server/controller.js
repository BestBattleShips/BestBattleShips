const controller = {
  testGet: (req, res) => {
    res.send('fuck yeah');
  },

  testPost: (req, res) => {
    res.send('no fuck u')
  }
}

module.exports = controller;