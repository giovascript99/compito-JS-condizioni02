// UTILIZZO IF/ELSE IF/ELSE

// let temperature = prompt('Inserire temperatura');

// if(temperature < 20 && temperature >=0){
//     console.log('non ci sono piu’ le mezze stagioni');

// }else if(temperature >= 30){
//     console.log('lu mare, lu sole, lu ientu');

// }else if(temperature < 30 && temperature >= 20){
//     console.log('mi dia una peroni sudata');

// }else if(temperature < 0 && temperature >= -10){
//     console.log('non e’ tanto il freddo quanto l’umidità');

// }else if(temperature < -10){
//     console.log('copriti…ancora ti raffreddi');

// }



// UTILIZZO SWITCH

let temperature = prompt('Inserire tempratura');

switch(true){
    case temperature < 20 && temperature >=0:
    console.log('non ci sono piu’ le mezze stagioni');
    break;
    
    case temperature >= 30:
    console.log('lu mare, lu sole, lu ientu');
    break;
    
    case temperature < 30 && temperature >= 20:
    console.log('mi dia una peroni sudata');
    break;
    
    case temperature < 0 && temperature >= -10:
    console.log('non e’ tanto il freddo quanto l’umidità');
    break;
    
    case temperature < -10:
    console.log('copriti…ancora ti raffreddi');
    break;
    
}