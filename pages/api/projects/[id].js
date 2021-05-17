import Project from '../../../config/schema/project'
import dbConnect from '../../../config/connection'
dbConnect()


export default async function (req, res) {
    try {
        // if(req.method === 'POST') {
        //     const {link, title, description, image} = req.body
        //     if(!link || !title || !description || !image) throw new Error ('Error with input.')
        //     const project = new Project({
        //         title, link, image, description
        //     })
        //     await project.save()
        //     res.send({success: true, message: 'Project successfuly uploaded', data: project})
        // }
        // 
        if(req.method === 'GET') {
            const project = await Project.findOne({_id: req.query.id})
            if(project) throw new Error ('Project does not exist.')
            res.send({success: true, message: null, data: project})
        }
    }
    catch(err) {
        res.send({success: false, message: err.message, data: null})
    }
}