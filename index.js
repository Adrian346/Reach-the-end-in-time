class Estado {
    constructor(x, y, d) { 
        this.x = x;
        this.y = y;
        this.d = d;
    }
}

const maximoMovimientos = 5; 

const laberinto = [
    [ '.', '.', '.', ],
    [ '#', '.', '.', ],
    [ '#', '.', '.', ],
];

const visitado = new Array(laberinto.length);

for(let i = 0; i < laberinto.length; i++){
    visitado[i] = new Array(laberinto[0].length);
}

const cola = new Array();

estadoInicial = new Estado(0, 0, 0)
cola.push(estadoInicial);

const adyacenteX = [ 0, 0, 1, -1 ];
const adyacenteY = [ 1, -1, 0, 0 ];

if(laberinto[0][0] === '.'){
    const totalMovimientos = buscar();
    if(totalMovimientos <= maximoMovimientos && totalMovimientos !== -1 ){
        console.log('Yes');
    } else {
        console.log('No');
    }
} else {
    console.log('No');
}

function buscar() {

    while( cola.length !== 0 ){
        const estadoActual = cola.shift();
        if(estadoActual.x === (laberinto.length - 1) && estadoActual.y === (laberinto[0].length - 1) ){
            visitado[estadoActual.x][estadoActual.y] = true;
            return estadoActual.d;
        }
        visitado[estadoActual.x][estadoActual.y] = true;
        for( let i = 0; i < 4; i++ ){
            const coordenadaX = adyacenteX[i] + estadoActual.x;
            const coordenadaY = adyacenteY[i] + estadoActual.y;
    
            if( coordenadaX >= 0 && coordenadaX < laberinto.length 
                && coordenadaY >= 0 && coordenadaY < laberinto[0].length
                && laberinto[coordenadaX][coordenadaY]!=='#'
                && !visitado[coordenadaX][coordenadaY]
            ){
                const estadoAdyacente = new Estado(coordenadaX, coordenadaY, estadoActual.d + 1);
                cola.push(estadoAdyacente);
            }
        }
    }
    return -1;
}
