var data = [];
for (var i = 0; i < 50; i++) {
  data.push(50+ Math.random()*150);
}

for ( var i=0; i<data.length;i++){
  console.log(data[i]);
  var div = document.createElement('div');
  div.style.height='18px';
  div.style.background='black';
  div.style.marginBottom= '2px';
  div.style.width=data[i]+'px';

  //creer un p avec document.createElement
  //modifier son style pour que le texte soit blanc (color)
  //contenu du text soit la valeur p= data[i](p.innerText)

  var p = document.createElement('p');
  p.style.color='snow';

  p.innerText= data [i];

  div.appendChild(p);


  document.body.appendChild(div);
}
