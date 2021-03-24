function name_check(){

	if(document.getElementById("name").value==""){
		document.getElementById("name1").innerHTML="This field is empty";
	}
	else{
		document.getElementById("name1").innerHTML="";
	}
	if(document.getElementById("lastName").value==""){
		document.getElementById("name2").innerHTML="This field is empty";
	}
	else{
		document.getElementById("name2").innerHTML="";
	}
	var res;

   	var str =document.getElementById("password").value;
   	console.log(str);
   	if(str.length==0)
   		document.getElementById("password1").innerHTML= "Password is empty";
   
   	else if(str.length<8)
   		document.getElementById("password1").innerHTML = "Password is not 8 characters long";

   	else if (!(str.match(/[a-z]/g) && str.match(
        /[A-Z]/g) && str.match(
        /[0-9]/g) && str.match(
       	/[^a-zA-Z\d]/g) ))
 
    	document.getElementById("password1").innerHTML="Password is not correct";
    else
    	document.getElementById("password1").innerHTML="";

    var str1=document.getElementById("password2").value;
    if(!(str==str1)){
    	document.getElementById("password3").innerHTML="Password does not match";
    }
    else{
    	document.getElementById("password3").innerHTML="<br>";
    }
    str=document.getElementById("email").value;
    	if(!str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)){
    		document.getElementById("email1").innerHTML="E mail not in correct format";
    	}
    	else{
    		document.getElementById("email1").innerHTML="";
    	}
    str=document.getElementById("phone").value;
    if(str==""){
    	document.getElementById("phone1").innerHTML="Phone number not entered";
    }
    else if(str.length!=10){
    	document.getElementById("phone1").innerHTML="Length of phone number is not 10";
    }
    else if(str.match(/([^0-9])/gi)){
    	document.getElementById("phone1").innerHTML="Phone number contains non numerical characters";
    }
    else{
    	document.getElementById("phone1").innerHTML="";
    }
    var card = document.getElementById("cardtype");
    if(card.selectedIndex == 0) {
   	document.getElementById("cardtype1").innerHTML="Security Question not selected";
	}
	else{
		document.getElementById("cardtype1").innerHTML="";
	}
	
	str=document.getElementById("answer").value;
	if(str.length<=0){
		document.getElementById("answer1").innerHTML="Security question not answered";
	}
	else{
		document.getElementById("answer1").innerHTML="";
	}
    }

