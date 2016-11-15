function $(selector) {
  return document.querySelector(selector);
}

var $$ = function(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}

// get form
var contactForm =  $('#contactForm');

console.log(contactForm);

// validate form
contactForm.onsubmit = function() {
  var formData = new FormData(this);
  var name = formData.get('name');
  var email = formData.get('e-mail');
  var msg = formData.get('textarea');
  var errorMessage = [];

  //remove error messages if filled
    function removeError1 () {
    addBorder1.classList.remove("error");
  }

  // check if name is not emnpty
  if (!name) {
     errorMessage.push('Name should be provided')
  } else {
    removeError1()
  }

  // check if name is not emnpty
  if (!email) {
     errorMessage.push('Email should be provided')
  }

    // check if name is not emnpty
  if (!msg) {
     errorMessage.push('Msg should be provided')
  }

  // check for errors and submit form if no errors
  if (errorMessage.length) {
    console.log('show message')
    // get error container
    var errorContainer = $('#errorContainer');
    // clear old messges
    errorContainer.innerHTML = '';
    // create messages
    var messagesList = document.createElement('div');
    errorContainer.appendChild(messagesList);
    messagesList.classList.add('errors')
    // for eash message add li
    for (var i = 0; i < errorMessage.length; i++) {
      var message = document.createElement('p');
      if (!name) {
          var addBorder1 = document.querySelector('#name');
          addBorder1.classList.add("error");
    }

    if (!email) {
        var addBorder2 = document.querySelector("#email");
        addBorder2.classList.add("error");
  }


  if (!msg) {
      var addBorder3 = document.querySelector("#question");
      addBorder3.classList.add("error");
}

      message.classList.add('error');
      message.innerHTML = errorMessage[i];
      // insert message to messages
      messagesList.appendChild(message);
    }


  } else {
    // send data to server
    return true;
  }

  return false;
}
