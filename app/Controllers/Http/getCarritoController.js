const Carrito = use("App/Models/Carrito");

class GetCarritoController {
  async index({ response, view, request }) {
    const id = request.params.id;
    const result = await Carrito.findBy('id', id)
    return result
  }
}

module.exports = GetCarritoController;