var dateFormat = require('dateformat');

function fechaFutura(fecha, dias) {

    var i = 0, noHabiles = 0;

    fecha.mes = fecha.mes - 1;//el mes empieza en 0
    
    var diasAcumulados=0;
    
        
    var fechaInicial = new Date(fecha.anio, fecha.mes, fecha.dia);
    var rFecha=new Date(fecha.anio, fecha.mes, fecha.dia);
    var fPrimeraVez=true;

    while ((dias-diasAcumulados)!=0) {
        
        if(fPrimeraVez){
            rFecha.setDate(rFecha.getDate() + 0);
            fPrimeraVez=false;
        }else{
            rFecha.setDate(rFecha.getDate() + 1);
        }
        //console.log("fecha:" +diasAcumulados+ "---"+rFecha)
        var dia = rFecha.getDay();
        if (dia != 6 && dia != 0) {// diferentes de sabado o domingo
            diasAcumulados++;
        }
    }

    return rFecha;
};


var fecha = { anio: 2020, mes: 08, dia: 19 };
var dias = 34;
var fechaResultado=fechaFutura(fecha,dias);
console.log("FECHA::"+dateFormat(fechaResultado,"dddd d mmmm yyyy"));


