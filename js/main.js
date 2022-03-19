'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36','9','15','17','18','22','25','31','1','5','8','15','18','26','36','8','17','21','26','27','29','31','2','8','10','21','24','26','35','5','17','20','21','31','34','35','2','15','22','25','28','33','37','2','7','12','15','21','23','30','2','21','26','27','32','33','34','7','21','24','29','32','36','37','3','5','8','13','26','30','37','1','7','9','12','15','29','32','4','22','25','27','28','30','33','7','11','12','14','19','21','33','11','15','16','17','18','27','29','1','5','8','26','28','32','36','6','13','14','16','19','30','32','15','21','22','23','27','28','37','5','10','17','18','19','22','32','1','3','6','9','26','29','31','4','13','16','21','32','34','37','8','10','14','15','23','25','26','5','6','21','22','26','31','32','3','5','7','11','15','17','25','10','11','12','17','29','34','37','14','17','20','25','32','33','36','5','10','13','24','29','30','35','7','11','12','17','19','20','26','2','12','17','24','28','30','32','6','11','14','27','30','32','35','3','6','16','22','31','34','35','11','13','26','27','31','33','37','1','2','6','8','30','31','33','2','9','14','20','22','34','35','5','6','12','19','25','30','35','1','7','9','11','29','31','32','1','9','21','23','30','35','36','9','15','18','26','28','32','37','4','5','11','13','24','32','34','3','11','14','21','26','29','34','10','13','17','18','22','28','37','4','5','13','18','23','27','32','8','9','10','15','16','30','31','4','8','12','13','23','32','37','3','8','16','21','25','36','37','3','10','16','18','19','34','35','14','20','22','29','31','33','34','4','11','12','21','23','27','36','1','2','18','21','26','29','37','13','15','16','24','30','31','37','16','18','19','21','29','30','35','19','21','25','26','28','30','31','1','2','5','16','18','21','29','3','10','16','17','24','32','36','4','8','13','16','25','30','32','2','6','8','12','19','20','29','7','9','12','17','20','26','29','4','5','9','14','18','30','35','7','10','12','17','23','28','34','20','24','29','31','33','34','35','2','7','8','11','14','23','31','2','4','7','8','10','20','29','5','6','9','23','27','28','30','12','13','22','23','24','28','29','1','3','4','5','16','21','28','5','15','19','23','30','34','35','1','3','5','7','27','29','33','2','21','28','29','30','32','36','3','4','15','23','27','30','36','1','2','3','6','24','28','30','9','15','26','29','32','34','36','11','12','14','19','26','27','33','6','10','16','21','27','28','35','4','7','8','9','24','28','30','2','10','14','17','23','25','35','5','6','9','13','16','21','23','2','3','5','22','34','36','37','12','17','21','24','29','31','36','2','14','19','20','21','22','31','2','5','13','20','21','23','28','1','9','13','15','25','30','33','2','4','8','9','15','23','25','4','8','11','25','28','29','30','4','5','8','10','16','19','33','1','6','11','16','17','18','21','11','13','16','18','26','31','36','1','10','11','14','17','18','28','6','7','12','15','19','35','37','2','3','16','17','24','26','28','6','8','13','22','26','32','36','9','12','13','19','23','33','34','3','8','15','18','27','29','37','1','4','17','24','29','33','36','4','6','7','23','24','32','35','1','16','18','19','25','30','34','2','13','19','22','32','35','37','5','6','10','11','20','28','36','7','8','10','13','14','19','37','4','14','19','22','24','29','34','7','13','19','23','25','26','30','2','6','11','23','26','31','34','2','3','8','15','34','35','36','2','15','16','17','23','31','33','4','6','7','8','24','31','37','3','4','6','15','27','28','29','1','2','9','18','21','27','33','2','5','6','15','23','27','30','2','9','11','14','20','21','36','3','5','24','26','29','30','34','8','11','12','17','24','26','27','3','4','7','8','15','24','29','1','4','5','8','20','23','35','8','10','22','24','26','32','34','1','4','14','16','20','33','36','1','3','5','10','18','22','23','4','12','14','17','23','30','36','4','23','26','27','28','32','36','5','6','12','16','17','20','33','1','6','7','8','23','32','33','5','8','12','13','21','30','35','3','7','9','15','16','23','34','5','10','11','21','28','31','37','4','10','12','15','27','32','33','4','8','19','24','28','30','32','4','15','16','17','20','29','36','4','7','12','22','23','24','28','1','11','25','28','31','33','37','7','11','15','17','18','25','35','2','7','13','15','24','34','35','13','17','20','22','28','29','37','9','10','18','21','27','33','35','1','6','13','29','34','35','37','11','12','18','19','20','31','32','12','16','23','25','27','30','32','5','13','14','15','16','24','31','4','9','15','17','19','35','37','4','13','18','29','32','34','36','3','10','23','25','26','28','30','5','6','10','14','24','28','36','2','4','7','9','21','29','37','2','5','10','18','21','24','27','1','3','10','18','28','31','35','1','3','16','20','25','27','34','1','11','21','26','28','32','35','8','16','23','28','29','35','36','6','7','10','11','22','26','35','3','10','20','21','22','26','30','8','9','12','18','20','28','31','3','4','10','14','25','29','30','1','3','11','26','28','34','36','2','8','9','13','14','18','37','1','5','7','14','15','25','35','4','5','15','25','26','29','32','2','5','11','14','17','30','32','13','19','20','27','28','29','30','1','8','13','14','18','30','34','9','11','14','21','22','23','24','7','13','14','16','22','24','35','3','9','11','13','19','25','33','13','17','22','24','27','28','35','1','2','11','16','25','35','36','11','12','21','23','28','36','37','1','4','8','27','28','29','31','2','3','11','12','22','35','36','7','9','11','15','16','22','37','3','15','19','20','26','28','33','6','10','12','19','21','22','30','3','8','9','13','17','27','33','2','6','7','8','28','30','36','6','17','20','21','24','30','32','4','12','22','30','31','35','36','7','8','9','24','28','30','33','6','7','10','15','27','35','36','4','6','7','9','15','17','37','8','13','26','27','28','29','37','6','8','13','14','20','25','27','9','14','23','27','28','31','32','9','10','20','28','31','34','37','5','8','9','24','27','28','30','3','6','8','14','15','25','36','2','16','18','26','32','35','37','2','4','13','16','21','30','37','2','16','18','26','27','34','35','1','3','5','8','29','34','36','1','2','15','17','18','22','36','1','6','11','14','19','28','35','4','10','13','16','17','21','27','10','12','15','23','28','30','35','2','4','8','23','26','27','32','5','7','11','19','24','27','30','1','15','20','23','25','31','32','3','4','12','17','32','34','36','7','10','14','16','20','30','31','3','7','13','15','17','21','30','4','9','20','28','30','34','35','8','9','13','14','24','32','34','10','17','24','27','30','33','37','13','19','21','25','27','32','35','2','5','17','20','21','32','33','9','16','18','21','23','34','35','3','11','12','13','17','26','35','2','10','18','30','31','32','36','6','12','14','18','21','27','28','1','3','8','14','28','29','33','2','9','13','18','22','32','36','10','12','18','28','29','30','35','4','10','25','27','28','33','34','1','5','7','12','15','24','25','1','9','11','16','20','30','34','1','4','15','19','22','23','31','6','7','14','20','27','31','34','9','10','13','15','21','22','24','8','12','17','21','23','24','31','7','9','10','16','20','28','37','2','4','19','21','24','28','35','2','9','13','18','22','24','26','4','9','16','19','22','33','34','5','9','16','26','28','29','32','3','6','7','30','32','36','37','10','14','17','21','23','27','31','1','2','8','24','32','36','37','8','14','17','18','20','22','34','2','7','8','12','14','23','27','1','2','6','16','28','30','31','3','13','20','23','31','35','36','9','11','14','15','16','18','27','14','20','27','29','30','31','37','1','3','5','7','10','26','36','3','9','12','14','19','20','36','1','5','10','20','21','28','30','3','5','6','9','27','32','36','1','2','6','21','23','27','28','5','20','21','27','30','31','36','7','9','19','22','24','27','30'];

    btn.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn02=document.getElementById('btn02');

  btn02.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36','9','15','17','18','22','25','31','1','5','8','15','18','26','36','8','17','21','26','27','29','31','2','8','10','21','24','26','35','5','17','20','21','31','34','35','2','15','22','25','28','33','37','2','7','12','15','21','23','30','2','21','26','27','32','33','34','7','21','24','29','32','36','37','3','5','8','13','26','30','37','1','7','9','12','15','29','32','4','22','25','27','28','30','33','7','11','12','14','19','21','33','11','15','16','17','18','27','29','1','5','8','26','28','32','36','6','13','14','16','19','30','32','15','21','22','23','27','28','37','5','10','17','18','19','22','32','1','3','6','9','26','29','31','4','13','16','21','32','34','37','8','10','14','15','23','25','26','5','6','21','22','26','31','32','3','5','7','11','15','17','25','10','11','12','17','29','34','37','14','17','20','25','32','33','36','5','10','13','24','29','30','35','7','11','12','17','19','20','26','2','12','17','24','28','30','32','6','11','14','27','30','32','35','3','6','16','22','31','34','35','11','13','26','27','31','33','37','1','2','6','8','30','31','33','2','9','14','20','22','34','35','5','6','12','19','25','30','35','1','7','9','11','29','31','32','1','9','21','23','30','35','36','9','15','18','26','28','32','37','4','5','11','13','24','32','34','3','11','14','21','26','29','34','10','13','17','18','22','28','37','4','5','13','18','23','27','32','8','9','10','15','16','30','31','4','8','12','13','23','32','37','3','8','16','21','25','36','37','3','10','16','18','19','34','35','14','20','22','29','31','33','34','4','11','12','21','23','27','36','1','2','18','21','26','29','37','13','15','16','24','30','31','37','16','18','19','21','29','30','35','19','21','25','26','28','30','31','1','2','5','16','18','21','29','3','10','16','17','24','32','36','4','8','13','16','25','30','32','2','6','8','12','19','20','29','7','9','12','17','20','26','29','4','5','9','14','18','30','35','7','10','12','17','23','28','34','20','24','29','31','33','34','35','2','7','8','11','14','23','31','2','4','7','8','10','20','29','5','6','9','23','27','28','30','12','13','22','23','24','28','29','1','3','4','5','16','21','28','5','15','19','23','30','34','35','1','3','5','7','27','29','33','2','21','28','29','30','32','36','3','4','15','23','27','30','36','1','2','3','6','24','28','30','9','15','26','29','32','34','36','11','12','14','19','26','27','33','6','10','16','21','27','28','35','4','7','8','9','24','28','30','2','10','14','17','23','25','35','5','6','9','13','16','21','23','2','3','5','22','34','36','37','12','17','21','24','29','31','36','2','14','19','20','21','22','31','2','5','13','20','21','23','28','1','9','13','15','25','30','33','2','4','8','9','15','23','25','4','8','11','25','28','29','30','4','5','8','10','16','19','33','1','6','11','16','17','18','21','11','13','16','18','26','31','36','1','10','11','14','17','18','28','6','7','12','15','19','35','37','2','3','16','17','24','26','28','6','8','13','22','26','32','36','9','12','13','19','23','33','34','3','8','15','18','27','29','37','1','4','17','24','29','33','36','4','6','7','23','24','32','35','1','16','18','19','25','30','34','2','13','19','22','32','35','37','5','6','10','11','20','28','36','7','8','10','13','14','19','37','4','14','19','22','24','29','34','7','13','19','23','25','26','30','2','6','11','23','26','31','34','2','3','8','15','34','35','36','2','15','16','17','23','31','33','4','6','7','8','24','31','37','3','4','6','15','27','28','29','1','2','9','18','21','27','33','2','5','6','15','23','27','30','2','9','11','14','20','21','36','3','5','24','26','29','30','34','8','11','12','17','24','26','27','3','4','7','8','15','24','29','1','4','5','8','20','23','35','8','10','22','24','26','32','34','1','4','14','16','20','33','36','1','3','5','10','18','22','23','4','12','14','17','23','30','36','4','23','26','27','28','32','36','5','6','12','16','17','20','33','1','6','7','8','23','32','33','5','8','12','13','21','30','35','3','7','9','15','16','23','34','5','10','11','21','28','31','37','4','10','12','15','27','32','33','4','8','19','24','28','30','32','4','15','16','17','20','29','36','4','7','12','22','23','24','28','1','11','25','28','31','33','37','7','11','15','17','18','25','35','2','7','13','15','24','34','35','13','17','20','22','28','29','37','9','10','18','21','27','33','35','1','6','13','29','34','35','37','11','12','18','19','20','31','32','12','16','23','25','27','30','32','5','13','14','15','16','24','31','4','9','15','17','19','35','37','4','13','18','29','32','34','36','3','10','23','25','26','28','30','5','6','10','14','24','28','36','2','4','7','9','21','29','37','2','5','10','18','21','24','27','1','3','10','18','28','31','35','1','3','16','20','25','27','34','1','11','21','26','28','32','35','8','16','23','28','29','35','36','6','7','10','11','22','26','35','3','10','20','21','22','26','30','8','9','12','18','20','28','31','3','4','10','14','25','29','30','1','3','11','26','28','34','36','2','8','9','13','14','18','37','1','5','7','14','15','25','35','4','5','15','25','26','29','32','2','5','11','14','17','30','32','13','19','20','27','28','29','30','1','8','13','14','18','30','34','9','11','14','21','22','23','24','7','13','14','16','22','24','35','3','9','11','13','19','25','33','13','17','22','24','27','28','35','1','2','11','16','25','35','36','11','12','21','23','28','36','37','1','4','8','27','28','29','31','2','3','11','12','22','35','36','7','9','11','15','16','22','37','3','15','19','20','26','28','33','6','10','12','19','21','22','30','3','8','9','13','17','27','33','2','6','7','8','28','30','36','6','17','20','21','24','30','32','4','12','22','30','31','35','36','7','8','9','24','28','30','33','6','7','10','15','27','35','36','4','6','7','9','15','17','37','8','13','26','27','28','29','37','6','8','13','14','20','25','27','9','14','23','27','28','31','32','9','10','20','28','31','34','37','5','8','9','24','27','28','30','3','6','8','14','15','25','36','2','16','18','26','32','35','37','2','4','13','16','21','30','37','2','16','18','26','27','34','35','1','3','5','8','29','34','36','1','2','15','17','18','22','36','1','6','11','14','19','28','35','4','10','13','16','17','21','27','10','12','15','23','28','30','35','2','4','8','23','26','27','32','5','7','11','19','24','27','30','1','15','20','23','25','31','32','3','4','12','17','32','34','36','7','10','14','16','20','30','31','3','7','13','15','17','21','30','4','9','20','28','30','34','35','8','9','13','14','24','32','34','10','17','24','27','30','33','37','13','19','21','25','27','32','35','2','5','17','20','21','32','33','9','16','18','21','23','34','35','3','11','12','13','17','26','35','2','10','18','30','31','32','36','6','12','14','18','21','27','28','1','3','8','14','28','29','33','2','9','13','18','22','32','36','10','12','18','28','29','30','35','4','10','25','27','28','33','34','1','5','7','12','15','24','25','1','9','11','16','20','30','34','1','4','15','19','22','23','31','6','7','14','20','27','31','34','9','10','13','15','21','22','24','8','12','17','21','23','24','31','7','9','10','16','20','28','37','2','4','19','21','24','28','35','2','9','13','18','22','24','26','4','9','16','19','22','33','34','5','9','16','26','28','29','32','3','6','7','30','32','36','37','10','14','17','21','23','27','31','1','2','8','24','32','36','37','8','14','17','18','20','22','34','2','7','8','12','14','23','27','1','2','6','16','28','30','31','3','13','20','23','31','35','36','9','11','14','15','16','18','27','14','20','27','29','30','31','37','1','3','5','7','10','26','36','3','9','12','14','19','20','36','1','5','10','20','21','28','30','3','5','6','9','27','32','36','1','2','6','21','23','27','28','5','20','21','27','30','31','36','7','9','19','22','24','27','30'];

    btn02.textContent=results[Math.floor(Math.random()*results.length)];
  });

  const btn03=document.getElementById('btn03');

  btn03.addEventListener('click',()=>{
    const results=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','7','14','19','27','31','35','36','9','15','17','18','22','25','31','1','5','8','15','18','26','36','8','17','21','26','27','29','31','2','8','10','21','24','26','35','5','17','20','21','31','34','35','2','15','22','25','28','33','37','2','7','12','15','21','23','30','2','21','26','27','32','33','34','7','21','24','29','32','36','37','3','5','8','13','26','30','37','1','7','9','12','15','29','32','4','22','25','27','28','30','33','7','11','12','14','19','21','33','11','15','16','17','18','27','29','1','5','8','26','28','32','36','6','13','14','16','19','30','32','15','21','22','23','27','28','37','5','10','17','18','19','22','32','1','3','6','9','26','29','31','4','13','16','21','32','34','37','8','10','14','15','23','25','26','5','6','21','22','26','31','32','3','5','7','11','15','17','25','10','11','12','17','29','34','37','14','17','20','25','32','33','36','5','10','13','24','29','30','35','7','11','12','17','19','20','26','2','12','17','24','28','30','32','6','11','14','27','30','32','35','3','6','16','22','31','34','35','11','13','26','27','31','33','37','1','2','6','8','30','31','33','2','9','14','20','22','34','35','5','6','12','19','25','30','35','1','7','9','11','29','31','32','1','9','21','23','30','35','36','9','15','18','26','28','32','37','4','5','11','13','24','32','34','3','11','14','21','26','29','34','10','13','17','18','22','28','37','4','5','13','18','23','27','32','8','9','10','15','16','30','31','4','8','12','13','23','32','37','3','8','16','21','25','36','37','3','10','16','18','19','34','35','14','20','22','29','31','33','34','4','11','12','21','23','27','36','1','2','18','21','26','29','37','13','15','16','24','30','31','37','16','18','19','21','29','30','35','19','21','25','26','28','30','31','1','2','5','16','18','21','29','3','10','16','17','24','32','36','4','8','13','16','25','30','32','2','6','8','12','19','20','29','7','9','12','17','20','26','29','4','5','9','14','18','30','35','7','10','12','17','23','28','34','20','24','29','31','33','34','35','2','7','8','11','14','23','31','2','4','7','8','10','20','29','5','6','9','23','27','28','30','12','13','22','23','24','28','29','1','3','4','5','16','21','28','5','15','19','23','30','34','35','1','3','5','7','27','29','33','2','21','28','29','30','32','36','3','4','15','23','27','30','36','1','2','3','6','24','28','30','9','15','26','29','32','34','36','11','12','14','19','26','27','33','6','10','16','21','27','28','35','4','7','8','9','24','28','30','2','10','14','17','23','25','35','5','6','9','13','16','21','23','2','3','5','22','34','36','37','12','17','21','24','29','31','36','2','14','19','20','21','22','31','2','5','13','20','21','23','28','1','9','13','15','25','30','33','2','4','8','9','15','23','25','4','8','11','25','28','29','30','4','5','8','10','16','19','33','1','6','11','16','17','18','21','11','13','16','18','26','31','36','1','10','11','14','17','18','28','6','7','12','15','19','35','37','2','3','16','17','24','26','28','6','8','13','22','26','32','36','9','12','13','19','23','33','34','3','8','15','18','27','29','37','1','4','17','24','29','33','36','4','6','7','23','24','32','35','1','16','18','19','25','30','34','2','13','19','22','32','35','37','5','6','10','11','20','28','36','7','8','10','13','14','19','37','4','14','19','22','24','29','34','7','13','19','23','25','26','30','2','6','11','23','26','31','34','2','3','8','15','34','35','36','2','15','16','17','23','31','33','4','6','7','8','24','31','37','3','4','6','15','27','28','29','1','2','9','18','21','27','33','2','5','6','15','23','27','30','2','9','11','14','20','21','36','3','5','24','26','29','30','34','8','11','12','17','24','26','27','3','4','7','8','15','24','29','1','4','5','8','20','23','35','8','10','22','24','26','32','34','1','4','14','16','20','33','36','1','3','5','10','18','22','23','4','12','14','17','23','30','36','4','23','26','27','28','32','36','5','6','12','16','17','20','33','1','6','7','8','23','32','33','5','8','12','13','21','30','35','3','7','9','15','16','23','34','5','10','11','21','28','31','37','4','10','12','15','27','32','33','4','8','19','24','28','30','32','4','15','16','17','20','29','36','4','7','12','22','23','24','28','1','11','25','28','31','33','37','7','11','15','17','18','25','35','2','7','13','15','24','34','35','13','17','20','22','28','29','37','9','10','18','21','27','33','35','1','6','13','29','34','35','37','11','12','18','19','20','31','32','12','16','23','25','27','30','32','5','13','14','15','16','24','31','4','9','15','17','19','35','37','4','13','18','29','32','34','36','3','10','23','25','26','28','30','5','6','10','14','24','28','36','2','4','7','9','21','29','37','2','5','10','18','21','24','27','1','3','10','18','28','31','35','1','3','16','20','25','27','34','1','11','21','26','28','32','35','8','16','23','28','29','35','36','6','7','10','11','22','26','35','3','10','20','21','22','26','30','8','9','12','18','20','28','31','3','4','10','14','25','29','30','1','3','11','26','28','34','36','2','8','9','13','14','18','37','1','5','7','14','15','25','35','4','5','15','25','26','29','32','2','5','11','14','17','30','32','13','19','20','27','28','29','30','1','8','13','14','18','30','34','9','11','14','21','22','23','24','7','13','14','16','22','24','35','3','9','11','13','19','25','33','13','17','22','24','27','28','35','1','2','11','16','25','35','36','11','12','21','23','28','36','37','1','4','8','27','28','29','31','2','3','11','12','22','35','36','7','9','11','15','16','22','37','3','15','19','20','26','28','33','6','10','12','19','21','22','30','3','8','9','13','17','27','33','2','6','7','8','28','30','36','6','17','20','21','24','30','32','4','12','22','30','31','35','36','7','8','9','24','28','30','33','6','7','10','15','27','35','36','4','6','7','9','15','17','37','8','13','26','27','28','29','37','6','8','13','14','20','25','27','9','14','23','27','28','31','32','9','10','20','28','31','34','37','5','8','9','24','27','28','30','3','6','8','14','15','25','36','2','16','18','26','32','35','37','2','4','13','16','21','30','37','2','16','18','26','27','34','35','1','3','5','8','29','34','36','1','2','15','17','18','22','36','1','6','11','14','19','28','35','4','10','13','16','17','21','27','10','12','15','23','28','30','35','2','4','8','23','26','27','32','5','7','11','19','24','27','30','1','15','20','23','25','31','32','3','4','12','17','32','34','36','7','10','14','16','20','30','31','3','7','13','15','17','21','30','4','9','20','28','30','34','35','8','9','13','14','24','32','34','10','17','24','27','30','33','37','13','19','21','25','27','32','35','2','5','17','20','21','32','33','9','16','18','21','23','34','35','3','11','12','13','17','26','35','2','10','18','30','31','32','36','6','12','14','18','21','27','28','1','3','8','14','28','29','33','2','9','13','18','22','32','36','10','12','18','28','29','30','35','4','10','25','27','28','33','34','1','5','7','12','15','24','25','1','9','11','16','20','30','34','1','4','15','19','22','23','31','6','7','14','20','27','31','34','9','10','13','15','21','22','24','8','12','17','21','23','24','31','7','9','10','16','20','28','37','2','4','19','21','24','28','35','2','9','13','18','22','24','26','4','9','16','19','22','33','34','5','9','16','26','28','29','32','3','6','7','30','32','36','37','10','14','17','21','23','27','31','1','2','8','24','32','36','37','8','14','17','18','20','22','34','2','7','8','12','14','23','27','1','2','6','16','28','30','31','3','13','20','23','31','35','36','9','11','14','15','16','18','27','14','20','27','29','30','31','37','1','3','5','7','10','26','36','3','9','12','14','19','20','36','1','5','10','20','21','28','30','3','5','6','9','27','32','36','1','2','6','21','23','27','28','5','20','21','27','30','31','36','7','9','19','22','24','27','30'];

    btn03.textContent=results[Math.floor(Math.random()*results.length)];
  });
}
