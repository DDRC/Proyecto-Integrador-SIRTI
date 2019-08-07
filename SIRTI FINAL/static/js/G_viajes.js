function Dts_viajes(coop,destino,fecha,hora,Nunidad,Nanden,VBoleto,capacidad){
this.coop=coop;
this.destino=destino;
this.fecha=fecha;
this.hora=hora;
this.Nunidad=Nunidad;
this.Nanden=Nanden;
this.VBoleto=VBoleto;
this.capacidad=capacidad;

}

var viajes=[];
function Guardar(){
    var cop=document.getElementById("nombre").value;
    var des=document.getElementById("destino").value;
    var date=document.getElementById("fecha").value;
    var time=document.getElementById("hora").value;
    var cap=document.getElementById("capacidad").value;
    var unit=document.getElementById("unidad").value;
    var and=document.getElementById("anden").value;
    var valB=document.getElementById("boleto").value;
    if(document.getElementById("nombre").value===""||document.getElementById("destino").value===""||document.getElementById("fecha").value===""||document.getElementById("hora").value===""||document.getElementById("capacidad").value===""||document.getElementById("unidad").value===""||document.getElementById("anden").value===""||document.getElementById("boleto").value===""){
        alert("Ingrese todos los campos pedidos");
    }else{
    viajes.push(new Dts_viajes(cop,des,date,time,unit,and,valB,cap));
    alert("Viaje creado");
    localStorage.setItem("n_viajes",JSON.stringify(viajes));
    document.getElementById("nombre").value="";
    document.getElementById("destino").value="";
    document.getElementById("fecha").value="";
    document.getElementById("hora").value="";
    document.getElementById("capacidad").value="";
    document.getElementById("unidad").value="";
    document.getElementById("anden").value="";
    document.getElementById("boleto").value="";
    document.getElementById("nombre").focus();
    }
}
function Cancelar(){
    window.open(location.pathname+"../../index.html","_top");
}
//utilisisimo...!!!!!!
//var str = h.replace(/[":,\{\}\[\]]/g, ' '); 
//str.split("   ")
//window.open(location.pathname+"../../index.html",self);