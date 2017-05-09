  $(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = $(this).data('include') + '.html';
      $(this).load(file);
    });

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
    url: 'http://localhost:8080/user',
    data: JSON.stringify ({firstName:fname,lastName:lname,username:usrname,password:password,address:address,email:email,contactNumber:contactNo,role:{id:'2',name:'admin'} }),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
		});    
  	});
  	
	$("#goBack").click(function(){
	window.history.back();
	});

	$("#login").click(function(){
	window.location.href = "admin-dashboard.html"; 
	var username = document.getElementById('username').value;   
    var password = document.getElementById('password').value; 
    return false;   
/*<!-- $.ajax({
     type: 'GET',
     url: 'http://localhost:8080/user',
     contentType: "application/json",
     dataType: 'json' ,   
     data: JSON.stringify ({username:usrname,password:password }),
     success: function(data) { 
     window.location.href = "admin-dashboard.html"; 
     }
     	});  -->*/ 
  });	
$("#createUserNode").click(function(){ 
  var userNode = document.getElementById('userNode').value;    
    $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/usernode',
    data: JSON.stringify ({name:userNode}),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
    });    
    });  
$("#createServiceNode").click(function(){ 
  var serviceNode = document.getElementById('serviceNode').value;    
    $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/servicenode',
    data: JSON.stringify ({name:serviceNode}),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
    });    
    }); 

  });