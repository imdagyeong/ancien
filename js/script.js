$("#slide ul li").hide();
$("#slide ul li:nth-child(1)").show();

setInterval(function(){
    $("#slide ul li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slide ul")
},3000);
// .end() 메서드는 재 선택된 요소의 이전 요소를 선택하는 메서드입니다.
// .appendTo() 는 선택한 요소를 다른 요소 안에 넣습니다.
$("#slide_mobile ul li").hide();
$("#slide_mobile ul li:nth-child(1)").show();

setInterval(function(){
    $("#slide_mobile ul li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slide_mobile ul")
},3000);
// .end() 메서드는 재 선택된 요소의 이전 요소를 선택하는 메서드입니다.
// .appendTo() 는 선택한 요소를 다른 요소 안에 넣습니다.


// 모바일 gnb
