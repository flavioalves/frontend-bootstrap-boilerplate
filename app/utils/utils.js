window.utils = {
	
	isUserLogger: function(){
		if($.cookie('app.ppt.api_key')){
			return true;
		}
		return false;
	},

	notification : function(where , message, style) {
		$('.' + where).notify({ message: { text: message }, type : style  } ).show();
	},

	logout: function(){
		
		urlData = window.BASE_URL + 'sessions' ,
		method = 'DELETE';

		$.ajax({ 
			type: method,			
			url : urlData,
			crossDomain : true,

			success : function(form, action) {
				this.notification('center', 'Sua sessão foi encerada com sucesso.', 'success');
			},
			failure : function(form, action) {				
				this.notification('center', 'Erro ao efetuar logout.', 'error');
			},

			error : function(form, action) {				
				this.notification('center', 'Erro ao efetuar logout.', 'error');
			}
		}); 
		$.removeCookie('app.ppt.api_key');
	},

	submitForm : function(event,form, config){
		/* stop form from submitting normally */
		event.preventDefault();
		var formEl = $(form),
		urlData = window.BASE_URL + formEl.attr('action') ,
		formData = formEl.serialize(),
		method = formEl.attr('method');

		$.ajax(_.extend({ 
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			type: method,			
			url : urlData,
			data : formData,
			crossDomain : true,
			dataType: 'json',

			success : function(form, action) {
				alert("SUCESSO!!!");
			},
			failure : function(form, action) {				
				alert("FALHOU!!!");
			}, 
			error: function(form, action){ 
				alert("ERRO!!!");
			},

		}, config));
	},

};