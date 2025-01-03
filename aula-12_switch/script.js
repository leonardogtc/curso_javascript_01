function pedir() {
    
    /** 
     * O prompt sempre devolve uma string. Para user como número
     * tem que ser convertido
     */
    var valor = prompt('Digite um valor de 1 a 4: ')

    switch (Number(valor)) {
        case 1:
            alert('Suco')
            break;
        case 2:
            alert('Água')
            break;
        case 3:
            alert('Sorvete')
            break;
        case 4:
            alert('Chamar Garson')
            break;
        default:
            alert('Somente valores de 1 a 4')
            break;
    }
    
}