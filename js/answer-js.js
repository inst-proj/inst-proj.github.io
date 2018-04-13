//Массив вопросов и ответа
var data_array = [
    ["В каком месте HTML документа может располагаться JavaScript код?","В секции &lthead&gt ","В секции &ltbody&gt","В секции &lthead&gt и в секции &ltbody&gt","В блоке &ltdiv&gt",3],
    ["Выберите JavaScript команду позволяющую вывести текст на страницу:","write('Текст выведен с помощью JavaScript')","document.write('Текст выведен с помощью JavaScript')","text('Текст выведен с помощью JavaScript')","writen('Текст выведен с помощью JavaScript')",2],
    ["Выберите комментарий использующийся в JavaScript:","//Я являюсь комментарием","&lt!-- Я являюсь комментарием --&gt","&lt? Я являюсь комментарием ?&gt","--/ Я являюсь комментарием",1],
    ["Чувствителен ли JavaScript к регистру символов?","да","нет","не всегда","что такое регистр символов", 1],
    ["Выберите JavaScript команду создающую строковую переменную:","var str=new Array('Строковая переменная')","var str='Строковая переменная'","var str=new Object('Строковая переменная') ","var str= newStr('Строковая переменная')",2],
    ["Какое событие позволяет выполнять код после щелчка мыши?","mouseout","mouseclick","onmouseclick","onclick",4],
    ["Выберите синтаксически корректную JavaScript команду для вызова функции 'callFunction()':","function callFunction()","callFunction()","new callFunction()","другое",2],
    ["Выберите перечень содержащий только действительно существующие в JavaScript циклы:","loop, for, while","for, while, do..while","while, for..in, cycle","circle, while, switch",2],
    ["Выберите синтаксически корректную команду для создания объекта JavaScript:","var obj=create Object","var obj=call Object","var obj=new Object()","var obj=Object()",3],
    ["Какой BOM объект содержит информацию о браузере пользователя?","history","browser","navigator","map",3],
    ["Выберите синтаксически корректную команду для создания массива:","var ar=new Array()","var ar={}","var ar=new String()","var ar=create Array()",1],
    ["Выберите метод JavaScript позволяющий выполнять произвольный код через заданные промежутки времени:","callCode()","timer()","setInterval()","setTimeOut()",3],
    ["Какое выражение позволяет проверять участки кода на наличие ошибок?","error..catch","try..catch","error..try","throw",2],
    ["Выберите синтаксически корректную условную конструкцию:","if (a==3) then document.write('Привет')","if (a==3) document.write('Привет')","if (a==3) make document.write('Привет')","if (a==3) drop document.write('Привет')",2],
    ["Выберите метод позволяющий округлить число до ближайшего целого:","ceil","floor","round","random",2],
    ["Какой BOM объект хранит информацию о URL текущего документа?","history","browser","URLinfo","location",4],
    ["Укажите название встроенного JavaScript объекта для работы с датой и временем","datetime","calendar","date","timeDate",3],
    ["Имеет ли JavaScript встроенную поддержку регулярных выражений?","да","нет","не всегда","что такое регулярные выражения",2],
    ["Выберите JavaScript команду для вызова окна оповещения:","window()","confirm()","alert()","show()",3],
    ["Какого специального оператора нет в JavaScript","delete","instanceof","typeof","isset",4]
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