import { Usuario } from './../modal/Usuario';
import axios from 'axios';
import env from './config/config.json'
class ServiceUser {
     url: string;
    constructor() {
        this.url = env.environment.local + "auth";
    }

    public Get(usuario?: Usuario){
        return axios.get<Usuario[]>(this.url);
    }

    public Post(usuario: Usuario){
        return axios.post(this.url, usuario);
    }
}
 
export default ServiceUser;