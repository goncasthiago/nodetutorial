const express = require('express');
const { criaMateria, buscaMateria, buscaMateriaporId, apagaMateria, atualizaMateria } = require('../controllers/materias');
const router = express.Router();

router.route('/').post(criaMateria).get(buscaMateria)
router.route('/:id').get(buscaMateriaporId).delete(apagaMateria).patch(atualizaMateria)

module.exports = router;
