const products = require('../products.json')



const getProduct = (req, res) => {
    console.log(req.params)
    console.log(req.params.id)

    const targetId = products.find(product => product.id === +req.params.id);
    if (!targetId) {
        return res.status(500).send('Item not in list.')
    }
    res.status(200).send(targetId);
};



module.exports = getProduct;