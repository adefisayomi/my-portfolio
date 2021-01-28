import connection from '../../../config/connection'
import nc from 'next-connect'
const Blog = require('../../../config/schema/blogSchema')
import jwt from 'jsonwebtoken'

const blogs = nc();
blogs.post(async (req, res) => {
    console.log(req.headers)

    // const {title, author, body} = req.body
    // try{
    //     const blog = new Blog({title, body, author})
    //     const data = await blog.save()
    //     res.status(200).json({success: true, message: data})
    // }
    // catch(err){
    //     res.status(500).json({success: false, message: err})
    // }
})

// blogs.all((req, res) => {
//    res.setHeader('Authorization', process.env.ACCESS_TOKEN)
// })
blogs.get((req, res) => {
    // const user = {
    //     name: 'solomon'
    // }
    //const id = process.env.ACCESS_TOKEN
    //const accessToken = jwt.sign(user, id)
    //res.setHeader('Authorization', process.env.ACCESS_TOKEN)
    res.send(process.env.ACCESS_TOKEN)
 })

export default blogs