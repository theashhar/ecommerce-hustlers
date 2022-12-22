// global
const ShopifyBuy = require('shopify-buy');
let cart = {} 
if(localStorage.cart){
  cart = JSON.parse(localStorage.cart)
}
let phoneNo = ''
if(localStorage.phoneno){
  phoneNo = localStorage.phoneno
}
let addressArray = []
if(localStorage.addressArray){
  addressArray = JSON.parse(localStorage.addressArray)
}
let currentOrder = false;
let pastOrders = [];
if(localStorage.pastOrders){
  pastOrders = JSON.parse(localStorage.pastOrders)
}
if(localStorage.currentOrder){
  currentOrder = JSON.parse(localStorage.currentOrder)
}
let orderAddressx
let varid = {}
if(localStorage.varid){
  varid = JSON.parse(localStorage.varid)
}
let search = {}
let Sproducts = {}
search.ready = false;
// end global

//cart count
function cartCountfn(){
  let c = 0
       Object.values(cart).forEach(_e=>{
                c += _e.q
       })
   if(c !== 0){
     localStorage.cart = JSON.stringify(cart)
     document.querySelectorAll('.cartCount').forEach(_el=>{
      _el.style.display = 'inline' 
      _el.innerHTML = c
   })
   }else{
     localStorage.cart = JSON.stringify(cart)
      document.querySelectorAll('.cartCount').forEach(_el=>{
      _el.style.display = 'none' 
   })
   }
}
// cart functions

function addtocart(id){
  let cart = JSON.parse(localStorage.cart || '{}')
  if(cart[id]){
    cart[id].q += 1
  }
  else{
    cart[id] = {q:1}
  }
  localStorage.cart = JSON.stringify(cart)
}

function checkcartforup(){
  Object.keys(cart).forEach(_i=>{
    if(!search[varid[_i]]){
      delete cart[_i]
      cartCountfn()
    }
  })
}
const client = ShopifyBuy.buildClient({
  domain: 'hustlersheaven.myshopify.com',
  storefrontAccessToken: 'c9716e8fc531f96eadb76bd4c498484d'
});
//
const productsQuery = client.graphQLClient.query((root) => {
  root.addConnection('products', {args: {first: 50}}, (product) => {
    product.add('title');
    product.add('description');
    product.add('id');
  });
});
async function checkNext(arr){
  let nextx
  if(arr[arr.length - 1].hasNextPage){
    await client.fetchNextPage(arr).then((next) => {
      nextx = next.model
    });
  }else{
    nextx = false
  }
  return nextx
}

async function searchArray(){
  search.ready = false;
  await client.product.fetchAll(250).then((model) => {
    model.forEach(_p=>{
    if(_p.id){
      let s = _p.title + ' ' +_p.description
      search[_p.id] = s.split(' ')
      Sproducts[_p.id] = _p.title
     }
    })
  let chekx
  chekx = (a)=>{
    checkNext(a).then(_e=>{
      if(_e){
        _e.forEach(_p=>{
         if(_p.id){
         let s = _p.title + ' ' +_p.description
         search[_p.id] = s.split(' ')
         Sproducts[_p.id] = _p.title
         }
       })
        chekx(_e)
      }else{
         search.ready = true;
         checkcartforup()
      }
    })
  }
  chekx(model)
  });
}

async function getProduct(productId){
  let p
  await client.product.fetch(productId).then((product) => {
    p = product
  });
  return p
}

async function getAllProducts(){
  let p
  await client.product.fetchAll().then((products) => {
     p = products
  });
  return p
}

async function getCollections(){
  let c
  await client.collection.fetchAll().then((collections) => {
  c = collections
  });
  return c
}

async function getCollectionProducts(id){
  return await client.collection.fetchWithProducts(id, {productsFirst: 250})
}

async function checkout(){
            let c
                let lineItemsToAdd = []
            for(let key in cart){
                lineItemsToAdd.push({
                    variant_id: decodeURIComponent(escape(window.atob( key ))).substr(29),
                    quantity: cart[key].q
                })
            }
            let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
  "order": {
    "test": true,
    "financial_status": "pending",
    "note": 0,
    "phone": "+91"+phoneNo,
    "shipping_address": {
      "first_name": orderAddressx.name,
      "last_name": orderAddressx.name,
      "address1": orderAddressx.flat,
      "address2": orderAddressx.landmark,
      "phone": phoneNo,
      "city": orderAddressx.city,
      "province": orderAddressx.state,
      "country": orderAddressx.country,
      "zip": orderAddressx.zip
    },
    "buyer_accepts_marketing": true,
    "line_items": lineItemsToAdd
  }
});
console.log(raw)
}
      
function placeOrder(){
  checkout().then(_e=>{
    if(!_e.order.errors){
      currentOrder = _e
      localStorage.currentOrder = JSON.stringify(_e)
      pastOrders.push(_e)
      localStorage.pastOrders = JSON.stringify(pastOrders)
      cart = {}
      cartCountfn()
      
    }else{
      
    }
  })
}

module.exports = {
   cart,
  phoneNo,
  addressArray,
  placeOrder,
  currentOrder,
  pastOrders,
  orderAddressx,
  varid,
  search,
  Sproducts,
  searchArray,
  getAllProducts,
  getProduct,
  getCollections,
  getCollectionProducts,
  cartCountfn,
  productsQuery,
  addtocart
}