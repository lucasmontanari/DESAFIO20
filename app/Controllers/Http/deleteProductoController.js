const Producto = use("App/Models/Producto");

class DeleteProductoController {
  async index({ response, view, request }) {
    const id = request.params.id
    const deletedProducto = await Producto.query().where('id', id).delete()
    const result = await Producto.all();
    const productos = result.toJSON();
    return view.render("productos", { productos });
  }
}

module.exports = DeleteProductoController;