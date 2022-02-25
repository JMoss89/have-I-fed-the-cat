const Sequelize = require('sequelize');
const CatModel = require('./cats');
const OwnerModel = require('./owner');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// connect to 
const setUpDatebase = () => {
    // create an instance of Sequelize
    const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: "mysql"
    })

    const Cat = CatModel(connection, Sequelize);
    const Owner = OwnerModel(connection, Sequelize);

    Cat.belongsTo(Owner, { as: 'ownerId' });
    // This will allow changes to be saved into the DB.
    connection.sync({alter: true});

    return { Cat, Owner };
};

module.exports = setUpDatebase();