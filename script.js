
    function adminClusters()
    { 
      var session_usr = localStorage.getItem("sessionUsr");
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/adminclusters/"+session_usr, 
        type: "GET",  
     success: function(data) { 
        $('#clusters').html('');
        var trHTML = "<table class='table table-bordered'><thead><tr><th>Select</th><th>Name</th><th>Area id</th><th>Admin</th><th>Created on</th></tr></thead>";
        for(i = 0; i < data.clusterList.length; i++){
          var dateCreatedadmin = new Date(data.clusterList[i].dateCreated);
          trHTML += '<tr><td><input type="button" value="Edit" onclick="editForm(\''+data.clusterList[i].id+'\');"></input></td><td>' + data.clusterList[i].name + '</td><td>'+ data.clusterList[i].area + '</td><td>'+data.clusterList[i].admin.firstName +'</td><td>'+dateCreatedadmin +'</td></tr>';
        }
        trHTML+="</table>";
        $('#clusters').append(trHTML);
     },
        contentType: "application/json",
        dataType: "json" 
      });        
      var optionArea = "<option value=0>Select area</option>";
      $('#optionArea').html('');
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/area", 
        type: "GET",   
     success: function(data) { 
        for(i = 0; i < data.areas.length; i++){
         optionArea += '<option value='+data.areas[i].id+'>'+data.areas[i].name+'</option>';
        }
        $('#optionArea').append(optionArea);
     },
        contentType: "application/json",
        dataType: "json" 
      });          
    }
    function editForm(event){
      $('#clusters').html('');
      document.getElementById('saveCluster').style.display = "inline";
      document.getElementById('createCluster').style.display = "none";
      document.getElementById('clusterDetailForm').style.display = "inline";
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/cluster/"+event, 
        type: "GET",   
     success: function(data) { 
      document.getElementById('clustername').value = data.cluster.name;
      document.getElementById('area').value = data.cluster.address;
      document.getElementById('admin').value = data.cluster.admin.username;
      var dateCreatedadmin = new Date(data.cluster.dateCreated);
      document.getElementById('createdOn').value = data.cluster.dateCreated;
     },
        contentType: "application/json",
        dataType: "json" 
      });        
    }
    function deleteServiceNode(event){
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/servicenode/"+event, 
        type: "DELETE",   
     success: function(data) {
        },
        contentType: "application/json",
        dataType: "json" 
      });   
      }
    function deleteUserNode(event){
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/role/"+event, 
        type: "DELETE",   
     success: function(data) {
        },
        contentType: "application/json",
        dataType: "json" 
      });   
      }  
    function deleteCluster(event){
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/cluster/"+event, 
        type: "DELETE",   
     success: function(data) {
        },
        contentType: "application/json",
        dataType: "json" 
      });   
      }          
    function clusterService(){
      var optionClusterName = "<option value=0>Select cluster name</option>";
      var optionServiceNodeName = "<option value=0>Select service node</option>";
      var optionUserNodeName = "<option value=0>Select user node</option>";
      $('#optionClusterName').html('');
      $('#optionServiceNodeName').html('');
      $('#optionSenderUserNodeName').html('');
      $('#optionReceiverUserNodeName').html('');
      var session_usr = localStorage.getItem("sessionUsr");
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/adminclusters/"+session_usr, 
        type: "GET",   
     success: function(data) { 
        for(i = 0; i < data.clusterList.length; i++){
         optionClusterName += '<option value='+data.clusterList[i].id+'>'+data.clusterList[i].name+'</option>';
        }
        $('#optionClusterName').append(optionClusterName);
     },
        contentType: "application/json",
        dataType: "json" 
      });  
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/servicenode/"+session_usr, 
        type: "GET",   
     success: function(data) { 
        for(i = 0; i < data.serviceNodeList.length; i++){
         optionServiceNodeName += '<option value='+data.serviceNodeList[i].id+'>'+data.serviceNodeList[i].name+'</option>';
        }
        $('#optionServiceNodeName').append(optionServiceNodeName);
     },
        contentType: "application/json",
        dataType: "json" 
      }); 
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/createdbyrole/"+session_usr, 
        type: "GET",   
     success: function(data) { 
        for(i = 0; i < data.roles.length; i++){
         optionUserNodeName += '<option value='+data.roles[i].id+'>'+data.roles[i].name+'</option>';
        }
        $('#optionSenderUserNodeName').append(optionUserNodeName);
        $('#optionReceiverUserNodeName').append(optionUserNodeName);
     },
        contentType: "application/json",
        dataType: "json" 
      });               
    }        
    function clusterUser()
    {
      var optionClusterName = "<option value=0>Select cluster name</option>";
      var optionUserNodeName = "<option value=0>Select user node</option>";
      $('#optionClusterName').html('');
      $('#optionUserNodeName').html('');
      var session_usr = localStorage.getItem("sessionUsr");
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/adminclusters/"+session_usr, 
        type: "GET",   
     success: function(data) { 
        for(i = 0; i < data.clusterList.length; i++){
         optionClusterName += '<option value='+data.clusterList[i].id+'>'+data.clusterList[i].name+'</option>';
        }
        $('#optionClusterName').append(optionClusterName);
     },
        contentType: "application/json",
        dataType: "json" 
      });  
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/createdbyrole/"+session_usr, 
        type: "GET",   
     success: function(data) { 
        for(i = 0; i < data.roles.length; i++){
         optionUserNodeName += '<option value='+data.roles[i].id+'>'+data.roles[i].name+'</option>';
        }
        $('#optionUserNodeName').append(optionUserNodeName);
     },
        contentType: "application/json",
        dataType: "json" 
      });               
    }       
    $(document).ready(function(){
    $("#createAdmin").click(function(){
	   var usrname = document.getElementById('usrname').value;  
	   var fname = document.getElementById('fname').value;  
	   var lname = document.getElementById('lname').value;  
	   var address = document.getElementById('address').value;  
  	 var email = document.getElementById('email').value;  
	   var contactNo = document.getElementById('contactNo').value;  
     var password = document.getElementById('password').value;    
    $.ajax({
    type: 'POST',
    url: 'http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/user',
    data: JSON.stringify ({firstName:fname,lastName:lname,username:usrname,password:password,address:address,email:email,contactNumber:contactNo,role:{id:'2',name:'admin'} }),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
		});    
  	});

    $("#createCluster").click(function(){
    var  name = document.getElementById('clustername').value      ;
    var  address = document.getElementById('area').value          ;
    var  username = document.getElementById('admin').value  ; 
    $.ajax({
    type: 'POST',
    url: 'http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/cluster',
    data: JSON.stringify ({name:name,address:address,admin:{username:username} }),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
    });    
    });
    $("#saveCluster").click(function(){
    var  name = document.getElementById('clustername').value      ;
    var  address = document.getElementById('area').value          ;
    var  username = document.getElementById('moderator').value  ; 
    $.ajax({
    type: 'PUT',
    url: 'http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/cluster',
    data: JSON.stringify ({name:name,address:address,admin:{username:username}}),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
    });    
    });    
  
  
	$("#goBack").click(function(){
	window.history.back();
	});

	$("#login").click(function(event){
	   var username = document.getElementById('username').value;   
    var password = document.getElementById('password').value; 
     $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/login", 
        type: "POST",
        data: JSON.stringify({username:username,password:password}),   
     success: function(response) { 
      if (response.code == "202")
      {localStorage.setItem("sessionUsr", response.user.id);
     window.location.href = "clustermgmt.html";}
     },
        contentType: "application/json",
        dataType: "json" 
     	}); 
     event.preventDefault();
  });	

