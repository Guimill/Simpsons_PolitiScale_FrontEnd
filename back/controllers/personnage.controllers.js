const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
 'cartoon',
 'root',
 'Universum555-',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Personnage = sequelize.define("personnages", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    politicalId: {
        type: DataTypes.INTEGER,
        allowNull : true
    }
 });

sequelize.sync().then(() => {
    console.log('personnages table created successfully!');

Personnage.create({
       firestName: "Simpson",
       lastName: "Homer",
    }).then(res => {
       console.log(res)
    }).catch((error) => {
       console.error('Failed to create a new record : ', error);
});

}).catch((error) => {
   console.error('Unable to create table : ', error);
});