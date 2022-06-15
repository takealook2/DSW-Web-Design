var heading=document.querySelector('#head1');
heading.onclick=function(){
    heading.style.color="white"
    heading.style.background="red"
}

text1.onclick=function(){
    var name1=prompt("이름을 입력하세요.");
    // if (name1=="") {
    //     alert("다시 입력해 주세요.");
    // }
    // else if (name1==null) {
    //     alert("취소하셨습니다.");
    // }
    // else {
    //     alert(name1 + "님 환영합니다!");
    // }

    // if(name1 !== null") {
    //     if(name1 !=="") {
    //         alert (name1 + "님 환영합니다!");
    //     }
    //     else {
    //         alert("다시 입력하세요..");
    //     }
    // }
    // else alert("취소하셨습니다.");

    if (name1 !== null && name1 !== "") {
        alert(name1 + "님 환영합니다!");
    }
    else if (name1 == "") {
        alert("다시 입력하세요.");
    }
    else {
        alert("취소하셨습니다.");
    }

    // alert(name1 + "님 환영합니다!");
    // document.write("<b style='color:skyblue'>" + name1 + "</b><p>님 환영합니다!</p>"); //문서 인에 찍히게 함
    // console.log(name1+"님"); //콘솔창에서 테스트(오류체크 등) 가능
    // confirm("안녕하세요"); //confirm: 확인, 취소 등 지금은 잘 쓰이지 않음
}

age1.onclick=function() {
    var age1=prompt("태어난 연도를 입력하세요.");
    if (age1==null) {
        alert("취소하셨습니다.");
    }
    else {
        age2 = 2022 - age1 + 1;
        alert(age2 + "살 입니다");    
    }
}

color1.onclick=function() {
    var sel=prompt("색상을 선택하세요.\n 1:red 2:blue 3:green");
    switch(sel) {
        case "1" : document.write("<p style='color:rgb(255,0,0)'>red</p>");
            break;
        case "2" : document.write("<p style='color:rgb(0,0,255)'>blue</p>");
            break;
        case "3" : document.write("<p style='color:rgbrgb(0,255,0)'>green</p>");
            break;
        default : alert("잘못 입력하셨습니다.");
    }
}

//sel 은 지역변수라서 괜찮음
// color2.onclick=function() {
//     var sel=prompt("색상을 선택하세요.\n 1:red 2:blue 3:green");
//     switch(sel) {
//         case "1" : ch_text1.style.color="red";
//             break;
//         case "2" : ch_text1.style.color="blue";
//             break;
//         case "3" : ch_text1.style.color="green";
//             break;
//     }
// }

color2.onclick=function() {
    var sel=prompt("색상을 선택하세요.\n 1:red 2:blue 3:green");
    switch(sel) {
        case "1" : ch_text1.style.color="white";
            ch_text1.style.background="rgb(255,0,0)"
            break;
        case "2" : ch_text1.style.color="white";
            ch_text1.style.background="rgb(0,0,255)"
            break;
        case "3" : ch_text1.style.color="white";
            ch_text1.style.background="rgb(0,255,0)"
            break;
        default : alert("잘못 입력하셨습니다.");
    }
}

function chColor() {
    var sel=prompt("색상을 선택하세요.\n 1:red 2:blue 3:green");
    switch(sel) {
        case "1" : ch_text1.style.color="white";
            ch_text1.style.background="rgb(255,0,0)"
            break;
        case "2" : ch_text1.style.color="white";
            ch_text1.style.background="rgb(0,0,255)"
            break;
        case "3" : ch_text1.style.color="white";
            ch_text1.style.background="rgb(0,255,0)"
            break;
        default : alert("잘못 입력하셨습니다.");
    }
}