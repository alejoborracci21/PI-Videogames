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
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    released:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING,
      defaultValue: 'https://i.pinimg.com/originals/1d/2f/7a/1d2f7a9c6fb224ca63c8b79f4f055861.png',
      set(value) {
        // Si se proporciona una imagen, utiliza esa imagen, de lo contrario, usa la predeterminada
        this.setDataValue('background_image', value || 'https://i.pinimg.com/originals/1d/2f/7a/1d2f7a9c6fb224ca63c8b79f4f055861.png');
      },
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    }, genres: {
      type: DataTypes.JSONB, // Puedes usar JSON si tu base de datos lo soporta
      allowNull: false,
      defaultValue: [], // Puedes inicializarlo con un array vacío si lo deseas
    },
  },{timestamps: false,
    createdAt: 'creado',
    updatedAt: false
},{
  timestamps: false
});
};
