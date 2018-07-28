var Cloud = require('ti.cloud');


function listausuario(){
    var tableData = [];
    Cloud.Users.query({
        page:1,
        per_page:50,
            where:{

            }
    }, function (e) {
        if (e.success) {
            alert('Usuarios Activos:\n' +
                'Total: ' + e.users.length);
            for (var i = 0; i < e.users.length; i++) {
                Ti.API.info(JSON.stringify());                    
           
                var row = Ti.UI.createTableViewRow({
                    left:"20",
                    title : e.users[i].first_name + ' ' + e.users[i].last_name,
                    leftImage:'/images/user.png',            
                });
                        
                tableData.push(row);
            }

             $.table.setData(tableData);

        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }

    });
}
listausuario();

$.table.addEventListener('click', function(e){
    $.table.deleteRow(e.index);
});