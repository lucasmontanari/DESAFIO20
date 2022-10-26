'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('nombre', 80).unique()
      table.string('descripcion', 200)
      table.integer('codigo')
      table.string('foto', 150)
      table.integer('precio')
      table.integer('stock')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
