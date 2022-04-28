const mongoose = require('mongoose')

const MateriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true,'Favor enviar o nome da Matéria'],
        trim: true,
        maxLength:[50, 'O nome da matéria não deve ser maior que 50 palavras']
//      default: 'Matemática'
    }

})

module.exports = mongoose.model('Materia', MateriaSchema)