$("#clusterList").click(function(event){
      var session_usr = localStorage.getItem("sessionUsr");
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/adminclusters/"+session_usr, 
        type: "GET",   
     success: function(data) { 
      $('#clusters').html('');
        var trHTML = "<table class='table table-bordered'><thead><tr><th>Select</th><th>Name</th><th>Area id</th><th>Admin</th><th>Created on</th></tr></thead>";
        for(i = 0; i < data.clusterList.length; i++){
          var dateCreatedadmin = new Date(data.clusterList[i].dateCreated);
          trHTML += '<tr><td><input type="button" value="Edit" onclick="editForm(\''+data.clusterList[i].id+'\');"></input></td><td>' + data.clusterList[i].name + '</td><td>'+ data.clusterList[i].area + '</td><td>'+data.clusterList[i].admin.firstName +'</td><td>'+dateCreatedadmin +'</td></tr>';
        }
        trHTML+="</table>";
        $('#clusters').append(trHTML);
     },
        contentType: "application/json",
        dataType: "json" 
      }); 
    document.getElementById('clusterDetailForm').style.display = 'none';
     event.preventDefault();

  }); 
$("#delCluster").click(function(event){
  var session_usr = localStorage.getItem("sessionUsr");
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/adminclusters/"+session_usr, 
        type: "GET", 
     success: function(data) { 
      $('#clusters').html('');
        var trHTML = "<table class='table table-bordered'><thead><tr><th width='5%'>Select</th><th>Name</th></tr></thead>";
        for(i = 0; i < data.clusterList.length; i++){
          trHTML += '<tr><td width="5%"><input type="button" value="Delete" onclick="deleteCluster(\''+data.clusterList[i].id+'\');"></input></td><td>'+data.clusterList[i].name+'</td></tr>';
        }
        trHTML+="</table>";
        $('#clusters').append(trHTML);
     },
        contentType: "application/json",
        dataType: "json" 
      }); 
     document.getElementById('clusterDetailForm').style.display = 'none';   
     event.preventDefault();
  }); 

