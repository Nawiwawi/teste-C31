class Ground {
 //passo 1
 //passo 2
 constructor (x, y, width, height) {
 //passo 3   
  var options = { 
    isStatic: true
   }
    //passo 4
    this.width = width;
    this.height = height;
    //passo 5
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    //passo 6
    World.add(world, this.body);
 }





display() {
    var pos = this.body.position;
    //passo 7
    push();
    translate(pos.x, pos.y);
    fill("brown");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    //passo 8
    pop();
  }
}
//Siga os passos abaixo para criar a classe Ground
//1. Utilize o código 'class' para criar a classe Ground
//2.Defina o constructor com x,y, largura e altura
//3.Crie a variável 'options' e deixe o chão estático
//4.Utilize 'this' nas variáveis width e height
//5.Utilize o código 'this.body = Bodies.rectangle(x, y, this.width, this.height, options);' para criar um retângulo na tela
//6.Adicione a variável 'this.body' no mundo
//7.Utilize o código que adiciona uma nova configuração
//8.Utilize o código que reverte para a configuração antiga


