// src/db.ts

import { Sequelize } from 'sequelize';

const sequelize:Sequelize = new Sequelize('restaurent', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql', // Change this to the appropriate database dialect (e.g., 'postgres', 'sqlite', 'mssql')
});

// export const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log("connection error");
//   });



// Define the models and their associations here, if needed
// For example:
// import { UserModel } from './models/UserModel';
// const models = { User: UserModel };
// ...

// Initialize the models with the Sequelize instance
// For example:
// Object.values(models).forEach((model) => model.initialize(sequelize));

export { sequelize };

// export const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite