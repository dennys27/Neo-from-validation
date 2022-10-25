const validate = {
    
    isUser(userName){
        let userRegex = /[A-Z]/
        if (userRegex.test(userName) === true && userName !== "") {
            return true
        } else {
            return false
        }
    },
    
    isEmail(email){
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (emailRegex.test(email) === true && email !== "") {
            return true
        } else {
            return false
        }
    },

    isReEnter(password,rePassword){
        if (password === rePassword) {
            return true
        } else {
            return false
        }
    },
    
    isPassword(password){
        let whiteSpace = /^(?=.*\s)/
        let upperCase = /(?=.*[A-Z])/
        let lowerCase = /^(?=.*[a-z])/
        let digit = /^(?=.*[0-9])/
        let symbol = /^(?=.*?[!@#\$&*~])/
        let limit = /^.{10,16}$/

        if (password == "") {
            return {status:false, message:"password cannot be empty"}
        }

        if (whiteSpace.test(password)) {
             return { status: false, message: "password cannot conatain white spaces" };
        }

        if (!upperCase.test(password)) {
             return {
               status: false,
               message: "Password must have at least one Uppercase Character.",
             };
        }

        if (!lowerCase.test(password)) {
             return {
               status: false,
               message: "Password must have at least one Lowercase Character.",
             };
        }

        if (!digit.test(password)) {
          return {
            status: false,
            message: "Password must contain at least one Digit.",
          };
        }

        if (!symbol.test(password)) {
          return {
            status: false,
            message: "Password must contain at least one Special Symbol.",
          };
        }
        if (!limit.test(password)) {
          return {
            status: false,
            message: "Password must be 10-16 Characters Long.",
          };
        } else {
            return {
              status: true,
              message: "strong password.",
            };
        }



   }

}

module.exports = validate