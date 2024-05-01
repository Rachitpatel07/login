const showhiddenpass = (password,togglepassword) =>{

    const input = document.getElementById(password),
           iconeye = document.getElementById(togglepassword)
  
           iconeye.addEventListener('click',() =>{

               if(input.type === 'password'){
                
                   input.type = 'text'

                   iconeye.classList.add('ri-eye-line')
                   iconeye.classList.add('ri-eye-off-line')
               }
           })
}