import { useReducer , useEffect } from "react"

//Interface
interface AuthState {
    validando: boolean;
    token: string | null;
    username: string | null;
    nombre: string | null;
}

//Estado Inicial
const initialState : AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username: string,
    nombre: string,
}


type AuthAction = 
    | { type: "logout" }
    | { type: "login", payload: LoginPayload };

                            //Interface       //type
const authReducer = (state: AuthState, action: AuthAction): AuthState  => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }
        case 'login':
            const { nombre , username } = action.payload
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username
            }
        default:
            return state;
    }
}

//------------------------------------------------>
export const Login = () => {
    
  const [
    { validando , token , nombre }, //Funcion  //Estado Inicial
    dispatch] = useReducer(authReducer, initialState);

  useEffect(()=> {
    setTimeout(()=> {
        dispatch({type: 'logout'});
    },1500);
  },[]);

  const login = () => {
    dispatch({
        type: 'login',
        payload: {
            nombre: 'Nicolas',
            username: 'Zenaku'
        }
    });
  }

  const logout = ()=> {
    dispatch({ type: 'logout' });
  }

  if (validando){
    return (
        <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validando...
            </div>
        </>
    )
  }

  return (
    <>
        <h3>Login</h3>
        {
            ( token )
               ? <div className="alert alert-success">Autenticado como: {nombre}</div>
               : <div className="alert alert-danger">No Autenticado...</div>
        }                
        {
            (token)
               ? (<button 
                    className="btn btn-danger"
                    onClick={logout}
                    >Logout</button>)
               : (<button 
                    className="btn btn-primary"
                    onClick={login}
                  >
                    Login
                </button>)
        }                        
    </>
  )
}
