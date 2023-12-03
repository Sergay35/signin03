import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { loginValidation , passwordValidation } from './validation';
import './auth-form.css';


interface ISignInForm {
    login: string;
    password: string;
}

export const AuthForm = () => {
    const {handleSubmit, control} = useForm<ISignInForm>();
    const {errors} = useFormState({
        control
    });
    const onSubmit:SubmitHandler<ISignInForm> = (data) =>
     console.log(data);
    return (
        <div className='auth-form'>
            <Typography variant="h4" component="div" >
              Sign In
            </Typography>
            <Typography variant="subtitle1" component="div" 
            gutterBottom={true} className="auth-form_subtitle" >
               Don’t have an account yet?{" "}
                <a  href="#" className="signUplink">
                  Sign up
                </a>{" "}
            </Typography>
            <form className='auth-form_form' onSubmit={handleSubmit(onSubmit) }>
               <Controller 
                   control={control}
                   name="login"
                   rules={{required: 'Обязательно для заполнения'}}
                   render={({field}) => (
                        <TextField
                    label="Your username or email address"
                    size="small"
                    margin="normal"
                    className="auth-form_input"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.login?.message}
                    helperText={errors.login?.message}
                    />
                   )}
                />
                <Controller 
                   control={control}
                   name="password"
                   rules={passwordValidation}
                   render={({field}) => (
                        <TextField
                    label="Password"
                    size="small"
                    margin="normal"
                    className="auth-form_input"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                    />
                    )}
                />
                   <div className="option">
                {/* <div className="forgotPassword">  Forgot password?</div> */}
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                    //   name={'remember' }
                    //   checked={ }
                    //   onChange={ }
                      className="form-check-input"
                      type="checkbox"
                    />
                    Remember me
                  </label>
                  <a className="forgotPassword" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
            
         

                 <Button type="submit"
                    variant="contained"
                    fullWidth={ true}
                    disableElevation={true}
                    sx={{
                        marginTop:2
                    }}
                  className="button"
                  >Sign In</Button>
            </form>
        </div>
    )
}