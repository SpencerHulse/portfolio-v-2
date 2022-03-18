const sequelize = require("../config/connection");
const seedProjects = require("./projectData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProjects();

  process.exit(0);
};

seedAll();
