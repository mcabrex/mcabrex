module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('lists', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
    });
  
    List.associate = (models) => {
      List.hasMany(models.ListItem)
     };
  
    return List;
  };