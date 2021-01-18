import nc from 'next-connect'
const connection = require('../../../config/connection')
const Project = require('../../../config/schema/projectSchema')

const proid = nc()

proid.get( async (req, res) => {
    const id = req.query.proid
    
    try{
        connection()
        const data = await Project.findById(id)
        res.status(200).json({success: true, message: data})
    }
    catch(err){
        res.status(400).json({success: false, message: err})
    }
})

// project.post(async (req, res) => {
//    const {title, details, link, image, password} = req.body

//    try{
//        if(!title || !details || !link || !image || !password){
//            res.status(200).json({success: false, message: 'All field are required.'})
//            return
//        }
//        if(password != 'expand101SURE'){
//             res.status(404).json({success: false, message: 'Unauthorized'})
//             return
//        }
//        else{
//            connection()
//            const project = await new Project({title, details, link, image})
//            const data = await project.save()
//             res.status(200).json({success: true, message: data})
//        }
//    }catch(err) {
//     res.status(400).json({success: false, message: err})
//    }
// })

export default proid