export default function generarListaIdsEstrella(numero: number) {
    
    const listaIdEstrella = [];
    
    for (let i = 1; i <= numero; i++) {
        listaIdEstrella[i] = i;
    }

    return listaIdEstrella;
}