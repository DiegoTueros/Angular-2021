
/*
    ===== Código de TypeScript =====
*/


class Heroe {
    //Solo es visible dentro de esta clase
    //private
    //Visible fuera de la clase
    //public
    //se puede acceder a la propiedad sin crear una instancia de la misma
    //static

    alterEgo: string;
    edad: number;
    nombreReal: number;
}

const ironman = new Heroe();

console.log(ironman);
