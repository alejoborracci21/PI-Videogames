const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('videogame', {
    id: { //COMPLETE
      // Use UUID - Diferenciar entre ambas BDD...
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: { // COMPLETE 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    released:{ 
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://i.pinimg.com/originals/1d/2f/7a/1d2f7a9c6fb224ca63c8b79f4f055861.png',
      set(value) {
        // Si se proporciona una imagen, utiliza esa imagen, de lo contrario, usa la predeterminada
        this.setDataValue('image', value || 'https://i.pinimg.com/originals/1d/2f/7a/1d2f7a9c6fb224ca63c8b79f4f055861.png');
      },
    },
    rating:{
      type: DataTypes.INTEGER
    },
  },{timestamps: false,
    createdAt: 'creado',
    updatedAt: false
},{
  timestamps: false
});
};
