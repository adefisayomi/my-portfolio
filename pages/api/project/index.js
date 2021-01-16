import nc from 'next-connect'

const project = nc();

project.get((req, res) => {

    res.send('Projects')
})

export default project