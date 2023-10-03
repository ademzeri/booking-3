function createConfirmIcon() {
    const confirmIcon = document.createElement("i");
    confirmIcon.innerHTML = `
      <i class="rounded-r-lg fa-solid fa-check absolute self-center right-0 w-8 text-center h-full top-1/2 transform -translate-y-1/2 bg-green-500 flex flex-row justify-center items-center" style="color: #ffffff;"></i>
    `;
    return confirmIcon;
  }
  
  function createDeclineIcon() {
    const declineIcon = document.createElement("i");
    declineIcon.innerHTML = `
      <i class="fa-solid rounded-r-lg fa-x absolute self-center right-0 w-8 text-center h-full top-1/2 transform -translate-y-1/2 bg-red-500 flex flex-row justify-center items-center" style="color: #ffffff;"></i>
    `;
    return declineIcon;
  }
  
  function validateInput(input, regex) {
    const isValid = input.value.match(regex);
  
    if (!isValid ) {
      input.parentElement.classList.add("border-red-500");
      input.parentElement.classList.remove("border-green-500");
      input.classList.remove("bg-transparent", "bg-green-50");
      input.classList.add("bg-red-50");
  
      // Remove any existing icons
      const existingConfirmIcon = input.parentElement.querySelector(".confirm-icon");
      if (existingConfirmIcon) {
        input.parentElement.removeChild(existingConfirmIcon);
      }
  
      // Add decline icon if it doesn't exist
      const existingDeclineIcon = input.parentElement.querySelector(".decline-icon");
      if (!existingDeclineIcon) {
        const declineIcon = createDeclineIcon();
        declineIcon.classList.add("decline-icon");
        input.parentElement.appendChild(declineIcon);
      }
    } else {
      input.parentElement.classList.add("border-green-500");
      input.parentElement.classList.remove("border-red-500");
      input.classList.remove("bg-transparent", "bg-red-50");
      input.classList.add("bg-green-50");
  
      // Remove any existing icons
      const existingDeclineIcon = input.parentElement.querySelector(".decline-icon");
      if (existingDeclineIcon) {
        input.parentElement.removeChild(existingDeclineIcon);
      }
  
      // Add confirm icon if it doesn't exist
      const existingConfirmIcon = input.parentElement.querySelector(".confirm-icon");
      if (!existingConfirmIcon) {
        const confirmIcon = createConfirmIcon();
        confirmIcon.classList.add("confirm-icon");
        input.parentElement.appendChild(confirmIcon);
      }
    }
  }
  function handleDelete(input){ 
    if (input.value.length === 0) {
        input.parentElement.classList.remove("border-red-500", "border-green-500");
        input.classList.remove("border-green-500", "bg-green-50", "bg-red-50 border", "border-red-500");
        input.classList.add("bg-transparent");
    
        // Remove any existing icons
        const existingConfirmIcon = input.parentElement.querySelector(".confirm-icon");
        if (existingConfirmIcon) {
          input.parentElement.removeChild(existingConfirmIcon);
        }
    
        const existingDeclineIcon = input.parentElement.querySelector(".decline-icon");
        if (existingDeclineIcon) {
          input.parentElement.removeChild(existingDeclineIcon);
        }
      }
  }

        const cardPatterns = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
        };

            // Example usage:

                    

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const nameRegex = /^[a-zA-Z]+$/;
        const addressRegex = /^[a-zA-Z0-9\s,.'-]+$/;
        const zipCodeRegex = /^\d*$/;
        const phoneNumberRegex = /^(?:\(\d{3}\)|\d{3})[-.]?\d{3}[-.]?\d{4}$/;
        const CardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|3(?:[47][0-9]{13})|5[1-5][0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12})$/;
        const expiryDateRegex = /^\d{2}\/\d{2}$/;
        const cvcRegex = /^\d{3}(?:\d{1})?$/;

        const email = document.getElementById("email");
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const address = document.getElementById("address");
        const city = document.getElementById("city");
        const zipCode = document.getElementById("post-code");
        const phoneNumber = document.getElementById("phone-number");
        const cardHolderName = document.getElementById("cardholder-name");
        const CardNumber = document.getElementById("card-number");
        const ExpiryDate = document.getElementById("expiry-date");
        const cvc = document.getElementById("cvc");
        const cardImage = document.getElementById("card-image");
        const cardImages = {
            visa: "./assets/visa.png",
            mastercard: "./assets/card.png",
            amex: "./assets/amex.png",
            jcb: "./assets/jcb.png",
            discover: "./assets/discover.png"
        }  
        email.addEventListener("input",  () => {
            validateInput(email, emailRegex);
            console.log("hellow rocsFJQSBCKJNCNL ")
        });

        firstName.addEventListener("input",  () => {
            validateInput(firstName, nameRegex);
        });

        lastName.addEventListener("input",  () => {
            validateInput(lastName, nameRegex);
        });

        address.addEventListener("input",  () => {
            validateInput(address, addressRegex);
        });

        city.addEventListener("input",  () => {
            validateInput(city, nameRegex);
        });

        zipCode.addEventListener("input",  () => {
            validateInput(zipCode, zipCodeRegex);
        });

        phoneNumber.addEventListener("input",  () => {
            validateInput(phoneNumber, phoneNumberRegex);
            console.log("object")
        });

        cardHolderName.addEventListener("input",  () => {
            validateInput(cardHolderName, nameRegex);
            console.log("object")
        });

        CardNumber.addEventListener("input",  () => {
            
            const cardNumber = CardNumber.value;
            validateInput(CardNumber, CardNumberRegex);
            const cardType = getCardType(cardNumber);
            console.log(`Card type: ${cardType}`);
            const image = document.createElement("img")
            image.innerHTML = `<img class="ezz h-6" src="./assets/card-holder.png"/>`
            console.log(cardType)
            switch(cardType) {
                case "visa":
                    cardImage.src = cardImages.visa;
                    break;
                case "mastercard":
                    cardImage.src = cardImages.mastercard;
                    break;
                case "amex":
                    cardImage.src = cardImages.amex;
                    break;
                case "jcb":
                    cardImage.src = cardImages.jcb;
                    break;
                case "discover":
                    cardImage.src = cardImages.discover;
                    break;
                default:
                    cardImage.src = "./assets/card-holder.png";
            }
            cardImage.innerHTML = image.innerHTML    
        });
        function getCardType(cardNumber) {
            //Remove any spaces or non-numeric characters from the card number
            cardNumber = cardNumber.replace(/\D/g, '');       
            // Define regex patterns for each card type
            const cardPatterns = {
                visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
                mastercard: /^5[1-5][0-9]{14}$/,
                amex: /^3[47][0-9]{13}$/,
                jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
                discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
            };
        
            // Check the card type based on the patterns
            for (const type in cardPatterns) {
                if (cardPatterns[type].test(cardNumber)) {
                    return type;
                }
            }
        
            // If no type is detected, return 'Unknown'
            return 'Unknown';
        }

        ExpiryDate.addEventListener("input",  () => {
            validateInput(ExpiryDate, expiryDateRegex);
            console.log("object")
        });

        cvc.addEventListener("input",  () => {
            validateInput(cvc, cvcRegex);
            const inputValue = e.target.value;
            
            // Check if the input value is empty or contains a non-digit character
            if (inputValue === '' || isNaN(inputValue)) {
                // Clear the input field
                cvcInput.value = '';
                return;
            }

            // If the input value is exactly one character, insert the '/' after it
            if (inputValue.length === 1) {
                cvcInput.value = inputValue + '/';
  }



        });

        // Form submission
        document.getElementById("myForm").addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission for demonstration purposes
            alert("Form is valid! Submitting...");
            // Uncomment the next line to submit the form
            // document.getElementById("myForm").submit();
        });


    // handle delete 

    email.addEventListener("change",  () => {
        handleDelete(email);
    });

    firstName.addEventListener("change",  () => {
        handleDelete(firstName);
    });

    lastName.addEventListener("change",  () => {
        handleDelete(lastName);
    });

    address.addEventListener("change",  () => {
        handleDelete(address);
    });

    city.addEventListener("change",  () => {
        handleDelete(city);
    });

    zipCode.addEventListener("change",  () => {
        handleDelete(zipCode);
    });

    phoneNumber.addEventListener("change",  () => {
        handleDelete(phoneNumber);
    });

    cardHolderName.addEventListener("change",  () => {
        handleDelete(cardHolderName);
    });
    CardNumber.addEventListener("change",  () => {
        handleDelete(CardNumber);

    });
    
    ExpiryDate.addEventListener("change",  () => {
        handleDelete(ExpiryDate);
    });

    cvc.addEventListener("change",  () => {
        handleDelete(cvc);
    });