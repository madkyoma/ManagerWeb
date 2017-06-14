function getPicSets(){

    	var params = " ";  
        var url = "http://114.115.142.42/Operation/GetPicSet";  
                $.ajax({  
                  type: 'POST',  
                  url: url,  
                  dataType: 'text',  
                  data: params,  
                  beforeSend: function() {  
                  },  
                  complete: function(XMLHttpRequest, textStatus) { 
                  },  
                  success: function(data) { 
                  window.alert(data); 
                    if(data=="invalid!"){  
                      window.alert("非法操作！");
                    }else{
                     	var myobj=eval(data);
                      for(var i=0;i<myobj.length;i++){
    						        window.alert(myobj[i].Url);
    				        		window.alert(myobj[i].PicSetName);
    					         	window.alert(myodj[i].isFinish);
						          }
                    }
                  },
                  //error:function(XMLHttpRequest, textStatus, errorThrown){
                  //通常情况下textStatus和errorThrown只有其中一个包含信息
                  error: function(XMLHttpRequest, textStatus, errorThrown) {
                    window.alert(textStatus);
                  }
                });  



	
}
