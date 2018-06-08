module.exports = (sequelize, DataTypes) => {
    const ListItem = sequelize.define('listItems', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      linkUrl: DataTypes.STRING
    });
  
    ListItem.associate = (models) => {
      ListItem.belongsTo(models.List, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return ListItem;
  };