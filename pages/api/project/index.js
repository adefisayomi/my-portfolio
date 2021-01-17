import nc from 'next-connect'
const connection = require('../../../config/connection')
const Project = require('../../../config/schema/projectSchema')

const project = nc()

project.get( async (req, res) => {

    try{
        connection()
        const data = await Project.find()
        res.status(200).json({success: true, message: data})
    }
    catch(err){
        res.status(400).json({success: false, message: err})
    }
})

project.post(async (req, res) => {
   const {title, details, link, image} = req.body

   try{
       if(!title, !details, !link, !image){
           res.status(200).json({success: false, message: 'All field are required.'})
           return
       }else{
           connection()
           const project = await new Project({title, details, link, image})
           const data = await project.save()
            res.status(200).json({success: true, message: data})
       }
   }catch(err) {
    res.status(400).json({success: false, message: err})
   }
})

export default project