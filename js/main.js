'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36','9','15','17','18','22','25','31','1','5','8','15','18','26','36','8','17','21','26','27','29','31','2','8','10','21','24','26','35','5','17','20','21','31','34','35','2','15','22','25','28','33','37','2','7','12','15','21','23','30','2','21','26','27','32','33','34','7','21','24','29','32','36','37','3','5','8','13','26','30','37','1','7','9','12','15','29','32','4','22','25','27','28','30','33','7','11','12','14','19','21','33','11','15','16','17','18','27','29','1','5','8','26','28','32','36'];

    btn.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn02=document.getElementById('btn02');

  btn02.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36','9','15','17','18','22','25','31','1','5','8','15','18','26','36','8','17','21','26','27','29','31','2','8','10','21','24','26','35','5','17','20','21','31','34','35','2','15','22','25','28','33','37','2','7','12','15','21','23','30','2','21','26','27','32','33','34','7','21','24','29','32','36','37','3','5','8','13','26','30','37','1','7','9','12','15','29','32','4','22','25','27','28','30','33','7','11','12','14','19','21','33','11','15','16','17','18','27','29','1','5','8','26','28','32','36'];

    btn02.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn03=document.getElementById('btn03');

  btn03.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36','9','15','17','18','22','25','31','1','5','8','15','18','26','36','8','17','21','26','27','29','31','2','8','10','21','24','26','35','5','17','20','21','31','34','35','2','15','22','25','28','33','37','2','7','12','15','21','23','30','2','21','26','27','32','33','34','7','21','24','29','32','36','37','3','5','8','13','26','30','37','1','7','9','12','15','29','32','4','22','25','27','28','30','33','7','11','12','14','19','21','33','11','15','16','17','18','27','29','1','5','8','26','28','32','36'];

    btn03.textContent=results[Math.floor(Math.random()*results.length)];
  });
}
