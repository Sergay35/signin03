import React from 'react';
import { AuthForm } from '../auth-form/auth-form';
import './auth-page.css';
import chair from './img/pasteImage.jpg';

export const AuthPage: React.FC = () => {
    
    return (
        <div className="auth-page">
            <div className="left">
               <div className="imagePlaceholder">
                  <div className="pasteImage">
                  <img src={chair} alt="photo" />
                  </div>
                </div>
                <div className="logo">
                   <div className="legant">
                       <p>3legant.</p>
                    </div>
                </div> 
            </div>
            <div className="right">
              <AuthForm />
            </div>
        </div>
    )
}

