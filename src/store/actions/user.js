export function setUser (user) {
     return {
       type: "SET_USER",
       user: user
     };
};

export function logout () {
     return {
       type: "LOGOUT",
     };
};