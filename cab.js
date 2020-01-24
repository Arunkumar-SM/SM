function  Amount()
{
	var s=document.getElementById("first").value;
	var e=document.getElementById("last").value;
	var r=e-s;
	var cabs=document.getElementById("taxi")
	for(var  i=0; i<cabs.length;i++)
	{
		if(cabs[i].checked)
		{
			var cost=cabs[i].value;
			break;
		}
	}
	var pay=r*cost;
	document.getElementById("pay").innerHTML=pay;
}

	
	
	
	