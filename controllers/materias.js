const Materia = require('../models/Materia')

const buscaMateria = async (req,res)=>{
    try {
        const materias = await Materia.find({})
        res.status(200).json({ success:true, data: materias})
    } catch (error) {
        return res.status(500).json({success: false, data: [], msg:error})
    }
}

const buscaMateriaporId = async (req,res)=>{
    try {
        const {id:materiaID} = req.params;
        const materia = await Materia.findOne({_id:materiaID})
        if(!materia){
            return res.status(404).json({success: false, data: [], msg:`Nenhuma materia com o id ${materiaID}`})
        }
        res.status(201).json({success:true, data: [{materia}]})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, data: [], msg:error})
    }
} 

const criaMateria = async (req,res)=>{
    const {nome} = req.body
    if(!nome){
        return res.status(400).json({success: false, data: [], msg:'Favor enviar o nome da matéria'})
    }
    try {
        const materia = await Materia.create({nome})
        res.status(201).json({success:true, data: [{materia}]})
        
    } catch (error) {
        return res.status(500).json({success: false, data: [], msg:error})
    }
}

const atualizaMateria = async (req,res)=> {
    try {
        const {id: materiaID} = req.params;
        const {nome} = req.body;
        
        if (!nome){
            return res.status(400).json({success: false, data: [], msg: 'Favor enviar o nome da matéria'})
        }
        
        const materia = await Materia.findByIdAndUpdate({_id:materiaID}, { nome }, {
            new:true,
            runValidators: true
        })
        if(!materia){
            return res.status(404).json({success: false, data: [], msg: `Id ${materiaID} não encontrado`})
        }
        
        res.status(200).json({success: true, data:materia, msg:"Materia atualizada"})
    } catch (error) {
        return res.status(500).json({success: false, data: [], msg:error})
    }

}

const apagaMateria = async (req,res)=>{
    try {
        const {id:materiaID} = req.params
        const materia = await Materia.findOneAndDelete({_id:materiaID})
        if(!materia){
            return res.status(404).json({success:false, data: [], msg: `Id ${materiaID} não existe`})
        }
        
        res.status(200).json({success:true, data: materia, msg:""})
        
    } catch (error) {
        return res.status(500).json({success: false, data: [], msg:error})
    }
}

module.exports = {
    buscaMateria,
    buscaMateriaporId,
    criaMateria,
    atualizaMateria,
    apagaMateria
}