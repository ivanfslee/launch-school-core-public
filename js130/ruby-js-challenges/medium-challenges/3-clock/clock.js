//444-528 (44 minutes total)

class Clock {
  constructor(hr, min) {
    this.hour = hr;
    this.minute = min;
  }

  static at(hr, min) {
    if (hr === 0 && min === undefined) {
      return new Clock(24, 0);
    }

    if (min === undefined) {
      min = 0;
    }

    return new Clock(hr, min)
  }

  toString() {
    let hoursStr = String(this.hour).padStart(2, '0');
    let minStr = String(this.minute).padStart(2, '0');
    return hoursStr + ':' + minStr;
  }

  subtract(minutes) {
    const MINUTES_IN_DAY = 1440;
    minutes %= MINUTES_IN_DAY;

    let totalMinutes = (this.hour * 60) + this.minute;
    totalMinutes -= minutes;

    let newHours = Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes - (newHours * 60);

    if (newHours < 0) {
      newHours = 24 + newHours;
    }

    return Clock.at(newHours, newMinutes);
  }

  add(minutes) {
    let addHours = Math.floor(minutes / 60);
    let addMins = minutes - (addHours * 60);
    this.hour = (this.hour + addHours) % 24;
    this.minute += addMins;

    return this;
  }

  isEqual(clockObj) {
    return this.hour === clockObj.hour && this.minute === clockObj.minute;
  }
  
}module.exports = Clock;