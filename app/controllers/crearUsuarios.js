var Cloud = require('ti.cloud');

function listaUsuario(e){
    Alloy.createController('usuarios').getView().open();
};



function usuarioNuevo(){

if($.txfUsuario.value== "" || $.txfNombre.value== "" || $.txfApellidos.value== "" || $.txfPassword.value== "" || $.txfPasswordconfirmacion.value== ""){
         alert('Verifica que los campos no' + '\n' + 'se encuentren vacios');
        }else{
            Cloud.Users.create({
                email: $.txfUsuario.value,
                first_name: $.txfNombre.value,
                last_name: $.txfApellidos.value,
                password: $.txfPassword.value,
                password_confirmation: $.txfPasswordconfirmacion.value
        }, function (e) {
            if (e.success) {
            var user = e.users[0];
            alert('Usuario Correcto:\n' +
                    'id: ' + user.id + '\n' +
                    'sessionId: ' + Cloud.sessionId + '\n' +
                    'Nombre: ' + user.first_name + '\n' +
                    'Apellidos: ' + user.last_name);
                    $.txfUsuario.value="";
                    $.txfNombre.value="";
                    $.txfApellidos.value="";
                    $.txfPassword.value="";
                    $.txfPasswordconfirmacion.value="";
              } else {
                 alert('Error:\n' +
                   ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
   
}
