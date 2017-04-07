//var p = document.createElement('p');

/*var a = [1, 2, 3, 4, 5, 50];
console.log(a); //tableau
console.log(a.length); //nbre delement dans le tableau
console.log(a[0]);//premier element du tableau
console.log(a[1]);//deuxieme element du tableau
console.log(a[10]);
console.log(a[a.length -1 ]);//dernier element du tableau
for(var index=0; index < a.length; index++) {
  console.log( index, a[ index ] ) ;
}
a.push(100);
console.log(a);

var b = {
  prop1 :10,
  prop2 :150,
  prop3 :"test"
};
console.log(b); //affiche mon ogbet
console.log(b.prop2);

*/

var b={
  prop1 : 10,
  prop2 : 150,
  prop3 : "test",
  sayHello= function(name){
    console.log("hello"+name);
  }
};

b.sayHello("john");
