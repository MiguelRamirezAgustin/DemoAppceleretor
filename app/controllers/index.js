/*function goventana(e){
    Alloy.createController("ventana").getView().open();
}
$.btn1.addEventListener("click", goventana);*/
$.index.addEventListener('click', function(e){
   console.log(e.source.id);
});


function llamada(e){
   // Titanium.API.info("You clicked the button");
    Alloy.createController('ventana').getView().open();
};

function general(e){
    Alloy.createController('ventanageneral').getView().open();
};
$.index.open();

