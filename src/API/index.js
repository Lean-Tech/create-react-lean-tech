import { Item } from './services/Item'
import { Auth } from './services/Auth'

class API {
  itemService = new Item()
  authService = new Auth()
}

export default new API()
