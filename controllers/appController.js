module.exports = {
    response: (req, res) => {
        return res.status(200).json({ confirmation: 'Server is working.' });
      }
}