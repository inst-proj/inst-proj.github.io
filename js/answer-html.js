//Массив вопросов и ответа
var data_array = [
    ["В чем отличие тегов &ltdiv&gt и &ltspan&gt?","div - является строчным элементом, а span - блочным","между ними нет разницы","тег span не надо закрывать","span - является строчным элементом, а div - блочным",4],
    ["Каких атрибутов не бывает?","alt, width, height","ins, meta, kr","href, title, style","placeholder, name, id",2],
    ["Сколько всего уровней заголовков &ltHx&gt?","от 1 до 6","от 1 до 10","от -10 до 10","существует только один уровень",1],
    ["Как отображается в браузере текст обернутый тегом &ltem&gt?","курсив","подчеркнутый текст","зачеркнутый текст","это устаревший тег и я его не использую",1],
    ["Чтобы вставить изображение на сайт необходимо использовать тег:","&ltimg&gt","&lta&gt","&ltbr&gt","&ltmeta&gt",1],
    ["Обязательный атрибут тега &ltimg&gt","height","src","alt","width",2],
    ["Чтобы задать всплывающую подсказку при наведении на изображение необходимо использовать атрибут:","width","title","alt","другое",2],
    ["HTML расшифровывается как:","Hyperpyper Trob Meas Lock","High Too My Link","HyperText Markup Language","мне всё равно",3],
    ["Чтобы организовать ненумерованный список необходимо использовать тег:","&ltol&gt","&ltul&gt","&ltth&gt","&lthr&gt",2],
    ["Какой из перечисленных ниже тегов является блочным?","&ltdiv&gt","&ltspan&gt","&ltq&gt","&lta&gt",1]
];


var plus = 0;
var time = 0;
var cur_answer = 0;
var count_answer = data_array.length;

function sec() {
    time++;	
    document.getElementById('time').innerHTML='Затрачено времени: <span>' + time + '</span> сек';
}

function check(num){

    if(num == 0){ 
    
        document.getElementById('time').classList.remove('disNone');
        document.getElementById('option1').style.display='block';
        document.getElementById('option2').style.display='block';
        document.getElementById('option3').style.display='block';
        document.getElementById('option4').style.display='block';
        document.getElementById('question').style.display='block';

        document.getElementById('option1').innerHTML=data_array[cur_answer][1];
        document.getElementById('option2').innerHTML=data_array[cur_answer][2];
        document.getElementById('option3').innerHTML=data_array[cur_answer][3];
        document.getElementById('option4').innerHTML=data_array[cur_answer][4];

        document.getElementById('question').innerHTML=data_array[cur_answer][0];
        
        document.getElementById('start').style.display='none';
        document.getElementById('end').style.display='inline';
        
        var intervalID = setInterval(sec, 1000);
        
    }else{

        if( num ==  data_array[cur_answer][5]){
            plus++;
            document.getElementById('result').innerHTML='<span class="true">Верно!</span>';
        }else{
            document.getElementById('result').innerHTML='<span class="false">Неверно! Правильный ответ: ' + data_array[cur_answer][data_array[cur_answer][5]] + '</span>';
        }
            
        cur_answer++;
        if(cur_answer < count_answer){
        
            document.getElementById('option1').innerHTML=data_array[cur_answer][1];
            document.getElementById('option2').innerHTML=data_array[cur_answer][2];
            document.getElementById('option3').innerHTML=data_array[cur_answer][3];
            document.getElementById('option4').innerHTML=data_array[cur_answer][4];
            document.getElementById('question').innerHTML=data_array[cur_answer][0];
              
        }else{
              
            document.getElementById('time').id = 'stop';
            document.getElementById('option1').style.display='none';
            document.getElementById('option2').style.display='none';
            document.getElementById('option3').style.display='none';
            document.getElementById('option4').style.display='none';
            document.getElementById('question').style.display='none';
            document.getElementById('end').style.display='inline';
            
            var percent =  Math.round(plus/count_answer*100);				
            var res = 'Плохо!';
            if(percent>70) res = 'Хорошо!';
            if(percent==100) res = 'Отлично!';
            
            document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
    }
    }
}

var curent_url = document.URL; document.write("<a id='end' style='display: none;' class='test-option' href='" + curent_url + "'>Начать сначала</a>");