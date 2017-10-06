
function moverImagenes(){
	document.getElementById('busqueda').style.display="none";
	document.getElementById('main').style.display="none";
	var buscar=document.getElementById('buscar');
	var login=document.getElementById('login');
	var logo=document.getElementById('logoPrin');

	logo.onmouseover =function(){
		buscar.style.marginLeft = '42.5%';
		buscar.style.transition = "all 1s";
		login.style.marginLeft = '51.5%';
		login.style.transition = "all 1s";

	}
	logo.onmouseout =function(){
		buscar.style.marginLeft = '47%';
		login.style.marginLeft = '47%';
	}

	buscar.onmouseover =function(){
		buscar.style.marginLeft = '42.5%';
	}
	buscar.onmouseout =function(){
		buscar.style.marginLeft = '47%';
	}
	login.onmouseover =function(){
		login.style.marginLeft = '51.5%';
	}
	login.onmouseout =function(){
		login.style.marginLeft = '47%';
	}
	logo.addEventListener("click",ocultar,null);
	buscar.addEventListener("click",search,null);
	login.addEventListener("click",loguear,null);
}
	function ocultar(){
		$('#main').hide(200); 
		$('#busqueda').hide(200); 
	}	
	function search(){
		
		$('#busqueda').show(200); 
		$('#main').hide(200); 
	}	
	function loguear(){
		$('#main').show(200); 
		$('#busqueda').hide(200); 
	}	

window.addEventListener("load", moverImagenes, null);