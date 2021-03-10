const products = require('../products.json')



// const getProduct = (req, res) => {
//     console.log(req.params)
//     console.log(req.params.id)

//     const targetId = products.findIndex(product => product.id === +req.params.id);
//     if (!products[targetId]) {
//         return res.status(500).send('Item not in list.')
//     }
//     res.status(200).send(products[targetId]);
// };


const getProduct = (req, res) => {
    // console.log(req.params)
    // console.log(req.params.id)

    const targetProduct = products.find(product => product.id === +req.params.id);
    if (!targetProduct) {
        return res.status(500).send('Item not in list.')
    }
    res.status(200).send(targetProduct);
};


module.exports = getProduct;