interface mayHaveProperty<T>{
    property:T;
}

function CountProperty<T,S>(arrOfElements:S[]|T[]){
    let counter = 0;
    arrOfElements.forEach((e)=>{
        if(e?.property){
            counter=+1;
        }
    })
}

class Odd implements mayHaveProperty<T>{
    property:T;

    
}

class Person{
    name:string;
    id:number;
}