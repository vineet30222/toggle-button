var mode=0;

function fun()
{
	if(mode==0){
	var id_outer=document.getElementById('outer');
	id_outer.style.justifyContent="flex-end";
	id_outer.style.background="black";

	var id_inner=document.getElementById('inner');
	id_inner.style.background="white";

	var id_body=document.getElementsByTagName('body');
	id_body[0].style.background="black";
	id_body[0].style.color="white";
	mode=1;
	}

	else if(mode==1)
	{

		var id_outer=document.getElementById('outer');
		id_outer.style.justifyContent="flex-start";
		id_outer.style.background="white";

		var id_inner=document.getElementById('inner');
		id_inner.style.background="black";

		var id_body=document.getElementsByTagName('body');
		id_body[0].style.background="white";
		id_body[0].style.color="black";
		mode=0;
	}

}

var id1=document.getElementById('outer');
id1.addEventListener('click',fun);                  