	/* ids
DQuantidade
DNInventario
DNOs
DCodEndereco
DCodPooduto
DDescricao
DDpto
DRua
DPredio
Dnivel
DApto

botoes


*/
$.fn.TamplateDivergencia = function () {
	
	$.fn.HeaderDivergencia();
	$("#Conteudo").html(''+
	'<label class="item item-input">'+
	'	<span class="input-label">Quantidade:</span>'+
	'	<input type="number" placeholder="0" id="DQuantidade" >'+
	'</label >'+
	'</label>'+
'<button id="BtnConfirmarDivergencia" class="button button-full button-positive">Confirmar</button>'+
	'<div class="list">'+
  '<label class="item item-input">'+
    '<span class="input-label">N&#176; Invent&#225;rio:</span>'+
    '<input type="text" placeholder="N&#227;o Informado" id="DNInventario" readonly >'+
  '</label>'+
  '<label class="item item-input">'+
    '<span class="input-label">N&#176; O.S:</span>'+
    '<input type="text" placeholder="N&#227;o Informado" id="DNOs" readonly >'+
  '</label>'+
  '<label class="item item-input ">'+
    '<span class="input-label">Cod Endere&#231;o:</span>'+
    '<input type="text" placeholder="N&#227;o Informado" id="DCodEndereco" readonly >'+
  '</label>'+
  '<label class="item item-input">'+
    '<span class="input-label">Cod Produto:</span>'+
    '<input type="text" placeholder="N&#227;o Informado" id="DCodPooduto" readonly >'+
  '</label>'+
  '<label class="item item-input">'+
    '<input type="text" placeholder="N&#227;o Informado" id="DDescricao" readonly >'+
  '</label>'+
	'</div>'+

	'<div class="row">'+
	  '<div class="col">'+
		'<div class="list">'+
		'<label class="item item-input item-floating-label">'+
		'<span class="input-label">Dpto</span>'+
		'<input type="text" placeholder="Dpto" id="DDpto" readonly >'+
		'</label>'+
		'</div>'+
	'</div>'+
  '<div class="col">'+
  		'<div class="list">'+
		'<label class="item item-input item-floating-label" >'+
		'<span class="input-label">Rua</span>'+
		'<input type="text" placeholder="Rua" id="DRua" readonly>'+
		'</label>'+
		'</div>'+
  '</div>'+
  '<div class="col">'+
  		'<div class="list">'+
		'<label class="item item-input item-floating-label">'+
		'<span class="input-label">Predio</span>'+
		'<input type="text" placeholder="Predio" id="DPredio" readonly >'+
		'</label>'+
		'</div>'+
  '</div>'+
  '</div>'+
  
  '<div class="row">'+
  '<div class="col">'+
  		'<div class="list">'+
		'<label class="item item-input item-floating-label">'+
		'<span class="input-label">Nivel</span>'+
		'<input type="text" placeholder="Nivel" id="Dnivel" readonly >'+
		'</label>'+
		'</div>	'+
  '</div>'+
  '<div class="col">'+
  		'<div class="list">'+
		'<label class="item item-input item-floating-label">'+
		'<span class="input-label">Apto</span>'+
		'<input type="text" placeholder="Apto" id="DApto" readonly >'+
		'</label>'+
		'</div>'+
  '</div>'+
	'</div>'+
	'');
	
};

$.fn.DivergenciaAjax = function (Paramentro="E") {
	
		$.ajax({
        url: "http://192.168.200.2/ionic/index.php",
		type : "POST",
		
        data: {
			Paramentro				: Paramentro,

        },
		timeout: 30000,
		
		success: function(data){
		
		//var obj = jQuery.parseJSON(data);
		
		},
		
		error: function() {
		alert("Error ao execultar requisição ajax");

		}
		});		
	
};

$.fn.HeaderDivergencia = function () {
	
	$("#Header").html('<a id="BtnVoltar" class="button button-icon ion-reply"></a>'+
		'<h1 class="title">Divergencia</h1>'+
		'<a id="BtnDAtualizar" class="button button-icon icon ion-refresh" ></a>');
	
};

$(document).on("click","#BtnInventario",function(){
	
		$("#Btns").hide();
		$.fn.TamplateDivergencia();
	
});

$(document).on("click","#BtnVoltar",function(){
		$.fn.HeaderPadrao();
		$.fn.BotoesPadrao();
});
	
$(document).on("click","#BtnConfirmarDivergencia",function(){
		
			$.fn.DivergenciaAjax();
		
});

$.fn.HeaderPadrao();
$.fn.BotoesPadrao();
