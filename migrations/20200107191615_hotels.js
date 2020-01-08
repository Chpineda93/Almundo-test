
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('hotels', function (table) {
        table.increments()
        table.string('name')
        table.integer('stars')
        table.string('price')
        table.string('image')
        table.string('ubication')
        table.string('ubicationImage')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('hotels')
};
