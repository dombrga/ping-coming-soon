
const btn = document.querySelector('#btn')
const error = document.querySelector('#error')
btn.addEventListener('click', e => checkEmail(e))

function checkEmail(e) {
  e.preventDefault()
  const email = document.querySelector('#email')
  const emailAdd = email.value
  console.log(emailAdd)
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  // if empty
  if(!emailAdd) {
    error.textContent = 'Whoops! It looks like you forgot to add your email.'
    error.style.display = 'inline-block'
    return
  } 
  else {
    // if emailAdd is invalid
    if(!re.test(emailAdd)) {
      error.textContent = 'Please provide a valid email address.'
      error.style.display = 'inline-block'
      return
    }
  }

  // if email is valid (default)
  error.style.display = 'none'
}