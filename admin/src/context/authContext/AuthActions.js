export const loginstart = () =>({
    type:"LOGIN_START",
})
export const loginsuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload:user,
})
export const loginfailure = () =>({
    type:"FAILURE",
})

//logout
export const logout = () => ({
  type: "LOGOUT",
});
