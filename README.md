# is_form_valid
const isvalid = require("is_form_valid")

Validate user name

isUser(name) - to check if the username contains atleast one Camelcase. it will retur a boolean value.

isEmail(email) - to check if the user input is a proper email. it will retur a boolean value.

isReEnter(passwordOne,passwordTwo) - to check if the user entere the same password as the first field. it will retur a boolean value.

isPassword(password) -

The Password must not contain any whitespaces . The Password must contain at least one Uppercase character. The Password must contain at least one Lowercase character. The Password must contain at least one digit. The Password must have at least one Special Symbol. The Password must be 10-16 characters long.

// this will return a boolean value and an error message

eg: {
status: false, message: "Password must have at least one Uppercase Character." }