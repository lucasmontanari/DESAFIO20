'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarritoSchema extends Schema {
  up () {
    this.create('carritos', (table) => {
      table.increments()
      table.string('productos', 4096)
      table.timestamps()
    })
  }

  down () {
    this.drop('carritos')
  }
}

module.exports = CarritoSchema
