class ResetButton {
  constructor(text, x, y, scene){
    this.text = text;
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeScene());
    this.button.addClass('botao-tela-inicial');
  }
  
  draw(){
    this.button.position(this.x, this.y);
    // this.button.center('horizontal');    
  }
  
  _changeScene(){
    this.button.remove();
    atualScene = this.scene;
    window.location.reload()
  }

  
}