const Carrito = use("App/Models/Carrito");
const Producto = use("App/Models/Producto");

class PostProductoInCarritoController {
  async index({ response, view, request }) {
    const id = request.params.id
    const id_prod = request.params.id_prod
    const carrito = await Carrito.findBy('id', id)
    const productos = JSON.parse(carrito.productos)
    const productosFiltrado = productos.filter(producto => producto.id != id_prod)
    carrito.productos = JSON.stringify(productosFiltrado)
    const carritoCargado = await Carrito.query().where('id', id).update(carrito)
    return carrito;
  }
}

module.exports = PostProductoInCarritoController;