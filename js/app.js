// hides the main body content
const body = document.querySelector('.body');
body.style.display = 'none';

// click event for body content
let $whatIsIt = $('#whatIsIt');
$whatIsIt.click(function(){
    $('.body').show();
    $whatIsIt.hide();
});