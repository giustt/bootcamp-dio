// End Generic Types
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}
function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        //redirecionar(usuario.cargo);
    }

    //redirecionar para a area de usuario
}
