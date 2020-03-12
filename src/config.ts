import * as path from "path"

const price = 50

const pathToStore = path.resolve(__dirname, "../store")
const pathToStoredUsers = path.resolve(pathToStore, "Users.json")
const pathToStoredSessions =  path.resolve(pathToStore, "Sessions.json")

export default {
    price,
    pathToStoredUsers,
    pathToStoredSessions
}