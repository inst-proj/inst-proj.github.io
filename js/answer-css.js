//Массив вопросов и ответа
var data_array = [
    ["Следующий атрибут стиля определяет будет ли фоновое изображение прокручиваться вместе с элементом:","background-repeat","background-position","background-attachment","background-size",3],
    ["Как расшифровывается CSS?","Common Style Sheets","Computer Style Sheets","Cascading Style Sheets","Case Style Start",3],
    ["Выберите синтаксически корректное CSS правило:","div:[font_size-2em]","div [font-size:2em]","div {font-size:2em}","div {font_size:2em}",3],
    ["Укажите CSS свойство позволяющее устанавливать размер шрифта?","font-weight","font-size","size","weight",2],
    ["Укажите селектор позволяющий выбрать все элементы div имеющие атрибут id='wrap'","div-wrap","div id.wrap","div.wrap","div#wrap",4],
    ["С помощью какого тэга можно подключить к HTML документу внешний файл стилей?","&ltstyle&gt","&ltlink&gt","&ltmeta&gt","&ltcss&gt",2],
    ["С помощью какого CSS свойства можно оформить границу элемента?","border","padding","margin","outline",1],
    ["Выберите свойство с правильно заданным значением цвета:","color: #000000 ","color: 00-00-00","color: %00-00-00","color: #00:00:00",1],
    ["Выберите перечень содержащий единицы измерения, которые используются в CSS для установки размера шрифта:","em, px","kg, g, cm","%, dm","y, cm, px",1],
    ["Выберите существующее CSS свойство для оформления списков:","list-color","list-width","list-style","list-height",3],
    ["Выберите CSS свойство позволяющее скрыть элемент:","display","disappear","hide","show",1],
    ["Какие виды позиционирования элементов существуют в CSS:","flow, none, show, shift","absolute, relative, static, fixed","slip, relating, attached, static","static, relating, attached, none",2],
    ["Укажите CSS свойство позволяющее изменять прозрачность элементов:","display","opacity","transparency","padding",2],
    ["Выберите перечень содержащий только существующие CSS свойства фона:","background-color, background-repeat, background-attachment","background-repeat, background-position, background-picture","background-align, background-image, background-attachment","background-align, background-image, background-padding",1],
    ["Выберите псевдо-класс позволяющий оформить ссылки, на которые наведен курсор мыши:",":hover",":link",":visited",":active",1],
    ["Какое CSS свойство позволяет управлять порядком наложения элементов?","index","z-index","stack","order",2],
    ["Выберите перечень содержащий только безопасные шрифты:","Arial, Times New Roman, Verdana","Arial Black, Calibri, Georgia","Comic Sans MS, Impact, Castellar","Georgia, Century, Garamond",1],
    ["Как прижать блок к правому краю?","float: na-pravo;","float: left;","float: right;","right: float;",3],
    ["Выберите значение для пунктирной рамки у border:","solid","groove","double","dashed",4],
    ["Как сделать фон веб-страницы?","background-image: путь_к_изображению;","image: url(путь_к_изображению);","background-image: url(путь_к_изображению);","background-img: url(путь_к_изображению);",3]
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