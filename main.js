$(document).ready(()=>{
   function animation(){
        $('#kolko1').animate({top: '5%'},1500).animate({top: '15%'}, 1500, animation) 
        $('#krzyzyk1').animate({top: '20%'},1500).animate({top: '25%'}, 1500, animation)

        $('#kolko2').animate({bottom: '5%'},1500).animate({bottom: '15%'}, 1500, animation) 
        $('#krzyzyk2').animate({bottom: '20%'},1500).animate({bottom: '25%'}, 1500, animation)

        $('#kolko3').animate({top: '10%'},1500).animate({top: '5%'}, 1500, animation) 
        $('#krzyzyk3').animate({bottom: '10%'},1500).animate({bottom: '5%'}, 1500, animation)
    }
    animation()

    $('#play').click(()=>{
        $('#mainMenu').hide()
        $('#secondMenu').slideToggle()
    })

})




