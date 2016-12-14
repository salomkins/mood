(function() {
    // get form
    var contactForm = $('#contactForm');

    // validate form
    contactForm.onsubmit = function(e) {
        // get error container
        var errorContainer = $('#errorContainer');
        errorContainer.innerHTML = '';

        var formData = new FormData(this);
        var name = formData.get('fname');
        var email = formData.get('email');
        var msg = formData.get('textarea');
        var errorMessage = [];

        // validate e-mail
        function isEmailValid(inputText) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (inputText.match(mailformat)) {
                document.querySelector("#email")
                document.contactForm.email.focus();
                return true;
            } else {
                errorMessage.push("Lūdzu ievadiet derīgu e-pasta adresi");
                document.contactForm.email.focus();
                return false;
            }
        }

        // check if name is not empty
        if (name == "" || name == null) {
            errorMessage.push('Lūdzu norādiet vārdu')
        }

        // check if email is not empty
        if (email == "" || !isEmailValid(email)) {
            errorMessage.push('Lūdzu norādiet e-pastu')
        }

        // check if question is not empty
        if (msg == "" || msg == null) {
            errorMessage.push('Ievadiet interesējošo jautājumu')
        }

        // check for errors and submit form if no errors
        if (errorMessage.length) {

            // clear old messges
            errorContainer.innerHTML = '';
            // create messages
            var messagesList = document.createElement('div');
            errorContainer.appendChild(messagesList);
            messagesList.classList.add('errors')
                // for each message add li
            for (var i = 0; i < errorMessage.length; i++) {
                var message = document.createElement('p');
                //       if (name == "" || name == null) {
                //           var addBorder1 = document.querySelector('#name');
                //           addBorder1.classList.add("error");
                //     }
                //
                //
                //     if (email == "" || email == null) {
                //         var addBorder2 = document.querySelector("#email");
                //         addBorder2.classList.add("error");
                //   } else {
                //     $('#email').removeClass('error');
                //
                //   }
                //
                //
                //
                //   if (msg == "" || msg == null) {
                //       var addBorder3 = document.querySelector("#question");
                //       addBorder3.classList.add("error");
                // }

                message.classList.add('errorMsg');
                message.innerHTML = errorMessage[i];
                // insert message to messages
                messagesList.appendChild(message);
            }


        } else {
            // send data to server
            return true;
        }
        e.preventDefault();
    }
})()
