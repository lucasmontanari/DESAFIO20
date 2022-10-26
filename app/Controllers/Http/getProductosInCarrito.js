const Carrito = use("App/Models/Carrito");

class GetProductosInCarritoController {
  async index({ response, view, request }) {
    const id = request.params.id;
    const result = await Carrito.findBy('id', id)
    return result.productos
  }
}

module.exports = GetProductosInCarritoController;