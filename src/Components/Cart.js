import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { cartTotal } from '../shopify';
export default function Cart() {
  const [cart,setCart] = useState({});
  const [refresh,setRefresh] = useState(Math.random());
  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('cart')))
  },[refresh])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        {Object.keys(cart).length > 0 ? <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {Object.values(cart).map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.images[0].src}
                      alt="product"
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                              {product.title}
                            </a>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">₹ {product.variants[0].price.amount}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label className="sr-only">
                          Quantity, {product.title}
                        </label>
                        {
                          product.q
                        }

                        <div className="absolute top-0 right-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500" 
                          onClick={()=>{
                            let cart = JSON.parse(localStorage.getItem('cart'));
                            delete cart[product.id];
                            localStorage.setItem('cart',JSON.stringify(cart));
                            setRefresh(Math.random());
                          }}>
                            <span className="sr-only">Remove</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">₹ {cartTotal()}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>:(<div className="mt-12 font-bold text-center">
            Cart is empty
          </div>
          )}
      </div>
    </div>
  )
}