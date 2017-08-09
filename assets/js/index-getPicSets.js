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
                    //获取图片集成功
                    var myobj = eval(data);
                    console.log(myobj);
                    var $inner = $('#page-inner');
                    var i = 0;
                    for (var j = 0; j < (myobj.length / 4); j++) {
                        var $row = $('<div></div>',{class: "row", id: "row" + j});
                        $inner.append($row);
                        for (var k = 0; k < 4; k++) {
                            if(i >= myobj.length) break;
                            var $col = $('<div></div>',{class: "col-md-3 col-sm-12 col-xs-12 album"});
                            $row.append($col);
                            var $board = $('<div></div>',{class: "board", 'albumid': myobj[i].PicSetId, 'albumName': myobj[i].PicSetName, id: "album"+i, style: "cursor: pointer"});
                            $col.append($board);
                            var $panel = $('<div></div>',{class: "panel panel-primary"});
                            $board.append($panel);
                            var $number = $('<div></div>',{class: "number"});
                            $panel.append($number);
                            console.log(myobj[i].isFinish);
                            if (myobj[i].isFinish == "1") {
                                $number.append('<h3><h3 class="album_name" albumId="' + myobj[i].PicSetId + '">' + myobj[i].PicSetName + '</h3><small class="album_finish">已完成标签化</small></h3>');
                            }else{
                                $number.append('<h3><h3 class="album_name" albumId="' + myobj[i].PicSetId + '">' + myobj[i].PicSetName + '</h3><small class="album_finish">未完成标签化</small></h3>');
                            };
                            $number.append('<div class="progress progress-striped">'+
                                              '<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" style="width: 42%"></div>'+
                                          '</div> ');
                            var $cover = $('<div></div>',{class: "icon album_cover", 'albumId': myobj[i].PicSetId,  html:'<img id="album_cover2" height="100%" width="100%" src="'+myobj[i].Url+'">'});
                            $panel.append($cover);
                            $board.on('click',function(){
                                window.location.href = "showPics.html"+"?"+"picSetId="+$(this).attr('albumId')+"&picSetName="+$(this).attr('albumName');
                            });
                            i++;
                        };
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


$(document).ready(function() {
            $('#search').on('click',function(){
                var keyword = $('#s').val();
                window.location.href = "searchRes.html?keyword=" + keyword;
            });
            getPicSets();

});
       