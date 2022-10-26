const Carrito = use("App/Models/Carrito");
const Producto = use("App/Models/Producto");

class PostProductoInCarritoController {
  async index({ response, view, request }) {
    const id = request.params.id
    const id_prod = request.params.id_prod
    const producto = await Producto.findBy('id', id_prod)
    const carrito = await Carrito.findBy('id', id)
    const productos = JSON.parse(carrito.productos)
    productos.push(producto)
    carrito.productos = JSON.stringify(productos)
    const carritoCargado = await Carrito.query().where('id', id).update(carrito)
    return carrito;
  }
}

module.exports = PostProductoInCarritoController;