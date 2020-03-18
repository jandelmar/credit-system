import * as fs from "fs"
import config from "../config"

interface User {
    name: string;
    credit: number;
}
type Users = Map<string, User>


const createUser = (name: string): User => ({
    name,
    credit: 0
})

const getUsers = () => {
    return userStore
}

const addUser = (user: User) => {
    userStore.set(user.name, user) // TODO: check if user exists
    saveUsersToJSON(config.pathToStoredUsers, userStore)
}

const removeUser = (user: User) => {
    userStore.delete(user.name) // TODO: check if user exists
    saveUsersToJSON(config.pathToStoredUsers, userStore)
}

const initializeUsersJSON = (path: string) => {
    if(!fs.existsSync(path)) {
        console.log("initialize", path)
        fs.writeFileSync(path, JSON.stringify([]))
    }
}

const loadUsersFromJSON = (path: string): Users => {
    return new Map(JSON.parse(fs.readFileSync(path).toString()))
}

const saveUsersToJSON = (path: string, users: Users) => {
    fs.writeFileSync(path, JSON.stringify([...users]))
}

initializeUsersJSON(config.pathToStoredUsers)
let userStore: Users = loadUsersFromJSON(config.pathToStoredUsers)

export default {
    createUser,
    getUsers,
    addUser,
    removeUser
}