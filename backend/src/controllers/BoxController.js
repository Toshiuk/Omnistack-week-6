const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const box = await Box.create({ title: req.body.title });

        res.send(box);
    }
}

module.exports = new BoxController();