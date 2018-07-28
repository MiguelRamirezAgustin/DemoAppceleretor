var Cloud=require('ti.cloud');

function cambiarPassword(){
    Cloud.Users.requestResetPassword({
        email: $.txfContraseña.value
    }, function(e){
       if(e.success){
           alert('Success: Reset Request Sent');
       }else{
           alert('Error:\n' +
        ((e.error && e.message) || JSON.stringify(e)));
       }
    });
}
