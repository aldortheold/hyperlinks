function changeField(){
    if (document.getElementById("crossword").src == "http://127.0.0.1:5500/img/crossword_empty.png"){
        document.getElementById("crossword").src = "img/crossword.png";
        document.getElementById("checkAnswers").innerHTML = "Скрыть ответы";
    }
    else{
        document.getElementById("crossword").src = "http://127.0.0.1:5500/img/crossword_empty.png";
        document.getElementById("checkAnswers").innerHTML = "Проверить ответы";
    }
}