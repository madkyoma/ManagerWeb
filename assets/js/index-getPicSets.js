function getPicSets(){
    	var params = " ";  
        var url = "http://114.115.142.42/Operation/GetPicSet";  
                $.ajax({  
                  type: 'POST',  
                  url: url,  
                  dataType: 'text',  
                  data: params,  
                  beforeSend: function(){  
                  },  
                  complete: function(XMLHttpRequest, textStatus) { 
                  },  
                  success: function(data) { 
                    if(data=="invalid!"){  
                      window.alert("未登录！非法操作！");
                    }else{
                      //获取页面中的元素
                      var albumArr=new Array(document.getElementById("album1"),
                        document.getElementById("album2"),
                        document.getElementById("album3"),
                        document.getElementById("album4"),
                        document.getElementById("album5"),
                        document.getElementById("album6"),
                        document.getElementById("album7"),
                        document.getElementById("album8"));
                      var albumNameArr=new Array(document.getElementById("album_name1"),
                        document.getElementById("album_name2"),
                        document.getElementById("album_name3"),
                        document.getElementById("album_name4"),
                        document.getElementById("album_name5"),
                        document.getElementById("album_name6"),
                        document.getElementById("album_name7"),
                        document.getElementById("album_name8"));
                      var albumFinishArr=new Array(document.getElementById("album_finish1"),
                        document.getElementById("album_finish2"),
                        document.getElementById("album_finish3"),
                        document.getElementById("album_finish4"),
                        document.getElementById("album_finish5"),
                        document.getElementById("album_finish6"),
                        document.getElementById("album_finish7"),
                        document.getElementById("album_finish8"));
                      var albumCoverArr=new Array(document.getElementById("album_cover1"),
                        document.getElementById("album_cover2"),
                        document.getElementById("album_cover3"),
                        document.getElementById("album_cover4"),
                        document.getElementById("album_cover5"),
                        document.getElementById("album_cover6"),
                        document.getElementById("album_cover7"),
                        document.getElementById("album_cover8"));
                      var albumIDArr=new Array(document.getElementById("album_id1"),
                        document.getElementById("album_id2"),
                        document.getElementById("album_id3"),
                        document.getElementById("album_id4"),
                        document.getElementById("album_id5"),
                        document.getElementById("album_id6"),
                        document.getElementById("album_id7"),
                        document.getElementById("album_id8"));
                     	var myobj=eval(data);
                      for(var i=0;i<myobj.length;i++){
                        //显示图集div
                        albumArr[i].style.display="block";
                        //更改图集封面
                        if(myobj[i].Url!=null&&myobj[i].Url!="")
                          albumCoverArr[i].src=myobj[i].Url;
                        //更改图集名称
                        if(myobj[i].PicSetName!=null&&myobj[i].PicSetName!="")
                          albumNameArr[i].innerHTML=myobj[i].PicSetName;
                        //更改图集标签化完成信息
                        if(myobj[i].isFinish=="1")
                          albumFinishArr[i].innerHTML="已完成标签化";
                        else if(myobj[i].isFinish=="0")
                          albumFinishArr[i].innerHTML="未完成标签化";
                        //记录图集ID
                        if(myobj[i].PicSetId!=null&&myobj[i].PicSetId!="")
                          albumIDArr[i].innerHTML=myobj[i].PicSetId;
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
