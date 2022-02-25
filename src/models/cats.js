module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING, //varchar
        breed: DataTypes.STRING,
        lastfed: DataTypes.DATE
        //sequelize will auto create pk, createdAt, updatedAt
    }

    return sequelize.define('Cat', schema);
}