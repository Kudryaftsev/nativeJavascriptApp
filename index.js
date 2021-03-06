// Потому что Node ( узел )
var $start = document.querySelector( '#start' )
var $game = document.querySelector( '#game' )
var $time = document.querySelector( '#time' )
var $timeHeader = document.querySelector( '#time-header' )
var $resultHeader = document.querySelector( '#result-header' )
var $result = document.querySelector( '#result' )
var $gameTime = document.querySelector( '#game-time' )

var score = 0
var isGameStarted = false

$start.addEventListener( 'click', startGame )
$game.addEventListener( 'click', handleBoxClick )
$gameTime.addEventListener( 'input', setGameTime )

function startGame() {
    score = 0
    setGameTime()
    $gameTime.setAttribute( 'disabled', 'true' )
    $timeHeader.classList.remove( 'hide' )
    $resultHeader.classList.add( 'hide' )
    isGameStarted = true
    // Скрываем кнопку и определяем фон
    $start.classList.add( 'hide' )
    $game.style.backgroundColor = '#fff'

    var interval = setInterval( function(){
        var time = parseFloat($time.textContent)

        if (time <= 0){
            clearInterval( interval )
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed( 1 )
        }
    }, 100 )

    // При старте игры - вызываем эту функцию
    renderBox()
}

function setGameScore(){
    $result.textContent = score.toString()
}

function setGameTime(){
    var time = +$gameTime.value
    $time.textContent = time.toFixed( 1 )
}

function endGame(){
    isGameStarted = false
    $gameTime.removeAttribute( 'disabled' )
    setGameScore()

    $start.classList.remove( 'hide' )
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'

    $timeHeader.classList.add( 'hide' )
    $resultHeader.classList.remove( 'hide' )

}


function handleBoxClick( event ){
    // т.е. если false, почему бы и нет?
    if (!isGameStarted){
        return
    }

    if ( event.target.dataset.box ){
        score++
        renderBox()
    }
}

// Создаем функцию renderBox()
function renderBox() {
    //  Очищать поле, чтобы рендерить новые квадраты
    $game.innerHTML = ''
    var boxSize = getRandom( 10, 100 )
    //  Узнать про объект
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize

    // make element in js
    var box = document.createElement( 'div' )
    box.style.height = box.style.width = boxSize + 'px' //  dynamic generation
    box.style.position = 'absolute'                     //  для позиционирования в рамках квадрата
    box.style.backgroundColor = 'rgb(' + getRandom( 0, 256) + ',' + getRandom( 0, 256) + ',' + getRandom( 0, 256 ) + ')'                                                 //  backgroundColor - dynamic generation
    box.style.top = getRandom( 0, maxTop ) + 'px'       //  dynamic...
    box.style.left = getRandom( 0, maxLeft ) + 'px'     //  dynamic...
    box.style.cursor = 'pointer'
    // да, это выдуманный атрибут, крута (только без префикса data)
    box.setAttribute( 'data-box', 'true' )

    //  mdn - 1) beforebegin; 2) afterbegin; 3) beforeend; 4) afterend - до элемента, сразу после откр тега и так далее, второй параметр - сам элемент
    $game.insertAdjacentElement( 'afterbegin', box )
}

function getRandom( min, max ){
    //  floor - округление
    return Math.floor(Math.random() * (max - min) + min)
}