import axios from 'axios'
import { loadStorage } from '../tools/storage'

export const FETCH = async (method, endpoint, payload = {}, url = null) => {
  const URL = url || `${process.env.REACT_APP_BASE_URL}${endpoint}`;
  const Authorization = await loadStorage('token') 
  const instance = axios.create({

    headers: {
      'content-type': 'application/json',
      'Authorization': Authorization && `Bearer ${Authorization}`
    }
  });

  return new Promise(async (resolve, reject) => {
    const _method = method.toLocaleLowerCase() 
    if (instance[_method]) {
      try {
        return resolve(await instance[_method](URL, payload));
      } catch (error) {
          return reject(error);
        }
    }
    return reject(new Error('Method not is valid'))
  });
};
