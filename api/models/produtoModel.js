const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const produtoSchema = new Schema({
    id: {
        type: Number,
    },
    nome: {
        type: String
    },
    preco: {
        type: String
    },
    criadoEm:{
        type: Date, default: Date.now
    }
})

module.exports = mongoose.model('produto', produtoSchema);