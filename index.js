window.alert("Warning! The crossword on this page does not support English!")

function changeField(){
    if (document.getElementById("crossword").src == "https://i.imgur.com/Prtqcnx.png"){
        document.getElementById("crossword").src = "img/crossword.png";
        document.getElementById("checkAnswers").innerHTML = "Скрыть ответы";
    }
    else{
        document.getElementById("crossword").src = "https://i.imgur.com/Prtqcnx.png";
        document.getElementById("checkAnswers").innerHTML = "Проверить ответы";
    }
}
