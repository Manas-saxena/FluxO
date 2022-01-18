export const loginstart = () =>({
    type:"LOGIN_START",
})
export const loginstart = (user) =>({
    type:"LOGIN_SUCCESS",
    payload:user,
})
export const loginstart = () =>({
    type:"FAILURE",
})