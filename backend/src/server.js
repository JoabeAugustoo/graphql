import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'prod') {
  dotenv.config({ path: '.env' });
}

import App from './App';

const { server } = App;

server.listen(process.env.PORT_SERVICE || 3333);
