
   var dl_ps;
   var ul_ps;
   var uldl_dl_ps;
   var uldl_ul_ps;
   var dl_tv;
   var ul_tv;
   var uldl_dl_tv;
   var uldl_ul_tv;
   var dl_md;
   var ul_md;
   var uldl_dl_md;
   var uldl_ul_md;
   var ping_size;
   var location_timeout;
   var test_delay;
   var lte_switch;
   var loc_switch;
   var ping_switch;
   var st_switch;
   var rp_ul_switch;
   var rp_uldl_switch;
   var rp_dl_switch;
   var tp_inf_switch;
   var iperf_switch;
   var rsrp_cb;
   var rsrq_cb;
   var rssnr_cb;
   var pci_cb;
   var cellID_cb;
   var cellTA_cb;
   var cellTAC_cb;
   var mnc_cb;
   var mcc_cb;
   var earfcn_cb;
   var st_type;
   var iperf_type;


    $(document).ready(function(){


             $("#logout").click(function(){

                $.ajax({

              url: 'http://'+server_IP+':3000/auth/logout',
              type: 'GET',
              crossDomain: true,
              xhrFields: {
                withCredentials: true
              },

              success: function(data){
                var obj=JSON.parse(data);
                        if(obj.is_success){location.href="file:///C:/Users/Nithika/Desktop/web-ui-materialize/user-login.html"}
                    },
              error: function(jqXHR) { alert(jqXHR.response); }
                });
              });

      //alert($('#st-switch').prop('checked'));

            $("#ul").click(function(){
                 st_type="UPLINK";
             });
             $("#uldl").click(function(){
                  st_type="BOTH";
              });
              $("#dl").click(function(){
                   st_type="DOWNLINK";
               });

               $("#c").click(function(){
                  iperf_type="c";
              });
              $("#s").click(function(){
                   iperf_type="s";
               });
             $("#cs").click(function(){
                  iperf_type="s";
              });

      $("#ping-size-1").click(function(){
           $("#ping-size-drop span").empty();
           $("#ping-size-drop span").append( "   "+ $("#ping-size-1").text());
           ping_size=document.getElementById("ping-size").value;
           //alert(ping_size);
       });
      $("#ping-size-2").click(function(){
           $("#ping-size-drop span").empty();
            $("#ping-size-drop span").append( "   "+ $("#ping-size-2").text());
            ping_size=String(parseInt(document.getElementById("ping-size").value)*1024);
            //alert(ping_size);
        });
      $("#ping-size-3").click(function(){
             $("#ping-size-drop span").empty();
             $("#ping-size-drop span").append( "   "+ $("#ping-size-3").text());
             ping_size=String(parseInt(document.getElementById("ping-size").value)*1024*1024);
             //alert(ping_size);
         });
     $("#location-timeout-1").click(function(){
          $("#location-timeout-drop span").empty();
           $("#location-timeout-drop span").append( "   "+ $("#location-timeout-1").text());
           location_timeout=String(parseInt(document.getElementById("location-timeout").value)*1000);
           //alert(location_timeout);
       });
     $("#location-timeout-2").click(function(){
            $("#location-timeout-drop span").empty();
            $("#location-timeout-drop span").append( "   "+ $("#location-timeout-2").text());
            location_timeout=String(parseInt(document.getElementById("location-timeout").value)*60*1000);
            //alert(location_timeout);
     });
       $("#test-delay-1").click(function(){
            $("#test-delay-drop span").empty();
             $("#test-delay-drop span").append( "   "+ $("#test-delay-1").text());
             test_delay=String(parseInt(document.getElementById("test-delay").value)*1000);
             //alert(test_delay);
         });
       $("#test-delay-2").click(function(){
              $("#test-delay-drop span").empty();
              $("#test-delay-drop span").append( "   "+ $("#test-delay-2").text());
              test_delay=String(parseInt(document.getElementById("test-delay").value)*60*1000);
              //alert(test_delay);
         });

     $("#dl-ps-1").click(function(){
          $("#dl-ps-drop span").empty();
          $("#dl-ps-drop span").append( "   "+ $("#dl-ps-1").text());
          dl_ps=document.getElementById("st-size-dl").value;
          //alert(dl_ps);
      });
     $("#dl-ps-2").click(function(){
          $("#dl-ps-drop span").empty();
           $("#dl-ps-drop span").append( "   "+ $("#dl-ps-2").text());
           dl_ps=String(parseInt(document.getElementById("st-size-dl").value)*1024);
           //alert(dl_ps);
       });
     $("#dl-ps-3").click(function(){
            $("#dl-ps-drop span").empty();
            $("#dl-ps-drop span").append( "   "+ $("#dl-ps-3").text());
            dl_ps=String(parseInt(document.getElementById("st-size-dl").value)*1024*1024);
          //  alert(dl_ps);
     });

      $("#ul-ps-1").click(function(){
           $("#ul-ps-drop span").empty();
           $("#ul-ps-drop span").append( "   "+ $("#ul-ps-1").text());
           ul_ps=document.getElementById("st-size-ul").value;
           //alert(ul_ps);
       });
      $("#ul-ps-2").click(function(){
           $("#ul-ps-drop span").empty();
            $("#ul-ps-drop span").append( "   "+ $("#ul-ps-2").text());
            ul_ps=String(parseInt(document.getElementById("st-size-ul").value)*1024);
            //alert(ul_ps);
        });
      $("#ul-ps-3").click(function(){
             $("#ul-ps-drop span").empty();
             $("#ul-ps-drop span").append( "   "+ $("#ul-ps-3").text());
             ul_ps=String(parseInt(document.getElementById("st-size-ul").value)*1024*1024);
             //alert(ul_ps);
         });

      $("#uldl-dl-ps-1").click(function(){
           $("#uldl-dl-ps-drop span").empty();
           $("#uldl-dl-ps-drop span").append( "   "+ $("#uldl-dl-ps-1").text());
           uldl_dl_ps=document.getElementById("st-size-uldl-dl").value;
           //alert(uldl_dl_ps);
       });
      $("#uldl-dl-ps-2").click(function(){
           $("#uldl-dl-ps-drop span").empty();
            $("#uldl-dl-ps-drop span").append( "   "+ $("#uldl-dl-ps-2").text());
            uldl_dl_ps=String(parseInt(document.getElementById("st-size-uldl-dl").value)*1024);
            //alert(uldl_dl_ps);
        });
      $("#uldl-dl-ps-3").click(function(){
             $("#dl-ps-drop span").empty();
             $("#dl-ps-drop span").append( "   "+ $("#uldl-dl-ps-3").text());
             uldl_dl_ps=String(parseInt(document.getElementById("st-size-uldl-dl").value)*1024*1024);
             //alert(uldl_dl_ps);
      });

       $("#uldl-ul-ps-1").click(function(){
            $("#uldl-ul-ps-drop span").empty();
            $("#uldl-ul-ps-drop span").append( "   "+ $("#uldl-ul-ps-1").text());
            uldl_ul_ps=document.getElementById("st-size-uldl-ul").value;
            //alert(uldl_ul_ps);
        });
       $("#uldl-ul-ps-2").click(function(){
            $("#uldl-ul-ps-drop span").empty();
             $("#uldl-ul-ps-drop span").append( "   "+ $("#uldl-ul-ps-2").text());
             uldl_ul_ps=String(parseInt(document.getElementById("st-size-uldl-ul").value)*1024);
             //alert(uldl_ul_ps);
       });
       $("#uldl-ul-ps-3").click(function(){
              $("#uldl-ul-ps-drop span").empty();
              $("#uldl-ul-ps-drop span").append( "   "+ $("#uldl-ul-ps-3").text());
              uldl_ul_ps=String(parseInt(document.getElementById("st-size-uldl-ul").value)*1024*1024);
              //alert(uldl_ul_ps);
      });
         $("#ul-tv-1").click(function(){
              $("#ul-tv-drop span").empty();
              $("#ul-tv-drop span").append( "   "+ $("#ul-tv-1").text());
              ul_tv=document.getElementById("st-volume-ul").value;
              //alert(ul_tv);
          });
         $("#ul-tv-2").click(function(){
              $("#ul-tv-drop span").empty();
               $("#ul-tv-drop span").append( "   "+ $("#ul-tv-2").text());
               ul_tv=String(parseInt(document.getElementById("st-volume-ul").value)*1024);
               //alert(ul_tv);
           });
         $("#ul-tv-3").click(function(){
                $("#ul-tv-drop span").empty();
                $("#ul-tv-drop span").append( "   "+ $("#ul-tv-3").text());
                ul_tv=String(parseInt(document.getElementById("st-volume-ul").value)*1024*1024);
                //alert(ul_tv);
            });
         $("#ul-tv-4").click(function(){
               $("#ul-tv-drop span").empty();
               $("#ul-tv-drop span").append( "   "+ $("#ul-tv-4").text());
               ul_tv=String(parseInt(document.getElementById("st-volume-ul").value)*1024*1024*1024);
               //alert(ul_tv);
           });

         $("#dl-tv-1").click(function(){
              $("#dl-tv-drop span").empty();
              $("#dl-tv-drop span").append( "   "+ $("#dl-tv-1").text());
              dl_tv=document.getElementById("st-volume-dl").value;
              //alert(dl_tv);
          });
         $("#dl-tv-2").click(function(){
              $("#dl-tv-drop span").empty();
               $("#dl-tv-drop span").append( "   "+ $("#dl-tv-2").text());
               dl_tv=String(parseInt(document.getElementById("st-volume-dl").value)*1024);
               //alert(dl_tv);
           });
         $("#dl-tv-3").click(function(){
                $("#dl-tv-drop span").empty();
                $("#dl-tv-drop span").append( "   "+ $("#dl-tv-3").text());
                dl_tv=String(parseInt(document.getElementById("st-volume-dl").value)*1024*1024);
                //alert(dl_tv);
            });
         $("#dl-tv-4").click(function(){
               $("#dl-tv-drop span").empty();
               $("#dl-tv-drop span").append( "   "+ $("#dl-tv-4").text());
               dl_tv=String(parseInt(document.getElementById("st-volume-dl").value)*1024*1024*1024);
              // alert(dl_tv);
           });

         $("#uldl-ul-tv-1").click(function(){
              $("#uldl-ul-tv-drop span").empty();
              $("#uldl-ul-tv-drop span").append( "   "+ $("#uldl-ul-tv-1").text());
              uldl_ul_tv=document.getElementById("st-volume-uldl-ul").value;
              //alert(uldl_ul_tv);
          });
         $("#uldl-ul-tv-2").click(function(){
              $("#uldl-ul-tv-drop span").empty();
               $("#uldl-ul-tv-drop span").append( "   "+ $("#uldl-ul-tv-2").text());
               uldl_ul_tv=String(parseInt(document.getElementById("st-volume-uldl-ul").value)*1024);
               //alert(uldl_ul_tv);
           });
         $("#uldl-ul-tv-3").click(function(){
                $("#uldl-ul-tv-drop span").empty();
                $("#uldl-ul-tv-drop span").append( "   "+ $("#uldl-ul-tv-3").text());
                uldl_ul_tv=String(parseInt(document.getElementById("st-volume-uldl-ul").value)*1024*1024);
                //alert(uldl_ul_tv);
            });
         $("#uldl-ul-tv-4").click(function(){
               $("#uldl-ul-tv-drop span").empty();
               $("#uldl-ul-tv-drop span").append( "   "+ $("#uldl-ul-tv-4").text());
               uldl_ul_tv=String(parseInt(document.getElementById("st-volume-uldl-ul").value)*1024*1024*1024);
               //alert(uldl_ul_tv);
           });

         $("#uldl-dl-tv-1").click(function(){
              $("#uldl-dl-tv-drop span").empty();
              $("#uldl-dl-tv-drop span").append( "   "+ $("#uldl-dl-tv-1").text());
              uldl_dl_tv=document.getElementById("st-volume-uldl-dl").value;
            //  alert(uldl_dl_tv);
          });
         $("#uldl-dl-tv-2").click(function(){
              $("#uldl-dl-tv-drop span").empty();
               $("#uldl-dl-tv-drop span").append( "   "+ $("#uldl-dl-tv-2").text());
               uldl_dl_tv=String(parseInt(document.getElementById("st-volume-uldl-dl").value)*1024);
               //alert(uldl_dl_tv);
           });
         $("#uldl-dl-tv-3").click(function(){
                $("#uldl-dl-tv-drop span").empty();
                $("#uldl-dl-tv-drop span").append( "   "+ $("#uldl-dl-tv-3").text());
                uldl_dl_tv=String(parseInt(document.getElementById("st-volume-uldl-dl").value)*1024*1024);
                //alert(uldl_dl_tv);
            });
         $("#uldl-dl-tv-4").click(function(){
               $("#uldl-dl-tv-drop span").empty();
               $("#uldl-dl-tv-drop span").append( "   "+ $("#uldl-dl-tv-4").text());
               uldl_dl_tv=String(parseInt(document.getElementById("st-volume-uldl-dl").value)*1024*1024*1024);
              // alert(uldl_dl_tv);
           });
         $("#ul-md-1").click(function(){
              $("#ul-md-drop span").empty();
              $("#ul-md-drop span").append( "   "+ $("#ul-md-1").text());
              ul_md=document.getElementById("st-duration-ul").value;
              //alert(ul_md);
          });
         $("#ul-md-2").click(function(){
              $("#ul-md-drop span").empty();
               $("#ul-md-drop span").append( "   "+ $("#ul-md-2").text());
               ul_md=String(parseInt(document.getElementById("st-duration-ul").value)*1000);
               //alert(ul_md);
           });
         $("#ul-md-3").click(function(){
                $("#ul-md-drop span").empty();
                $("#ul-md-drop span").append( "   "+ $("#ul-md-3").text());
                ul_md=String(parseInt(document.getElementById("st-duration-ul").value)*60*1000);
                //alert(ul_md);
           });
         $("#dl-md-1").click(function(){
              $("#dl-md-drop span").empty();
              $("#dl-md-drop span").append( "   "+ $("#dl-md-1").text());
              dl_md=document.getElementById("st-duration-dl").value;
              //alert(dl_md);
          });
         $("#dl-md-2").click(function(){
              $("#dl-md-drop span").empty();
               $("#dl-md-drop span").append( "   "+ $("#dl-md-2").text());
               dl_md=String(parseInt(document.getElementById("st-duration-dl").value)*1000);
              // alert(dl_md);
           });
         $("#dl-md-3").click(function(){
                $("#dl-md-drop span").empty();
                $("#dl-md-drop span").append( "   "+ $("#dl-md-3").text());
                dl_md=String(parseInt(document.getElementById("st-duration-dl").value)*60*1000);
                //alert(dl_md);
            });
        $("#uldl-ul-md-1").click(function(){
             $("#uldl-ul-md-drop span").empty();
             $("#uldl-ul-md-drop span").append( "   "+ $("#uldl-ul-md-1").text());
            uldl_ul_md=document.getElementById("st-duration-uldl-ul").value;
             //alert(uldl_ul_md);
         });
        $("#uldl-ul-md-2").click(function(){
             $("#uldl-ul-md-drop span").empty();
              $("#uldl-ul-md-drop span").append( "   "+ $("#uldl-ul-md-2").text());
              uldl_ul_md=String(parseInt(document.getElementById("st-duration-uldl-ul").value)*1000);
              //alert(uldl_ul_md);
          });
        $("#uldl-ul-md-3").click(function(){
               $("#uldl-ul-md-drop span").empty();
               $("#uldl-ul-md-drop span").append( "   "+ $("#uldl-ul-md-3").text());
               uldl_ul_md=String(parseInt(document.getElementById("st-duration-uldl-ul").value)*60*1000);
               //alert(uldl_ul_md);
          });
        $("#uldl-dl-md-1").click(function(){
             $("#uldl-dl-md-drop span").empty();
             $("#uldl-dl-md-drop span").append( "   "+ $("#uldl-dl-md-1").text());
             uldl_dl_md=document.getElementById("st-duration-uldl-dl").value;
             //alert(uldl_dl_md);
         });
        $("#uldl-dl-md-2").click(function(){
             $("#uldl-dl-md-drop span").empty();
              $("#uldl-dl-md-drop span").append( "   "+ $("#uldl-dl-md-2").text());
              uldl_dl_md=String(parseInt(document.getElementById("st-duration-uldl-dl").value)*1000);
              //alert(uldl_dl_md);
          });
        $("#uldl-dl-md-3").click(function(){
               $("#uldl-dl-md-drop span").empty();
               $("#uldl-dl-md-drop span").append( "   "+ $("#uldl-dl-md-3").text());
               uldl_dl_md=String(parseInt(document.getElementById("st-duration-uldl-dl").value)*60*1000);
               //alert(uldl_dl_md);
        });

           //----------------ajax requests start-----------------------------------------------------------------
     $("#start-test-btn").click(function(){
       var server_IP="192.168.2.104";
       var ping_ip=parseInt(document.getElementById("ping-ip").value);
       var ping_count=parseInt(document.getElementById("ping-count").value);
       //alert(ping_count);
       var location_accuracy=parseInt(document.getElementById("location-accuracy").value);
       var ul_threads=parseInt(document.getElementById("st-threads-ul").value);
       var dl_threads=parseInt(document.getElementById("st-threads-dl").value);
       var test_count=parseInt(document.getElementById("test-count").value);
       var uldl_ul_threads=parseInt(document.getElementById("st-threads-uldl-ul").value);
      // alert("uldl_ul_threads : "+uldl_ul_threads);
       var uldl_dl_threads=parseInt(document.getElementById("st-threads-uldl-dl").value);
       //alert("uldl_dl_threads : "+uldl_dl_threads);
       if($('#ping-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){ping_switch=false;}
       else {ping_switch=true;}//rgb(138, 206, 236)
       if($('#loc-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){loc_switch=false;}
       else {loc_switch=true;}//rgb(138, 206, 236)
       if($('#st-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){st_switch=false;}
       else {st_switch=true;}//rgb(138, 206, 236)
       if($('#lte-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){lte_switch=false;}
       else {lte_switch=true;}//rgb(138, 206, 236)
       if($('#rp-ul-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){rp_ul_switch=false;}
       else {rp_ul_switch=true;}//rgb(138, 206, 236)
       if($('#rp-uldl-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){rp_uldl_switch=false;}
       else {rp_uldl_switch=true;}//rgb(138, 206, 236)
       if($('#rp-dl-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){rp_dl_switch=false;}
       else {rp_dl_switch=true;}//rgb(138, 206, 236)
       if($('#iperf-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){iperf_switch=false;}
       else {iperf_switch=true;}//rgb(138, 206, 236)
       if($('#tp-inf-switch label .lever').css('background-color')=="rgba(0, 0, 0, 0.38)"){tp_inf_switch=false;}
       else {tp_inf_switch=true;}//rgb(138, 206, 236)
       //alert(lte_switch+" "+loc_switch+" "+st_switch+" "+ping_switch+" "+rp_ul_switch+" "+rp_uldl_switch+" "+rp_dl_switch+" "+iperf_switch+" "+tp_inf_switch);

      if( $('#RSRP:checked').css('background-color')){rsrp_cb=true;}
      else{rsrp_cb=false;}
      if( $('#RSRQ:checked').css('background-color')){rsrq_cb=true;}
      else{rsrq_cb=false;}
      if( $('#RSSNR:checked').css('background-color')){rssnr_cb=true;}
      else{rssnr_cb=false;}
      if( $('#Cell-PCI:checked').css('background-color')){pci_cb=true;}
      else{pci_cb=false;}
      if( $('#Cell-ID:checked').css('background-color')){cellID_cb=true;}
      else{cellID_cb=false;}
      if( $('#Cell-TA:checked').css('background-color')){cellTA_cb=true;}
      else{cellTA_cb=false;}
      if( $('#Cell-TAC:checked').css('background-color')){cellTAC_cb=true;}
      else{cellTAC_cb=false;}
      if( $('#MNC:checked').css('background-color')){mnc_cb=true;}
      else{mnc_cb=false;}
      if( $('#MCC:checked').css('background-color')){mcc_cb=true;}
      else{mcc_cb=false;}
      if( $('#EARFCN:checked').css('background-color')){earfcn_cb=true;}
      else{earfcn_cb=false;}
    //  alert(rsrp_cb+" "+rsrq_cb+" "+rssnr_cb+" "+cellID_cb+" "+cellTA_cb+" "+cellTAC_cb+" "+mnc_cb+" "+mcc_cb+" "+pci_cb+" "+earfcn_cb);
    var rand;

    if(st_type=="UPLINK"){rand=rp_ul_switch;}
    if(st_type=="DOWNLINK"){rand=rp_dl_switch;}
    if(st_type=="BOTH"){
      rand=rp_uldl_switch;
      ul_threads=uldl_ul_threads;
      ul_ps=uldl_ul_ps;
      ul_tv=uldl_ul_tv;
      ul_md=uldl_ul_md;
      dl_threads=uldl_dl_threads;
      dl_ps=uldl_dl_ps;
      dl_tv=uldl_dl_tv;
      dl_md=uldl_dl_md;
    }
    var args;
    var c_args=document.getElementById("c-args").value;
    var s_args=document.getElementById("s-args").value;
    var c_sc_args=document.getElementById("sc-c-args").value;
    var s_sc_args=document.getElementById("sc-s-args").value;
    if(iperf_type=="c"){args=c_args;}
    //if(st_type=="s"){args=s_args;}
    if(st_type=="s"){args=s_sc_args;}

      alert("type "+iperf_type+" args : "+args);


        $.ajax({

         url: 'http://'+server_IP+':3000/api/test/newTest',
         type: 'POST',
         crossDomain: true,
         data:{
           "device_id":"4",
           "type":"drive-test",
           "ping_params":{
               "perform":ping_switch,
               "IP":ping_ip,
               "count":ping_count,
               "size":parseInt(ping_size)
             },
             "location_params":{
               "perform":loc_switch,
               "accuracy":location_accuracy,
               "timeout":parseInt(location_timeout)
             },
             "lte_params":{
               "perform":lte_switch,
               "RSRP":rsrp_cb,
               "RSRQ":rsrq_cb,
               "RSSNR":rssnr_cb,
               "PCI":pci_cb,
               "CellID":cellID_cb,
               "CellTA":cellTA_cb,
               "MNC":mnc_cb,
               "MCC":mcc_cb,
               "CellTAC":cellTAC_cb,
               "EARFCN":earfcn_cb
             },
             "speedtest_params":{
               "perform":st_switch,
               "type":st_type,
               "granularity":1000,
               "random":rand,
               "threadsUL":ul_threads,
               "packetUL":parseInt(ul_ps),
               "maxDurUL":parseInt(ul_md),
               "maxVolUL":parseInt(ul_tv),
               "threadsDL":dl_threads,
               "packetDL":parseInt(dl_ps),
               "maxDurDL":parseInt(dl_md),
               "maxVolDL":parseInt(dl_tv)
             },
             "iperf_params":{
               "perform":iperf_switch,
               "type": iperf_type,
               "argument":args,
               "client":c_sc_args

             },
             "test_params":{
               "infinite":tp_inf_switch,
               "count":parseInt(test_count),
               "delay":parseInt(test_delay)
             }


         },
         xhrFields: {
           withCredentials: true
         },

         success: function(data){
           alert("success");
               },
         error: function(jqXHR, exception) { alert(jqXHR.status + "   " + exception); }
           });

        });

    });
