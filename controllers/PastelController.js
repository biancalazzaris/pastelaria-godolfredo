const mongoose = require('../database');
const Pastel = mongoose.model('Pastel');

module.exports = {
    async index(req, res) {
        const pastel = await Pastel.find()
        return res.json(pastel);
    },
    async show(req, res) {
        const pastel = await Pastel.findById(req.params.id)
        return res.json(pastel);
    },
    async save(req, res) {
        const pastel = await Pastel.create(req.body)
        return res.json(pastel);
    },
    async destroy(req, res) {
        const pastel = await Pastel.findByIdAndRemove(req.params.id, {
            new: true,
        })
        return res.json({ message: 'Pastel removido' });
    },
    async update(req, res) {
        const pastel = await Pastel.findByIdAndUpdate(req.params.id, {
            new: true, 
        })
        return res.json(pastel);
    }
}