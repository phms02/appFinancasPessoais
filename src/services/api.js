import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.8:3333"  // O React Native NÃO aceita requisições que não são HTTPS. Utilizamos o IP dá máquina no lugar do localhost.: 'http://192.168.15.2:3333'
});

export default api;