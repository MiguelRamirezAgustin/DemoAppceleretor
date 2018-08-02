var Cloud = require('ti.cloud');
var image1 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'imagen.jpg');
var loader = Alloy.Globals.cargarLoader;




var viewImage= Ti.UI.createImageView({
       width:"40%",
       height:"40%",
       top:10,
       borderColor:"write",
       borderRadius:15
});

 $.inicio.add(viewImage);

 function tomaFoto(e){
   if(!Ti.Media.hasCameraPermissions()){
     Ti.Media.requestCameraPermissions(function(e){
       if(e.success){
         camaraFoto();
       }else{
         Ti.API.error("No hay permiso de la camara");
       }
     });
   }else{
     camaraFoto();
   }
 }



 function camaraFoto(){
     Ti.Media.showCamera({
         saveToPhotoGallery:true,
         allowEditing:false,
         autohide:false,

         success:function(event){
           loader.open();
           imageViewImagen.imge=event.media;
           var imageSave=Ti.Filesystem.getFile(Ti.Filesystem.applicationDatadirectoty, 'image.jpg');
          imageSave.write(imageViewImagen.imge);

           Cloud.Photos.create({
              photo:imageSave
           },function(e){
              if(e.success){
                var photo=e.photo[0];
                Ti.App.Properties.setString('photoID', photo.id);
                loader.close();
                alert("la imagen es corecto");
              }else{
                loader.close();
                alert('Error:\n' +
              ((e.error && e.message) || JSON.stringify(e)));
              }
           });
         },

     });
 }

