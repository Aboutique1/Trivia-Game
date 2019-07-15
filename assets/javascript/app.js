(function(){
    console.log('Game Started')

    var timer = 30;

    $('#timeRemaining').hide()
    $('#questions').hide()


    $('#startButton').click(function(){
        $(this).hide()
        $('#timeRemaining').show()
        $('#questions').show()

        setInterval(function(){
            timer --;
            if(timer<=0){
             $('#timeRemaining').html('Time is up!')
            }
            else{
                $('#timeRemaining').html('Time Remaining: '+timer)
            return console.log(timer)
            }
        },1000)

    })

  })()