import store from "./store"
import { addUser, removeUser } from "./userSlice"

store.dispatch(addUser({
    firstName: "Brendan",
    lastName: "Cordova",
    age: 27
}))

console.log(store.getState())
