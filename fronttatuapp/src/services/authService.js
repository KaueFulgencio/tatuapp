import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333'
  baseURL: 'http://192.168.10.100:3333'
})

export { api };

export const checkUserExists = async (username, email) => {
    
}
  