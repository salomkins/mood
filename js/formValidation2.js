(function(){
// get form
var contactForm =  $('#contactForm');

// validate form
contactForm.onsubmit = function() {
  var formData = new FormData(this);
  var name = formData.get('fname');
  var email = formData.get('e-mail');
  var msg = formData.get('textarea');
  var errorMessage = [];

console.log(errorMessage);


  // remove error messages if filled
    function removeError() {
    addBorder1.classList.remove("error");
  }


  // check if name is not empty
  if (name == "" || name == null) {
     errorMessage.push('Lūdzu norādiet vārdu')
  }

  // check if name is not empty
  if (email == "" || email == null) {
     errorMessage.push('Lūdzu norādiet e-pastu')
  }

    // check if name is not empty
  if (msg == "" || msg == null) {
     errorMessage.push('Ievadiet interesējošo jautājumu')
  }

  // check for errors and submit form if no errors
  if (errorMessage.length) {
    // get error container
    var errorContainer = $('#errorContainer');
    // clear old messges
    errorContainer.innerHTML = '';
    // create messages
    var messagesList = document.createElement('div');
    errorContainer.appendChild(messagesList);
    messagesList.classList.add('errors')
    // for each message add li
    for (var i = 0; i < errorMessage.length; i++) {
      var message = document.createElement('p');
      if (name == "" || name == null) {
          var addBorder1 = document.querySelector('#name');
          addBorder1.classList.add("error");
    }

console.log(name);

    if (email == "" || email == null) {
        var addBorder2 = document.querySelector("#email");
        addBorder2.classList.add("error");
  }


  if (msg == "" || msg == null) {
      var addBorder3 = document.querySelector("#question");
      addBorder3.classList.add("error");
}

      message.classList.add('errorMsg');
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
})()
