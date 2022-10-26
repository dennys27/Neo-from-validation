# [neo-form-validations](https://github.com/dennys27/Neo-from-validation) &middot; [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/neo-form-validations) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://www.npmjs.com/package/neo-form-validations)

neo-form-validations is built to make your clientside form validations much easier.



[want to contribute?](https://github.com/dennys27/Neo-from-validation).

## Installation

if you're using npm :: 
npm install neo-form-validations

if you're using yarn ::
yarn add neo-form-validations


## Documentation

react

import validate from 'neo-form-validations'



## Examples

We have several examples [on the website](https://reactjs.org/). Here is the first one to get you started:

```jsx
import vaidate from 'neo-form-validations';

validate.isUser(username)
// it will make sure your username contains atleast one uppercase or it is not an empty string.it will return a boolean value.


validate.isEmail(email)
//it will make sure the user input is a proper email an it is not an empty string. it will return a boolean value.


validate.isReEnter(passwordOne,passwordTwo)
//it is to confirm password if you have a confirm password field in your form. it will return a boolean value.

validate.isPassword(password)
// The Password must not contain any whitespaces.

// The Password must contain at least one Uppercase character.

// The Password must contain at least one Lowercase character.

// The Password must contain at least one digit.

// The Password must have at least one Special Symbol.

//The Password must be 10-16 characters long.

// it will return an object containing a boolean value an a message

/*

eg:

  {
    status: "false", " message:"Password must be 10-16 Characters Long. "
    
  }

  */

```


## Contributing

Feel free to contribute an make sure to notify if you're facing any problems with this project.



### [Contributing Guide](https://github.com/dennys27/Neo-from-validation)



### License

Neo-from-validation [ licensed](https://github.com/dennys27/Neo-from-validation).# Neo-from-validation
# Neo-from-validation
