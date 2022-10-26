const Carrito = use("App/Models/Carrito");

class DeleteCarritoController {
  async index({ response, view, request }) {
    const id = request.params.id
    const deletedCarrito = await Carrito.query().where('id', id).delete()
    return "Carrito Eliminado";
  }
}

module.exports = DeleteCarritoController;