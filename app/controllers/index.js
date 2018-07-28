var Cloud = require('ti.cloud');


$.index.addEventListener('click', function(e){
   console.log(e.source.id);
});


function nuevoUsuario(e){
    Alloy.createController('crearUsuarios').getView().open();
};


function password(e){
     Alloy.createController('cambiarPassword').getView().open();
};



var m=0;
function loginUsuario(){

    $.textusuario.setBorderColor("white");
    $.textpassword.borderColor = "white";
    if($.textusuario.value == "" || $.textpassword.value==""){
         alert("Vefirique que los campos no se encuentren vacios");
    }else{
        Cloud.Users.login({
            login:$.textusuario.value,
            password:$.textpassword.value
        }, function(e){
            if(e.success){
                Alloy.createController('inicio').getView().open();
               
            }else{
                alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
                m = m + 1;
                if(m >=3){
                    $.textusuario.style.setBorderColor=("red");
                    $.textpassword.style.setBorderColor=("red");
                }
            }
        });
    }  
}

$.index.open();