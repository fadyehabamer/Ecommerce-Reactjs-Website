import React, { Component } from 'react';

import '../signup.css';


// * no vlaidate => his doesn't disable form validation. It only prevents the browser from interfering when an invalid form is submitted 

// export default class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//          // * Hold Inputs 

//             fullName: null,
//             email: null,
//             password: null,

//              // * Hold error msgs
//             errors: {
//                 fullName: '',
//                 email: '',
//                 password: '',
//             }
//         };
//     }

//     handleChange = (event) => {
//         event.preventDefault();
//         const { name, value } = event.target;

//         // * === 
//         // * let name = event.target.name;
//         // * let value = event.target.value;

//         let errors = this.state.errors;

//         switch (name) {
//             case 'fullName':
//                 errors.fullName =
//                     value.length < 5
//                         ? 'Full Name must be 5 characters long!'
//                         : '';
//                 break;
//             case 'email':
//                 errors.email =
//                     validEmailRegex.test(value)
//                         ? ''
//                         : 'Email is not valid!';
//                 break;
//             case 'password':
//                 errors.password =
//                     value.length < 8
//                         ? 'Password must be 8 characters long!'
//                         : '';
//                 break;
//             default:
//                 break;
//         }

//         this.setState({ errors, [name]: value });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         if (validateForm(this.state.errors)) {
//             this.props.history.push('/');

//         } else {
//             console.error('Invalid Form')
//         }
//     }

//     render() {
//         const { errors } = this.state;
//         return (
//             <div className='wrapper'>
//                 <div className='form-wrapper'>
//                     <h2>Create Account</h2>
//                     <form onSubmit={this.handleSubmit} noValidate>
//                         <div className='fullName'>
//                             <label htmlFor="fullName">Full Name</label>
//                             <input type='text' name='fullName' onChange={this.handleChange} noValidate />
//                             {/* if the error message for that field contains a message, if so display it */}
//                             {errors.fullName.length > 0 &&
//                                 <span className='error'>{errors.fullName}</span>}
//                         </div>
//                         <div className='email'>
//                             <label htmlFor="email">Email</label>
//                             <input type='email' name='email' onChange={this.handleChange} noValidate />
//                             {errors.email.length > 0 &&
//                                 <span className='error'>{errors.email}</span>}
//                         </div>
//                         <div className='password'>
//                             <label htmlFor="password">Password</label>
//                             <input type='password' name='password' onChange={this.handleChange} noValidate />
//                             {errors.password.length > 0 &&
//                                 <span className='error'>{errors.password}</span>}
//                         </div>
//                         <div className='info'>
//                             <small>Password must be eight characters in length.</small>
//                         </div>
//                         <div className='submit'>
//                             <button>Create</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const validateForm = (errors) => {
//     let valid = true;
//     Object.values(errors).forEach(
//         (val) => val.length > 0 && (valid = false)
//     );
//     return valid;
// }

export default class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
            this.props.history.push('/');
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{11}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please password which contains capital , small , numbers , special charachters.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {
        return (
            <div id="main-registration-container">
                <div id="register">
                    <h3>Registration page</h3>
                    <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                        <label>Name</label>
                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.username}</div>
                        <label>Email ID:</label>
                        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.emailid}</div>
                        <label>Mobile No:</label>
                        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.mobileno}</div>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.password}</div>
                        <input type="submit" className="button" value="Register" />
                    </form>
                </div>
            </div>

        );
    }


}


