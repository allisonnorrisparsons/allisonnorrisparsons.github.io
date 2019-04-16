const onNameClick = function () {
  //  console.log('got into function')
  //   $('#message').text('Welcome to the moon.')
  //   $('#message').css('background-Color', 'blue')
  //   setTimeout(() => $('#message').text(''), 3000)
  //   $('.container').addClass('animated rollOut');
  //   $('#welcomePage').addClass('animated rollIn')
  }

const addHandlers = () => {
    // $('#nextView').on('click', onMoonClick)
  }

  $(() => {
    addHandlers()
  })
  function myFunction(x) {
    x.classList.toggle("change");
  }
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }