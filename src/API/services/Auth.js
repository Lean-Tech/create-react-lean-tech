import { FETCH } from '../fetch'
import { loadStorage } from '../../tools/storage'

export class Auth {
    isAuthenticated() {
        return loadStorage('token')
    }
}