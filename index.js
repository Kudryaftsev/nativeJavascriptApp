// Потому что Node ( узел )
var $start = document.querySelector( '#start' )
var $game = document.querySelector( '#game' )

var score = 0

$start.addEventListener( 'click', startGame )
$game.addEventListener( 'click', handleBoxClick )














function startGame() {
    // Скрываем кнопку и определяем фон
    $start.classList.add( 'hide' )
    $game.style.backgroundColor = '#fff'

    // При старте игры - вызываем эту функцию
    renderBox()
}


function handleBoxClick( event ){
    if ( event.target.dataset.box ){
        score++
        renderBox()
    }
}

// Создаем функцию renderBox()
function renderBox() {
    //  Очищать поле, чтобы рендерить новые квадраты
    $game.innerHTML = ''

    // make element in js
    var box = document.createElement( 'div' )
    box.style.height = box.style.width = '50px'     //  later - dynamic generation
    box.style.position = 'absolute'                 //  для позиционирования в рамках квадрата
    box.style.backgroundColor = 'black'             //  later - dynamic generation
    box.style.top = '50px'                          //  later - dynamic...
    box.style.left = '70px'                         //  later - dynamic...
    box.style.cursor = 'pointer'
    // да, это выдуманный атрибут, крута (только без префикса data)
    box.setAttribute( 'data-box', 'true' )

    //  mdn - 1) beforebegin; 2) afterbegin; 3) beforeend; 4) afterend - до элемента, сразу после откр тега и так далее, второй параметр - сам элемент
    $game.insertAdjacentElement( 'afterbegin', box )
}