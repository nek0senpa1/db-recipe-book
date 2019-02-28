// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './datastuff/recipebook.sqlite3'
    },
    useNullAsDefault: true,
  },

};
