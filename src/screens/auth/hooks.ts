import {useRef, useState} from 'react';
import {Input} from 'react-native-elements';

import {emailValidation, passwordValidation} from '../../services/validation';
import errorsMessages from '../../services/errors';
import {useDispatch} from "react-redux";
import {FETCH_LOGIN, FETCH_SIGN_UP} from "../../state/reducers/authReducer";

interface Errors {
  emailError?: string;
  passwordError?: string;
  serverError?: string;
}

const useForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setSignUp] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const [securityEntry, setSecurityEntry] = useState<boolean>(true);

  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);

  const dispatch = useDispatch();

  const onBlurEmail = () => {
    const isEmail = emailValidation(email);
    if (isEmail) {
      passwordRef.current?.focus();
    } else {
      setErrors({...errors, emailError: errorsMessages.email});
    }
  };
  const onBlurPassword = () => {
    const isPasswordCorrect = passwordValidation(password);
    if (isPasswordCorrect) {
      submitForm();
    } else {
      setErrors({...errors, passwordError: errorsMessages.password});
    }
  };

  const checkAllFields=()=>{
    const isValidEmail=emailValidation(email)
    const isValidPassword=passwordValidation(password)
    if(!isValidEmail){
      setErrors({...errors, emailError: errorsMessages.email});
    }
    if(!isValidPassword){
      setErrors({...errors, passwordError: errorsMessages.password});
    }
    return isValidEmail && isValidPassword
  };

  const submitForm = async() => {
    if(!checkAllFields()){
      return
    }
    setLoading(true);
    if (!errors.passwordError && !errors.emailError) {
      if (isSignUp) {
        signUp();
      } else {
        login();
      }
    }
    setLoading(false);
  };

  const login = async() => {
      dispatch({
        type: FETCH_LOGIN,
        payload: {email, password},
      });
  };

  const signUp = () => {
    try{
      dispatch({
        type: FETCH_SIGN_UP,
        payload: {email, password},
      });
    }catch (e) {
      console.log('setLoading', signUp)
    }
  };

  const constHandleSetSecurityTextEntry = () =>
    setSecurityEntry(!securityEntry);

  const handleSetSignUp = () => setSignUp(!isSignUp);

  const handleSetEmail = (text: string) => {
    if (errors.emailError) {
      setErrors({...errors, emailError: ''});
    }
    setEmail(text);
  };

  const handleSetPassword = (text: string) => {
    if (errors.passwordError) {
      setErrors({...errors, passwordError: ''});
    }
    setPassword(text);
  };

  return {
    emailRef,
    passwordRef,
    email,
    handleSetEmail,
    password,
    handleSetPassword,
    isSignUp,
    setSignUp,
    onBlurEmail,
    submitForm,
    errors,
    securityEntry,
    loading,
    constHandleSetSecurityTextEntry,
    handleSetSignUp,
    onBlurPassword,
    enableSubmit: emailValidation(email) && passwordValidation(password),
  };
};

export default useForm;
