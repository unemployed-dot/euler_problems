var divisibile=true;
numero=2520;

while(divisibile=true){
    for(let i=0; i<=20; i++){
        if(numero%i!=0){
            divisibile=false;
            break
        }
        
    }
    numero+=1;
    divisibile=true;
}
