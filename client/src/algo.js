const categories= ["1-HC","2-C","3-B","4-A","5-PREMIUM"];
const ponderation=[-1,-0.5,-0.1,-0.05,0,0.05,0.1];
let indiceDeCalcul = 0;
let memoryDeCalcul = 0;
let stockageDeCalcul = 0;



const indice =(i)=>{

if( i>0 && i<=50000){
    
    return indiceDeCalcul = 40;
}else if(i<=100000){
    
   return  indiceDeCalcul = 44;
}else{
    return indiceDeCalcul = 49;
}
}

const memory = (m) => {
    if(m ===1){
        return memoryDeCalcul = 30
    }else if (m===2){
        return memoryDeCalcul = 40
    }else{
        return memoryDeCalcul = 54
    }
}

const stockage = (s) =>{
    if (s === 16){
        return stockageDeCalcul = 31
    } else if (s === 32){
        return stockageDeCalcul = 45
    } else {
        return stockageDeCalcul = 66
    }
}

const calculatrice = () =>{
    let indiceTotal = indiceDeCalcul+memoryDeCalcul+stockageDeCalcul
    return indiceTotal
}

const category = (indiceTotal)=>{
   if (indiceTotal < 90){
   return categories[0]
   }else if (indiceTotal <165){
    return categories[1]
   }else if( indiceTotal<255){
    return categories[3]
   }else{
    return categories[4]
   }
}


