const Producto = use("App/Models/Producto");

class GetProductoController {
  async index({ response, view, request }) {
    const result = await Producto.all();
    const productos = result.toJSON();
    return view.render("productos", { productos });
  }
}

module.exports = GetProductoController;
