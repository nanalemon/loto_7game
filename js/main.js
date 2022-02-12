'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36'];

    btn.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn02=document.getElementById('btn02');

  btn02.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36'];

    btn02.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn03=document.getElementById('btn03');

  btn03.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36'];

    btn03.textContent=results[Math.floor(Math.random()*results.length)];
  });
}
