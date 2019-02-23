import { API_URL } from 'constants/apiConstants';
import auth from '@feathersjs/authentication-client';
import axios from 'axios';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';

const app = feathers();
const restClient = rest(API_URL);
app.configure(restClient.axios(axios));
app.configure(auth());

export default app;

export const users = app.service('users');
