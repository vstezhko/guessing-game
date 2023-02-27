class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.candidate = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.candidate = Math.ceil((this.min + this.max) / 2);
        return this.candidate;
    }

    lower() {
        this.max = this.candidate;
    }

    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;
