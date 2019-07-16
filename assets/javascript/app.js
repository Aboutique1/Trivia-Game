(function(){
    console.log('Game Started')

    correctAnswers = 0

   

    $('#timeRemaining').hide()
    $('#questions').hide()




    $('#startButton').click(function(){
        $(this).hide()
        startGame()
        $('#questions').show()
        $('#answers').hide()
        $('#timeRemaining').show()


    })
    

    function startGame(){
        
        $('#timeRemaining').html('Time Remaining: 30')

        var timer = 30;

       var interval = setInterval(function(){
        timer --;
        if(timer<=0){
            clearInterval(interval);
            $('#questions').hide()
         $('#timeRemaining').html('Time is up!')

         var q1Choice = $("input[name='q1']:checked").val()
         var q2Choice = $("input[name='q2']:checked").val()
         var q3Choice = $("input[name='q3']:checked").val()
     
         if(q1Choice=="thom"){
             var score
             score = correctAnswers+1
             console.log('Correct Answer: ', score)
             $('#q1Answer').addClass('correct').removeClass('wrong')

         }
         else{
            var score = correctAnswers
            $('#q1Answer').addClass('wrong').removeClass('correct')

         }

         if(q2Choice=="bears"){
            var secondScore = score +1
            console.log('q2Score: ', secondScore)
            $('#q2Answer').addClass('correct').removeClass('wrong')

        }
        else{
           var secondScore = score+0
           $('#q2Answer').addClass('wrong').removeClass('correct')

        }

        if(q3Choice=="Golden Girls"){
            var thirdScore = secondScore +1
            console.log('q3Score: ', thirdScore)
            $('#q3Answer').addClass('correct').removeClass('wrong')

        }
        else{
            thirdScore = secondScore+0
            $('#q3Answer').addClass('wrong').removeClass('correct')

        }

        setTimeout(function(){
    $('#timeRemaining').html(Math.floor((thirdScore/3)*100)+'% '+'correct.')
    $('#answers').show()
        },1000)
        



        }
        else{
            $('#timeRemaining').html('Time Remaining: '+timer)

        return console.log(timer)
        }
    },1000)

    }

   $('#resetButton').click(function(){
    $('#timeRemaining').hide()
    $('#answers').hide()
    $('#startButton').show()
       
       

   })


  })()