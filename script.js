const length = 10;
    const passwordbox = document.getElementById("password");
    
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+[]{}}></-=~";
    const allChars = uppercase + lowercase + number + symbol;
    
    function createpassword(){
        let password = "";
        password += uppercase[Math.floor(Math.random()* uppercase.length)];
        password += lowercase[Math.floor(Math.random()* lowercase.length)];
        password += number[Math.floor(Math.random()* number.length)];
        password += symbol[Math.floor(Math.random()* symbol.length)];

        while(length>password.length){
             password += allChars[Math.floor(Math.random( )* allChars.length)];
        }
        passwordbox.value = password;
    }
      function copypassword(){

        navigator.clipboard.writeText(passwordbox.value)
         .then(()=> {
            alert("password copied to clipboard!");

         })
            .catch(err => {
                console.error("Failed to copy :",err);

            });
      }