$("#createClusterForm").click(function(event){
  $('#clusters').html('');
  document.getElementById('clusterDetailForm').style.display = 'inline';
  event.preventDefault();
  }); 
$("#userNode").click(function(event){
     document.getElementById('userNodeForm').style.display = 'inline';
     document.getElementById('userForm').style.display = 'none';
     $("#users").html('');     
     event.preventDefault();
  }); 
$("#createUserNode").click(function(){ 
  var session_usr = localStorage.getItem("sessionUsr");
  var userNode = document.getElementById('userNodeName').value;    
    $.ajax({
    type: 'POST',
    url: 'http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/role',
    data: JSON.stringify ({name:userNode,createdBy:{id:session_usr}}),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
    });    
    event.preventDefault(); 
    });  
$("#delUserNode").click(function(event){
  var session_usr = localStorage.getItem("sessionUsr");
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/createdbyrole/"+session_usr, 
        type: "GET", 
     success: function(data) { 
      $('#users').html('');
        var trHTML = "<table class='table table-bordered'><thead><tr><th width='5%'>Select</th><th>Name</th></tr></thead>";
        for(i = 0; i < data.roles.length; i++){
          trHTML += '<tr><td width="5%"><input type="button" value="Delete" onclick="deleteUserNode(\''+data.roles[i].id+'\');"></input></td><td>'+data.roles[i].name+'</td></tr>';
        }
        trHTML+="</table>";
        $('#users').append(trHTML);
     },
        contentType: "application/json",
        dataType: "json" 
      }); 
     document.getElementById('userNodeForm').style.display = 'none';
     document.getElementById('userForm').style.display = 'none';
     event.preventDefault();
  }); 
$("#user").click(function(){ 
  document.getElementById('userNodeForm').style.display = 'none';
  $('#users').html('');
  document.getElementById('userForm').style.display = 'inline';
    }); 
$("#serviceNode").click(function(event){
     $('#services').html('');
     document.getElementById('serviceNodeForm').style.display = 'inline';
     document.getElementById('serviceForm').style.display = 'none';
     event.preventDefault();

  }); 
$("#createServiceNode").click(function(){ 
  var serviceNode = document.getElementById('serviceNodeName').value;    
  var session_usr = localStorage.getItem("sessionUsr");
    $.ajax({
    type: 'POST',
    url: 'http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/servicenode',
    data: JSON.stringify ({name:serviceNode,createdBy:{id:session_usr}}),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
    });   
    event.preventDefault(); 
    }); 
$("#service").click(function(){ 
   $('#services').html('');
  document.getElementById('serviceNodeForm').style.display = 'none';
  document.getElementById('serviceForm').style.display = 'inline';
  event.preventDefault();
    }); 
$("#delServiceNode").click(function(event){
      var session_usr = localStorage.getItem("sessionUsr");
        $.ajax({
        url: "http://custom-env.jjkdyjrpmq.us-east-1.elasticbeanstalk.com/servicenode/"+session_usr, 
        type: "GET",   
     success: function(data) { 
      $('#services').html('');
        var trHTML = "<table class='table table-bordered'><thead><tr><th width='5%'>Select</th><th>Name</th></tr></thead>";
        for(i = 0; i < data.serviceNodeList.length; i++){
          trHTML += '<tr><td width="5%"><input type="button" value="Delete" onclick="deleteServiceNode(\''+data.serviceNodeList[i].id+'\');"></input></td><td>'+data.serviceNodeList[i].name+'</td></tr>';
        }
        trHTML+="</table>";
        $('#services').append(trHTML);
     },
        contentType: "application/json",
        dataType: "json" 
      }); 
     document.getElementById('serviceNodeForm').style.display = 'none';
     document.getElementById('serviceForm').style.display = 'none';
     event.preventDefault();
  }); 
  });