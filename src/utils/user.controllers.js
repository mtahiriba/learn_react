import { UserAccounts } from "../Content";

function userLogin(email, password){

    const user = UserAccounts.filter((user) => {
        if(user.email === email && user.password === password){
            return user;
        }
    });

    if(user.length === 0){
        return {
            message: "Email or password was incorrect!"
        }
    }

    return user[0]
}

export { userLogin };