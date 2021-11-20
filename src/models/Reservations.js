const Model = require('objection').Model;
const knex = require('.');

Model.knex(knex);

class Reservations extends Model {
  static get tableName() {
    return 'reservations';
  }
}

module.exports = Reservations;
