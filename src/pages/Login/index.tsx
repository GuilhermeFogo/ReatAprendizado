import React from 'react';
import logo from '../../logo.svg';
import LoginInput from '../../components/Login/inputs';
import './index.css'

class PageLogin extends React.Component<any, any> {

    constructor(prop: any) {
        super(prop);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 bg-color1">
                        <figure>
                            <img src={logo} alt="Logo marca" />
                        </figure>
                        <p className="text-center h1 cor-azul-ceu">Atomic Power</p>
                    </div>
                    <div className="col-6 bg-color2">
                        
                        <h2 className="cor-azul-violeta">Seja Bem vindo ao ProgAutch</h2>
                        <div className="cor-azul-violeta margin">
                            <LoginInput></LoginInput>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageLogin;