const Carrito = use("App/Models/Carrito");

class PostCarritoController {
  async index({ response, view, request }) {
    const carritoCargado = await Carrito.create({productos: '[]'})
    return carritoCargado
  }
}

module.exports = PostCarritoController;