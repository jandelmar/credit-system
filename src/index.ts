import config from "./config"
import { getUsersFromStore } from "./User"

const Users = getUsersFromStore()
console.log(Users)