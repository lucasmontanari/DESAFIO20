const Producto = use("App/Models/Producto");

class GetProductoController {
  async index({ response, view, request }) {
    const id = request.params.id;
    const result = await Producto.findBy('id', id)
    const productos = [result];
    return view.render("productos", { productos });
  }
}

module.exports = GetProductoController;
