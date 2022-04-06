import "./sign-in-form.styles.scss";

import { useState } from "react";

import {
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const signUserWithGoogle = async () => {
    await signInWithGooglePopUp();
  };
  // Setting state for signup form values:
  const [formFields, setFormFields] = useState(defaultFormFields);
  // Destructuring:
  const { email, password } = formFields;

  // Handle change in input forms
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Handle user clicking submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signAuthUserWithEmailAndPassword(formFields);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;

        case "auth/user-not-found":
          alert("Email not found");
          break;

        default:
          console.error(err);
      }
      // alert(`${err.code.replaceAll("/", "-").split("-").slice(1).join(" ")}`);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signUserWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
