(function(){
  var r=document.documentElement, t=document.getElementById('theme');
  try{var s=localStorage.getItem('pfd-theme'); if(s) r.setAttribute('data-theme',s);}catch(e){}
  t.addEventListener('click',function(){
    var d=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var n=d==='dark'?'light':'dark';
    r.setAttribute('data-theme',n);
    try{localStorage.setItem('pfd-theme',n);}catch(e){}
  });
})();
