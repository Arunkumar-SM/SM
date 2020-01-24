  function res()
  {
  var m=document.getElementById("name").value;
  console.log(m);
  var f=document.getElementById("age").value;
  console.log(f);
  var o=document.getElementById("email").value;
  console.log(o);
  var s=document.getElementById("password").value;
  console.log(s);
    var g=document.getElementsByName("gender");

  for(var i=0;i<g.length;i++)
  {
	  if(g[i].checked)
	  {
		  var val=g[i].value;
		  break;
	  }
	  
  
  }
   console.log(val);
  var c=document.getElementsByName("color");

  for(var i=0;i<c.length;i++)
  {
	  if(g[i].checked)
	  {
		  var col=c[i].value;
		  break;
	  }
	  
  
  
  }
   console.log(col);
  
 
  }
  