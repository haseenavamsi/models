// const Product =require('../models/products');

exports.getAllProducts = (req, res, next) => {
  // code to retrieve products from database or API
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAllProducts = (req, res, next) => {

  const product=new Product(req.body.title);
  //  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  //  const products=Product.fetchAll(); 
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};
