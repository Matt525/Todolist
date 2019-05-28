// S T Y L E S
$('ul').css('listStyleType', 'none');
// $('ul').css('padding', '0');
// $('ul').css('margin', '0');
// $('.mainContainer').css('border', '2px solid black');
$('.mainContainer').css('background', '#eee');
// $('li:nth-of-type(odd)').toggleClass('styleItems');
$('ul').on('click', 'li', function () { $(this).toggleClass('clicked'); });
// Plus button event listener

$('li').css('margin-left', '10px'
);

document.querySelector('.fas').addEventListener('click', function(){
    var toDoText = $('#textBox').val();
    $('ul').append('<li><span><i class="fas fa-trash-alt trash"></i></span> ' + toDoText + '</li>');
})

// Delete function
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(1000, function () {
        var array = $('li')
        $(this).remove();
    });

    event.stopPropagation();
});

// Event listener for 'enter'
$('#textBox').on('keydown', function () {
    if (event.keyCode === 13) {
        var toDoText = $(this).val();
        $('ul').append('<li><span><i class="fas fa-trash-alt trash"></i></span> ' + toDoText + '</li>');
        // add styles to new lis
        // $('li').toggleClass('styleItems');  
    }
});

// Input border styles upon Selection
document.querySelector('input').addEventListener('click', function () {
    this.toggleClass('input-style')
});


// $('li').mouseOver(function(){
//         $('.fa-trash-alt').slideToggle("slide", {direction: "right"}, 1000);

// });



