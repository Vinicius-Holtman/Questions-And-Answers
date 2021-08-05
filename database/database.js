const Sequelize = require('sequelize')

// Colocar nome do banco de dados que ira utilizar, usuario e senha do banco de dados
const connection = new Sequelize('exNomeBanco', 'root', 'ex123123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection