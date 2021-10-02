const items = [
    {id: 1, name: 'product1'},
    {id: 3, name: 'product2'},
    {id: 2, name: 'product3'}
];

const index = (req, res) => { //req = lo q obtiene del navegador al servidor y res= envia info al navegador
    res.render('index', {
        title : 'MyWebStore'
    });
};

const products = (req, res, next) => {
    res.render('products', {
        title : 'list of products',
        items
    })
}

const addNewProduct = (req, res, next) => {
    const {newItem} = req.body;         
    items.push({
        id : items.length + 1,
        name : newItem
    });
    console.log(newItem);
    res.redirect('/products'); //redirecciona
}

module.exports = {
    index,
    products,
    addNewProduct
}