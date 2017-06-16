function createPicSet(){
        var formData =  new FormData(document.forms.namedItem("createPSForm"));
        var url = "http://114.115.142.42/Operation/CreatePicSet";  
                $.ajax({  
                  type: 'POST',  
                  url: url,  
                  dataType: 'text',  
                  data: formData,  
                  beforeSend: function(){  
                  },  
                  complete: function(XMLHttpRequest, textStatus) { 
                  },  
                  success: function(data) { 
                    if(data=="success"){
                      window.alert("创建成功！");
                    }else{
                      window.alert(data);
                    }
                  },
                  //error:function(XMLHttpRequest, textStatus, errorThrown){
                  //通常情况下textStatus和errorThrown只有其中一个包含信息
                  error: function(XMLHttpRequest, textStatus, errorThrown) {
                    window.alert(textStatus);
                  }
                });  



    
}
