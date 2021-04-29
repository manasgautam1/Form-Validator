let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let container = document.getElementById('container');

form.addEventListener('submit', function(event){
  event.preventDefault();

  let flag1 = false, flag2 = false, flag3 = false, flag4 = false;
  //Username
  if(username.value.length < 3){
      username.classList.add('danger');
      document.getElementById('username-message').classList.remove('none');

      setTimeout(function(){
        username.classList.remove('danger');
        document.getElementById('username-message').classList.add('none');
      }, 3000);
  }
  else{
    flag1 = true;
    username.classList.add('success');
    setTimeout(function(){
      username.classList.remove('success');
    },5000);
  }


  //email
  let a=0; b=0;
  for(let i=0; i<email.value.length; i++){
    if(email.value[i]==='@')
    a++;
    if(email.value[i]=='.')
    b++;
  }
  if(a===1 && b===1){
    flag2 = true;
    email.classList.add('success');
    setTimeout(function(){
      email.classList.remove('success');
    },5000);
  }
  else{
    email.classList.add('danger');
    document.getElementById('email-message').classList.remove('none');

    setTimeout(function(){
      email.classList.remove('danger');
      document.getElementById('email-message').classList.add('none');
    }, 3000);
  }

  //password1
  if(password1.value.length < 6){
    password1.classList.add('danger');
    document.getElementById('password1-message').classList.remove('none');

    setTimeout(function(){
      password1.classList.remove('danger');
      document.getElementById('password1-message').classList.add('none');
      }, 3000);
  }
  else{
    flag3 = true;
    password1.classList.add('success');
    setTimeout(function(){
      password1.classList.remove('success');
    },5000);
  }

  //password2
  if(password2.value != password1.value || password2.value < 6 ){
    password2.classList.add('danger');
    document.getElementById('password2-message').classList.remove('none');

    setTimeout(function(){
      password2.classList.remove('danger');
      document.getElementById('password2-message').classList.add('none');
      }, 3000);
  }
  else{
    flag4 = true;
    password2.classList.add('success');
    setTimeout(function(){
      password2.classList.remove('success');
    },5000);
  }

  if(flag1==true && flag2==true && flag3==true && flag4==true){
    container.classList.add('success');

    setTimeout(function(){
      container.classList.remove('success');
    }, 5000);

    username.value = "";
    email.value = "";
    password1.value = "";
    password2.value = "";
  }


});
