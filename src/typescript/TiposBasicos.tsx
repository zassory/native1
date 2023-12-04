
export const TiposBasicos = () => {

//   let nombre: string | number = 'Nicolas';
const nombre: string | number = 'Nicolas';  
const edad: number = 40;
const estaActivo:boolean = false;

const poderes: string[] = [];//'Velocidad','Volar','Respirar en el agua'


return (
<>
    <h3>Tipos básicos</h3>
    { nombre } , { edad } , { (estaActivo) ? 'Activo':'No Activo' }
    <br />
    { poderes.join(', ') }
</>
)
}
