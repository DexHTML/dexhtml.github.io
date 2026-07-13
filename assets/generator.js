(()=>{
  const byIdNP=id=>document.getElementById(id);
  const form=byIdNP('form');
  const result=byIdNP('result');
  const status=byIdNP('status');
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const item=byIdNP('item').value.trim();
    const condition=byIdNP('condition').value.toLowerCase();
    const benefits=byIdNP('benefits').value.trim();
    const defects=byIdNP('defects').value.trim();
    const reason=byIdNP('reason').value.trim();
    const city=byIdNP('city').value.trim();
    const title=(item+' — '+condition).slice(0,50);
    result.textContent=title+'\n\nПродаю '+item+'. Состояние: '+condition+'.'
      +(benefits?'\n\nПлюсы: '+benefits+'.':'')
      +(defects?'\n\nИз нюансов: '+defects+'.':'\n\nСкрытых недостатков нет.')
      +(reason?'\n\nПричина продажи: '+reason+'.':'')
      +(city?'\n\n'+city+'.':'')
      +'\n\nЕсли остались вопросы — напишите, отвечу и при необходимости пришлю дополнительные фото.';
    status.textContent='Готово — проверьте факты и добавьте цену.';
  });
  byIdNP('copy').addEventListener('click',async()=>{
    if(result.textContent.startsWith('Здесь')) return;
    try{await navigator.clipboard.writeText(result.textContent);status.textContent='Текст скопирован ✓';}
    catch(error){status.textContent='Выделите текст и скопируйте вручную.';}
  });
})();
