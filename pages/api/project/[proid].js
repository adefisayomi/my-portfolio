import nc from 'next-connect'

const proid = nc();

proid.get((req, res) => {
    res.send('id ')
})



export default proid

