const video = document.querySelector("video");
const button = document.querySelector("button");

class MediaPlayer {
  constructor(config) {
    this.media = config.el;
  }
  play = () => {
    this.media.paused ? this.media.play() : this.media.pause();
  };
}
const player = new MediaPlayer({ el: video });
button.onclick = () => player.play();
