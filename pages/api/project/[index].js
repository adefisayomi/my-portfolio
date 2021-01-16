import nc from 'next-connect'

const project = nc();

project.get((req, res) => {

    res.send('working')
})

export default project