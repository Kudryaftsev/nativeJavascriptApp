// Потому что Node ( узел )
var $start = document.querySelector( '#start' )
var $game = document.querySelector( '#game' )
$start.addEventListener( 'click', startGame )














function startGame() {
    // Скрываем кнопку и определяем фон
    $start.classList.add( 'hide' )
    $game.style.backgroundColor = '#fff'

    // При старте игры - вызываем эту функцию
    renderBox()
}

// Создаем функцию renderBox()
function renderBox() {

}