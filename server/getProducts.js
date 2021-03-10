const products = require('../products.json');

// const getProducts = (req, res) => {
//     console.log(products)
//     res.status(200).send(products)
// };



const getProducts = (req, res) => {
    console.log(req.query)

    if (req.query.price) {
        const productsByPrice = products.filter(product => product.price >= +req.query.price)
        // console.log(productsByPrice)
        return res.status(200).send(productsByPrice)
    }
    res.status(200).send(products)
};




module.exports = getProducts;
