import 'dotenv/config';

import { app, port, server } from './service/express';

import routes from './routes';

import store from './store';

import data from '../data/woodsbythesea_sorted.json' assert { type: 'json' };

const { dispatch, getState } = store;

dispatch({ type: 'addFeed', payload: data });

app.get('/feed', routes.feed());
app.get('*', routes.root());

server.listen(port, () => {
  console.log(`http server running on port ${port}`);
});
