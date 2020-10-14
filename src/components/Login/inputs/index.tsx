import React from 'react';
import { Usuario } from '../../../modal/Usuario';
import ServiceUser from '../../../services/serviceUser';
import './index.css'
export class LoginInput extends React.Component <any, Usuario> {

    private serviceUser: ServiceUser;
    constructor(props: any) {
        super(props);
        this.state = { name: '', pass: '' };
        this.serviceUser = new ServiceUser();


        this.setValues = this.setValues.bind(this);
        this.submit = this.submit.bind(this);
    }

    setValues(event: any) {
        this.setState({
            name: event.target.value,
            pass: event.target.value
        });
    }

    submit(event: any) {
        const user: Usuario ={
            name: this.state.name,
            pass: this.state.pass
        }
        console.log(user);
        
        const promisse = this.serviceUser.Get();
        promisse.then(a=>{
            console.log(a.data.forEach(usu => usu.name));
        }).catch( (r)=>{
            console.log(r);
            
        })
           
    }

    render() {
        return (
            <div className="continer">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.submit}>
                            <div className="form-group ajusta">
                                <label>Nome Usuario</label>
                                <input type="text" name="usuario" onChange={this.setValues}
                                    placeholder="Digite o usuario" className="form-control" required />
                            </div>
                            <div className="form-group ajusta">
                                <label >Senha</label>
                                <input type="password" name="senha" onChange={this.setValues}
                                    placeholder="Digite o usuario"  className="form-control" required/>

                                <div className="p-2">
                                    <input type="submit" className="btn btn-primary" name="enviar"/>
                                    {/* <input type="button" onClick={this.submit} className="btn btn-primary" name="enviar"/> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}






export default LoginInput;