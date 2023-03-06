
const Personnage = sequelize.define("personnages", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
 });

 exports.Personnage = Personnage;