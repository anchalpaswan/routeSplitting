//todo in this backend i made folder structure and used dotenv 

import { app } from './app.js';
import { connection } from './data/database.js';

connection();

app.listen(4000, () => console.log('server is working'))