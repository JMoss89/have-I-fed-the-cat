module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING, //varchar
        DOB: DataTypes.DATE
        //sequelize will auto create pk, createdAt, updatedAt
    }

    return sequelize.define('Owner', schema);
}