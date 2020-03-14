const slide = {
    showNext: document.getElementById("show_next"),
    showPrev: document.getElementById("show_prev"),
    imgSrc: document.getElementById("img_src"),
    index: 0,
    array: [],
  
    showNextBtnClick: function() {
      this.index++;
      this.imgSrc.src = this.array[this.index];
      this.showPrev.disabled = false;
  
      if (this.index === this.array.length - 1) {
        this.showNext.disabled = true;
      }
    },
  
    showPrevBtnClick: function() {
      this.index--;
      this.imgSrc.src = this.array[this.index];
      this.showNext.disabled = false;
      if (this.index === 0) {
        this.showPrev.disabled = true;
      }
    },
    start: function() {
      let tais = this;
  
      this.showNext.addEventListener("click", function() {
        tais.showNextBtnClick();
      });
      this.showPrev.addEventListener("click", function() {
        tais.showPrevBtnClick();
      });
      this.showPrev.disabled = true;
      this.array.push("./img/img_1.png");
      this.array.push("./img/img_2.png");
      this.array.push("./img/img_3.png");
      this.array.push("./img/img_4.png");
      this.array.push("./img/img_5.png");
    }
  };
  slide.start();
  