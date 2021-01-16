import nc from 'next-connect'

const ProId = nc();

ProId.get((req, res) => {

    res.send('Projects')
})

export default ProId