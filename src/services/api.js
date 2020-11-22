import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/*
  'http://financeapptest.atwebpages.com'

  base URL para acessar os dados apartir do servidor
  porém é gratuito e pode não funcionar tão bem, caso isso acontece utilize o localhost
  utilizando o comando :

  json-server server.json -p 3333
 */
