fruta = prompt('Entre com uma fruta');
fruta = parseInt(f);
fruta = "laranja";

if ( fruta == "laranja" ) {
    console.log("R$3,50");
}
else {
    if ( fruta == "limão" ) {
        console.log("R$3,00");
    }
    else {
        if ( fruta == "acerola" ) {
            console.log("R$3,50" );
        }
        else {
            if ( fruta== "manga" ) {
                console.log("R$4,00");
            }
            else {
                if ( fruta == "melancia" ) {
                    console.log("R$4,00" );
                }
                else {
                    if ( fruta == "morango" ) {
                        console.log("R$5,00" );
                    }
                    else {
                        if ( fruta == "maracuja" ) {
                            console.log("R$4,50" );
                        }
                        else { 
                            if ( fruta == "açai" ) {
                                console.log("R$6,00");
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log("Fim do Programa");