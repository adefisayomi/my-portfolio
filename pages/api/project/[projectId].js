import nc from 'next-connect'


const projectId = nc();

projectId.get((req, res) => {
res.send('singular')
})

export default projectId