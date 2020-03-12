import * as fs from "fs"
import config from "../config"

interface User {
    name: string;
    credit: number;
}
type Users = Map<string, User>

export const getUsersFromStore = (): Users => {
    return new Map(JSON.parse(fs.readFileSync(config.pathToStoredUsers).toString()))
}

export const saveUsersToStore = (users: Users) => {
    fs.writeFileSync(config.pathToStoredUsers, JSON.stringify([...users]))
}

export const createUser = (name: string): User => ({
    name,
    credit: 0
})

const addUser = (user: User, users: Users) => ({
    users
})
