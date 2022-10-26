'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Productos = use("App/Models/Producto")


Route.on('/').render('welcome')

//PRODUCTO
Route.get('productos', "getProductosController.index")
Route.get('productos/:id', "getProductoController.index")
Route.post('productos', "postProductoController.index")
Route.put('productos/:id', "putProductoController.index")
Route.delete('productos/:id', "deleteProductoController.index")

//CARRITO
Route.get('carrito/:id', "getCarritoController.index")
Route.post('carrito', "postCarritoController.index")
Route.delete('carrito/:id', "deleteCarritoController.index")
Route.get('carrito/:id/productos', "getProductosInCarrito.index")
Route.post('carrito/:id/productos/:id_prod', "postProductoInCarrito.index")
Route.delete('carrito/:id/productos/:id_prod', "deleteProductoInCarrito.index")