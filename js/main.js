'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['12','25','33','37'];

    btn.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn02=document.getElementById('btn02');

  btn02.addEventListener('click',()=>{
    const results=['19','2','16','20','5','18','3','22','1'];

    btn02.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn03=document.getElementById('btn03');

  btn03.addEventListener('click',()=>{
    const results=['14','24','28','29','7','6','10','34','23','17','11','36','8','31','32','27','4','26'];

    btn03.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn04=document.getElementById('btn04');

  btn04.addEventListener('click',()=>{
    const results=['35','21','9','13','30','15'];

    btn04.textContent=results[Math.floor(Math.random()*results.length)];
  });
}
