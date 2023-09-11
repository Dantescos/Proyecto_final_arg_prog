import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('base_uwu','root','',{
    host:'localhost',
    dialect:'mysql'
});

export const starDb = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync()
    console.log('conection has benn estabeliza');

    } catch (error) {
    console.error('imeable to conec to the databease:', error)
}

}