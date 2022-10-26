const Producto = use("App/Models/Producto");

class PutProductoController {
  async index({ response, view, request }) {
    const id = request.params.id
    const productoUpdate = await request.body;
    const productoCargado = await Producto.query().where('id', id).update(productoUpdate)
    const productos = [productoUpdate];
    return view.render("productos", { productos });
  }
}

module.exports = PutProductoController;