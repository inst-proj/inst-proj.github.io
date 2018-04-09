//Массив вопросов и ответа
var data_array = [
    ["Сколько сантиметров в метре?","10","1024","100","1000",3],
    ["Перевод слова: Hello","Как дела?","Привет","Ты","Дом",2],
    ["Перевод слова: Dog","Собака","Кошка","Дерево","Сосиска",1],
    ["Сколько месяцев в году?","10","11","12","13",3],
    ["Перевод слова: Tree","Три","Собака","Дерево","Дом",3],
    ["Перевод слова: Wall","Стена","Дом","Башня","Война",1],
];

var plus = 0;
var time = 0;
var cur_answer = 0;
var count_answer = data_array.length;

function sec() {
    time++;	
    document.getElementById('time').innerHTML='Затрачено времени: ' + time + ' сек';
}

function check(num){

    if(num == 0){ 
    
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
            document.getElementById('result').innerHTML='Верно!';
        }else{
            document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + data_array[cur_answer][data_array[cur_answer][5]];
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

var curent_url = document.URL; document.write("<a id='end' style='display: none;' class='oganesyan' href='" + curent_url + "'>Начать сначала</a>");