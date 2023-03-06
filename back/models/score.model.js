

const Score = sequelize.define("scores", {
   score: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

const score_data = [ {score : "gauche"}, {score : "droite"}]
 