import { SET_USERNAME } from "./actionType";

export const setUsername = (user) => ({
    type: SET_USERNAME,
    payload: user
})