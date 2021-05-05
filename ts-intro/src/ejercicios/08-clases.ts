
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{

    constructor( 
        public nombre: string, 
        public direccion: string
    ){}
}
class Heroe extends PersonaNormal {
    //private: Solo es visible dentro de esta clase
    //public: Visible fuera de la clase
    //static: se puede acceder a la propiedad sin crear una instancia de la misma
    
    //Otra forma
    //alterEgo: string;
    //edad: number;
    //nombreReal: number;

    constructor( 
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super( nombreReal, 'NewYork, USA' );
    }

    
}

const ironman = new Heroe('IronMan', 45, 'Tony');

console.log(ironman);
