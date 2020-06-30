class Character extends Animation {
  constructor(matriz, image, x, variationY, length, heightChar, widthSprite, heightSprite) {
    super(matriz, image, x, variationY, length, heightChar, widthSprite, heightSprite)
    
    this.variationY = variationY;
    this.initialY = height - heightChar - this.variationY;
    this.y = this.initialY;

    this.gravity = 3;
    this.jumpHeight = -25
    this.jumpSpeed = 0;
    this.maxJumps = 2;
    this.jumpCount = 0;
    this.invincible = false;
  }

  jump() {
    this.jumpCount++;

    if (this.y === this.initialY) {
      this.jumpCount = 0;
      
    }

    if (this.jumpCount < this.maxJumps) {
      this.jumpSpeed = this.jumpHeight;
      this.image = characterJumpImage;
      this.matriz = matrizCharacterJump;  
      this.heightSprite = 208;

    }
        
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if (this.y > this.initialY) {
      this.y = this.initialY;
      this.image = characterImage;
          this.matriz = matrizCharacter;  
          this.heightSprite = 200;
    }
  }
  
  isInvincible() {
    this.invincible = true;
    
      if (this.y < this.initialY) {
        this.image = characterJumpDamageImage;
      } else {
        this.image = characterRunDamageImage;
      
      }
    
    setTimeout(() => {
      this.invincible = false
      this.image = characterImage;
      
    }, 1000);
  }

  isColliding(enemy) {
    // noFill();
    // circle( this.x, this.y, this.length, this.heightChar);
    // noFill();
    // circle(enemy.x, enemy.y, enemy.length, enemy.heightChar);
    
    if(this.invincible) return false;
  
    
    const precision = .5;  
    const collision = collideRectRect(
      this.x,
      this.y,
      this.length * precision,
      this.heightChar * precision,
      enemy.x,
      enemy.y,
      enemy.length * precision,
      enemy.heightChar * precision
    );

    return collision;
  }

}