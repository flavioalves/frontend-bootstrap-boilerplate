/*
 * Handle Login
 */
window.LoginFormView = Backbone.View.extend({
	
	render : function(){
		$('#signin-modal').modal({show : false});
	},
	
	events : {
		'click .submit-login-window' : 'doLogin',	
	},

	toggleModal: function(){
		$('#signin-modal').modal('toggle');
		$('#login-error-msg').hide();
	},
	
	doLogin : function(){

		var handleErrorInLoginFormWindow = {
			success : function(form, action, response) {
    			$.cookie('app.ppt.api_key', form.data.api_key);
    			window.location.reload(); 
			},

			failure : function(form, action) {
				$('#login-error-msg').show();
				
			},
			error :  function(form, action){
				$('#login-error-msg').show();
			}
		};

		var view = this;
		$("#login-form-window").submit(function(event){
			utils.submitForm(event, this, handleErrorInLoginFormWindow);	
		}); 
	},
});
