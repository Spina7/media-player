import MediaPlayer from "./MediaPlayer";

class AutoPause {
  private threshold: number;
  private pausedByVisibility: boolean;
  player: MediaPlayer;
  constructor() {
    this.pausedByVisibility = false;
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  private handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
  private handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      if (this.pausedByVisibility) {
        this.pausedByVisibility = false;
        this.player.play();
      }
    } else {
      if (!this.player.media.paused) {
        this.pausedByVisibility = true;
        this.player.pause();
      }
    }
  }
}

export default AutoPause;
