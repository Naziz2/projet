let toggleBtn = document.getElementById('toggle-btn');
let nom=document.getElementsByClassName("footer");
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') {
   enableDarkMode();
}

toggleBtn.onclick = () => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') {
      enableDarkMode();
   } else {
      disableDarkMode();
   }
};


let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
}



let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}


