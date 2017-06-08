$( document ).ready(function() {


    function clickHandler(){
      var name= prompt('why are you here?')
      alert('Thank you for signing up ' + ' ' + name);
    };
      $('#button').on('click', clickHandler);







});
