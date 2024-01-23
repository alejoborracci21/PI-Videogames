const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('genre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    juegos: {
      type: DataTypes.ARRAY(DataTypes.JSONB), // Aquí se define como un array de objetos JSONB
      defaultValue: [],
    },
  });
};