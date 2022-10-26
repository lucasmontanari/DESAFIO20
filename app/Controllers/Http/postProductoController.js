const Producto = use("App/Models/Producto");

class PostProductoController {
  async index({ response, view, request }) {
    const nuevoProducto = await request.body;
    const productoCargado = await Producto.create(nuevoProducto)
    const productos = [nuevoProducto];
    return view.render("productos", { productos });
  }
}

module.exports = PostProductoController;