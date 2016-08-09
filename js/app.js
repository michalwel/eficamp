// $(document).foundation();

$(document).ready(function(){
			$(".buttonlog button").click(function() { 
				var haslo= $(".haslo #user_login").val();
				
				if (haslo.length != 0){ 

						sendlog (haslo); 
					}
					else{
						alert("Hasło jest puste");
				}
			});
			// $(".avatarlog").click(function() { 
				
			//	var avatar= $(".avatarlog img").attr("src");
			//	alert (avatar); 
			//});
			$(".avatarlog").click(function() { 
				
				$(".avatarlog img").attr("src" ,"https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-128.png");
			
			});
			function sendlog(haslo){
				$.ajax({
					  type: "post",
					  data: {
					    login: "efi",
					    password: haslo
					  },
					  url: "https://efigence-camp.herokuapp.com/api/login",
					  error: function(response) {
					    console.log(response.responseText);
					    alert("Złe hasło");
					  },
					  success: function(response) {
					    console.log(response);
					  }
				});
			}

});