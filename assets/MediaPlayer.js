class MediaPlayer {
  constructor(config) {
    this.media = config.el;
  }
  play = () => {
    this.media.paused ? this.media.play() : this.media.pause();
  };
}

export default MediaPlayer;
