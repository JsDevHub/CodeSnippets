	
	function SimpleFormValidator(config){

		
var SFV = {
 
    ErrorMessages  : { required : "This field is required." },
	errorCounter : 0,
	validateFormData: function(event){
       SFV.errorCounter = 0;
    
      // prevent form submit
      event.preventDefault();
	 	
	  //get the event type
	  if(event.type == 'focusout'){
	            var input = $(this);
				SFV.showAndHideErrorMsg(input);
				 	  }else{
	        //check all input elements for null 
			$("form#userData :input[type='text']").each(function(){
					   var input = $(this); 
					SFV.showAndHideErrorMsg(input);
					 
			 });
		  if (typeof(config.success) !== 'undefined'){
			if(SFV.errorCounter == 0){
				config.success();
			}			
		  }
	  	  }	  
     return SFV.errorCounter;
     
   },
         showAndHideErrorMsg: function(input) {
						if(input.val().trim() == ""){
								  input.next().show().
								  find(".error").html(SFV.ErrorMessages.required).show();
								  //if any null fields found increase errorCounter
								  SFV.errorCounter++;
					   }else{
							  input.next().hide();
					   }
        } 


}
	 $('#'+config.formId).on('submit',SFV.validateFormData);
   
    $('.form-fields').on('focusout',SFV.validateFormData);
	
	}
