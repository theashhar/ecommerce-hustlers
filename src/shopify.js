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

function checkcartforup(){
  Object.keys(cart).forEach(_i=>{
    if(!search[varid[_i]]){
      delete cart[_i]
      cartCountfn()
      ons.notification.alert('Some Out of stock products have been removed from your cart');
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


// get best sellers
async function getBest(){
  bestSellers = []
  await client.collection.fetchWithProducts('Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTk3NjY5OTA0Nw==', {productsFirst: 10}).then((collection) => {
  collection.products.forEach(_e=>{
    if(_e.id){
      bestSellers.push(_e)
    }
  })
 });
 return bestSellers
}

async function getBestAll(){
  let bestSellers = []
  await client.collection.fetchWithProducts('Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTk3NjY5OTA0Nw==', {productsFirst: 250}).then((collection) => {
  collection.products.forEach(_e=>{
    if(_e.id){
      bestSellers.push(_e)
    }
  })
 });
 return bestSellers
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
      "address1": orderAddressx.flat + ' Locality - ' + orderAddressx.locality,
      "address2": orderAddressx.landmark,
      "phone": phoneNo,
      "city": "Bhagalpur",
      "province": "Bihar",
      "country": "India",
      "zip": "812001"
    },
    "buyer_accepts_marketing": true,
    "line_items": lineItemsToAdd
  }
});
console.log(raw)
            let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let res = await fetch("https://b13h31ki1g.execute-api.us-east-1.amazonaws.com/dev/", requestOptions)
return res.json()
            }
      
function saveAddress(){
    let address = {}
  address.name = document.getElementById('name').value
  address.flat = document.getElementById('flat').value
  address.landmark = document.getElementById('landmark').value || ''
  address.locality = locality
  if(address.name !== '' && address.flat !== ''){
    addressArray.push(address)
  localStorage.addressArray = JSON.stringify(addressArray)
  navig.popPage()
  refreshAddress()
  }else{
    ons.notification.alert('Enter Name and Address !!');
  }
  
}
function saveAddress2(){
    let address = {}
  address.name = document.getElementById('name').value
  address.flat = document.getElementById('flat').value
  address.landmark = document.getElementById('landmark').value || ''
  address.locality = locality
  if(address.name !== '' && address.flat !== ''){
    addressArray.push(address)
  localStorage.addressArray = JSON.stringify(addressArray)
  navig.popPage()
  document.getElementById('addresses').innerHTML = ''
                let a = ons.createElement(`<div></div>`)
            addressArray.forEach((_e,_i)=>{
                let k = ons.createElement(`
                <div style="display:flex;padding:24px 24px;justify-content:space-between;border:1px solid #EEEEEE; font-size: 14px;margin-top: 15px;">
            <div style = "display:flex; flex-direction: column;">
                <span style= "color:#333333; padding-bottom: 5px; ">${_e.name}</span>
                <span style= "color:#666666; padding-bottom: 5px;">${_e.flat}</span>
                <span style= "color:#666666; padding-bottom: 5px;">${_e.landmark}</span>
                <span style= "color:#666666; padding-bottom: 5px;">${_e.locality}</span>
                <ons-toolbar-button style="background-color: #E96125; color: white; border-radius: 3px; display: block; position: inherit; margin-top: 24px; font-size: 14px; padding: 12px 20px;" onclick="delAddress(${_i},this)">Delete Address</ons-toolbar-button>
            </div>
            <div></div>
        </div>`)
  
           a.append(k)
            })
            document.getElementById('addresses').append(a)
  }else{
     ons.notification.alert('Enter Name and Address !!');
  }
  
  
}
function savePhoneno(e){
  phoneNo = document.getElementById('phoneno').value
  if(phoneNo !== ''){
    localStorage.phoneno = phoneNo
  e.parentElement.style.display = 'none';
  e.parentElement.parentElement.parentElement.children[0].style.backgroundColor = '#54B226'
  refreshAddress()
  }else{
    ons.notification.alert('Enter Phone Number !!');
  }
}
function refreshAddress(){
                document.getElementById('addrshidex').style.display = 'block'
                document.getElementById('savedAddress').innerHTML = ''
                let a = ons.createElement(`<div></div>`)
            addressArray.forEach((_e,_i)=>{
                let k = ons.createElement(`
                <div style="display:flex;padding:24px 24px;justify-content:space-between;border:1px solid #EEEEEE; font-size: 14px;margin-top: 15px;">
            <div style = "display:flex; flex-direction: column;">
                <span style= "color:#333333; padding-bottom: 5px; ">${_e.name}</span>
                <span style= "color:#666666; padding-bottom: 5px;">${_e.flat}</span>
                <span style= "color:#666666; padding-bottom: 5px;">${_e.landmark}</span>
                <span style= "color:#666666; padding-bottom: 5px;">${_e.locality}</span>
                <!--<ons-toolbar-button style="padding:14px 67px;  background-color:#E96125; margin-top: 24px; border-radius: 3px; color: white;" id="Deliver__Here__Checkout">Deliver Here</div>-->
                <ons-toolbar-button style="background-color: #E96125; color: white; border-radius: 3px; display: block; position: inherit; margin-top: 24px; font-size: 14px; padding: 12px 50px;" onclick="orderAddress(${_i},this)">Deliver Here</ons-toolbar-button>
            </div>
            <div></div>
        </div>`)
  
           a.append(k)
            })
            document.getElementById('savedAddress').append(a)
        }
function orderAddress(_i,_e){
  orderAddressx = addressArray[_i]
  _e.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
  _e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.backgroundColor = '#54B226'
  document.getElementById('paymtx').style.display = 'block'
}
function upiTrack(_e){
  _e.children[0].innerHTML = 'Upi payments coming soon'
  addUpi(orderAddressx)
}
function placeOrder(){
  loader.show()
  checkout().then(_e=>{
    if(!_e.order.errors){
      currentOrder = _e
      localStorage.currentOrder = JSON.stringify(_e)
      pastOrders.push(_e)
      localStorage.pastOrders = JSON.stringify(pastOrders)
      cart = {}
      cartCountfn()
      loader.hide()
      document.getElementById('orderS').show()
      navig.popPage().then(()=>{
        navig.popPage().then(()=>{
          navig.pushPage('myorders.html')
        })
      })
    }else{
      ons.notification.alert('Something went wrong !!');
      console.log(_e)
      loader.hide()
      navig.popPage()
    }
  })
}
function delAddress(i,t){
  addressArray.splice(i,1);
  localStorage.addressArray = JSON.stringify(addressArray)
  t.parentElement.parentElement.remove()
}
function addAddressLocal(t){
  let k = localarr
  ons.openActionSheet({
                 title: 'We Currently Deliver Only in',
                 cancelable: true,
                 buttons: k
              }).then(function (index) { 
                 
                 if(k[index] !== 'Cancel' && index !== -1){
                     t.innerText = 'Locality - '+ k[index]
                     locality =  k[index]
                     console.log
                 } 
              });
}
async function updateOrderStatus(id){
  let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
let url = 'https://b13h31ki1g.execute-api.us-east-1.amazonaws.com/dev?id='+id
let response = await fetch(url, requestOptions)
let sts = await response.json();
return sts.order.order.note
}