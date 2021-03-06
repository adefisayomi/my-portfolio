import Project from '../../../config/schema/project'
import dbConnect from '../../../config/connection'
import Auth from '../../../config/middlewares/auth'
dbConnect()


export default async function (req, res) {
    try {
        if(req.method === 'POST') {
            const validAccess = await Auth()    //valid request
            if(!validAccess.success) throw new Error(validAccess.message)
            // 
            const {link, title, description, image} = req.body
            if(!link || !title || !description) throw new Error ('Error with input.')
            const project = new Project({
                title, link, image, description
            })
            await project.save()
            res.json({success: true, message: 'Project successfuly uploaded', data: project})
        }
        // 
        if(req.method === 'GET') {
            const projects = await Project.find()
            res.json({success: true, message: null, data: projects})
        }
    }
    catch(err) {
        res.json({success: false, message: err.message, data: null})
    }
}