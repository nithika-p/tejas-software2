$(document).ready(function(){
  var server_IP="192.168.2.104";

    //--------------------ajax request to get active mobile list begins -------------------------------------------//
          $.ajax({

           url: 'http://'+server_IP+':3000/api/devices',
           type: 'POST',
           crossDomain: true,
           data:{
              "query":{
                  "status": "online" ,// optional
              }
           },
           xhrFields: {
             withCredentials: true
           },

           success: function(data){
             //alert(data.users.length);
             data.devices.forEach(function(element){
               console.log(element._id+" "+element.imsi);
               $("#user-table tbody").append('<tr><td>'+element._id+'</td><td>'+element.imsi+'</td><td>'+element.name+'</td><td><input type="checkbox" class="filled-in" id="'+element._id+'" checked="checked" /><label for="'+element._id+'"></label></td>')
             });
               },
           error: function(jqXHR, exception) { alert(jqXHR.status + "   " + exception); }
             });
    //--------------------ajax request to get active mobile list ends -------------------------------------------//

    //--------------------ajax request to login to ems begins -------------------------------------------//

          $.ajax({

        url: 'http://192.168.233.12/python/framework/ems_session_mgmt.py/ems_recv_n_verify_user_name',
        type: 'POST',
        crossDomain: true,
        data:"username=admin&password=admin",
        xhrFields: {
          withCredentials: true
        },
        success: function(){
                  alert("Logged in successfully");
              },
        error: function(jqXHR, exception) { alert(jqXHR.status + "   " + exception); }
         });
      });

  //--------------------ajax request to login to ems ends -------------------------------------------//


});
