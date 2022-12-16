class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Enter Your Name")
    this.playButton=createButton("play")
    this.titleImg=createImg("assets/title.png","game title")
    this.greeting=createElement("h2")
  }
    setElementsPosition(){
      this.titleImg.position(120,100)
      this.input.position(width/2-110, height/2-110)
      this.playButton.position(width/2-90, height/2-20)
      this.greeting.position(width/2-300,height/2-100)
    }
    hide(){
      this.greeting.hide()
      this.playButton.hide()
      this.input.hide()
    }
    handleMousePressed(){
      this.playButton.mousePressed(()=>{
        this.input.hide()
        this.playButton.hide()
        var message = `hello ${this.input.value()}
        </br> wait for another player to join...`
        this.greeting.html(message)
        playerCount+=1
        player.name=this.input.value()
        player.index=playerCount
        player.updateCount(playerCount)
      })
    }
    display(){
      this.setElementsPosition()
      this.handleMousePressed()
    }
}
