class Component {
  onCreate() {
    this.state = {
      showFront: false
    };
    this.initialPos = {};
    this.initStyle = null;
    this.playingCard = false;
  }

  onMount() {
    this.subscribeTo(document).on("mousemove", ev => {
      if (this.init) {
        this.moveCard(ev);
      }
    });
    this.subscribeTo(document).on("mouseup", ev => {
      if (this.init) {
        this.up(ev);
      }
    });
  }

  showCard(ev) {
    this.setState("showFront", !this.state.showFront);
    this.init = true;
    if (ev.touches && ev.touches.length) {
      this.initPos = { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
    } else {
      this.initPos = { x: ev.clientX, y: ev.clientY };
    }
  }

  moveCard(ev) {
    if (this.animating) return;
    const table = this.input.parentComponent
      .getEl("table-center")
      .getBoundingClientRect();
    let x = null;
    let y = null;
    const el = this.getEl("card");

    if (ev.touches && ev.touches.length) {
      x = ev.touches[0].clientX - this.initPos.x;
      y = ev.touches[0].clientY - this.initPos.y;
    } else {
      x = ev.clientX - this.initPos.x;
      y = ev.clientY - this.initPos.y;
    }

    const isPlaying =
      ev.touches && ev.touches.length ? ev.touches[0].clientY : ev.clientY;
    if (isPlaying < table.top) {
      el.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.3)`;
      this.playingCard = true;
    } else {
      el.style.transform = `translateX(${x}px) translateY(${y}px) scale(1)`;
      this.playingCard = false;
    }
  }

  up() {
    if (this.animating) return;
    if (this.playingCard) {
      this.animating = true;
      const props = {};
      const transfs = this.getEl("card").style.transform.split(" ");
      transfs.forEach(prop => {
        props[prop.split("(")[0]] = prop.split("(")[1].replace(")", "");
      });
    } else {
      const el = this.getEl("card");
      el.style.transform = this.initStyle;
      this.reset();
    }
  }

  reset() {
    this.init = false;
    this.initStyle = null;
    this.initBounding = null;
    this.currentCardIndex = null;
    this.initPos = {};
    this.playingCard = false;
    this.animating = false;
  }
}

module.exports = Component;
