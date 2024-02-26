import env from '../env';
import App from "./@core/App";
import { AppDataSource } from "./@core/data-source";

AppDataSource.initialize()
  .then(async () => {
    const { express } = new App();

    return express.listen(env.API_PORT, () => {
      console.log(`Server running at port ${env.API_PORT}`);
    });
  })
  .catch(error => console.log(error))
