sap.ui.controller("videobackground2.VIEW", {


	onInit: function() {
		
		
		var text=this.getView().byId("idmail");
		
		debugger;
	    
		wordIndex=1;
		
		var restanimation=function(){
			text.removeStyleClass("flip")
			
		};
		var restanimation2=function(){
			text.removeStyleClass("flip2")
			
		};
		var restanimation3=function(){
			text.removeStyleClass("flip3")
			
		};
		var restanimation4=function(){
			text.removeStyleClass("flip4")
			
		};
		var restanimation5=function(){
			text.removeStyleClass("flip5")
			
		};
		
		
     //case2 text replaces but one time only
		setInterval(  function(){
			
			switch(wordIndex){
			case 0:
				text.addStyleClass("flip");
				
				wordIndex=1;
				setTimeout(restanimation,2000);
				break;
			case 1:
				text.addStyleClass("flip2");
				
				wordIndex=2;
				setTimeout(restanimation2,2000);
				break;

			case 2:
				text.addStyleClass("flip3");
			    wordIndex=3;
				setTimeout(restanimation3,2000);
				break;
			
			case 3:
                text.addStyleClass("flip4");
				
				wordIndex=4;
				setTimeout(restanimation4,2000);
				break;
				
			
		case 4:
            text.addStyleClass("flip5");
			
			wordIndex=5;
			setTimeout(restanimation5,2000);
			break;
			
		case 5:
            text.addStyleClass("flip");
			
			wordIndex=1;
			setTimeout(restanimation,2000);
			break;
			   
			}
			
			}
			,2000)
			

	}, 

		
	  


onclick : function(){
	/*var text=this.getView().byId("idmail");
	
	debugger;
    
	
	
	var restanimation=function(){
		text.removeStyleClass("flip")
		//text.addStyleClass("flip")
	};
	var restanimation2=function(){
		text.removeStyleClass("flip2")
		//text.addStyleClass("flip")
	};
	var restanimation3=function(){
		text.removeStyleClass("flip3")
		//text.addStyleClass("flip")
	};
	
	text.addStyleClass("flip");
	
	
	setTimeout(restanimation,5000);
	text.addStyleClass("flip2");
	
	
	setTimeout(restanimation2,5000);
	text.addStyleClass("flip3");
	
	
	setTimeout(restanimation3,5000);
	
	
	*/
	/*setInterval(function(){
		
		switch(text){
		case 0:
			text.addStyleClass("flip");
			
			
			setTimeout(restanimation,1000);
			break;
		case 1:
			text.addStyleClass("flip2");
			
			
			setTimeout(restanimation2,1000);
			break;

		case 2:
			text.addStyleClass("flip3");
			
			
			setTimeout(restanimation3,1000);
			break;
		
		}
		
	},2000)

	*/
	
	
	
	
}




});