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
    saveUsersToJSON(userStore)
}

const removeUser = (user: User) => {
    userStore.delete(user.name) // TODO: check if user exists
    saveUsersToJSON(userStore)
}

const loadUsersFromJSON = (): Users => {
    return new Map(JSON.parse(fs.readFileSync(config.pathToStoredUsers).toString()))
}

const saveUsersToJSON = (users: Users) => {
    fs.writeFileSync(config.pathToStoredUsers, JSON.stringify([...users]))
}

let userStore: Users = loadUsersFromJSON()

export default {
    createUser,
    getUsers,
    addUser,
    removeUser
}