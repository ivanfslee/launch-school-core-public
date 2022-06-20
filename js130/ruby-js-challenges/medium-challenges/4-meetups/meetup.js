//936-1037 (total time 1 hour 1 min)

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.dayOfMonth = null;
  }

  static placeNums = {
    'first': 1,
    'second': 2, 
    'third': 3,
    'fourth': 4,
    'fifth': 5,
  }

  static dayOfWeekMap = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
  }

  day(dayOfWeek, place) {
    if (!(place.toLowerCase() in Meetup.placeNums)) {

      if (place.toLowerCase() === 'last') {
        return this.findLast(dayOfWeek);
      } else if (place.toLowerCase() === 'teenth') {
        return this.findTeenth(dayOfWeek);
      }
    }

    let countToMatch = Meetup.placeNums[place.toLowerCase()];
    let dayToMatch = Meetup.dayOfWeekMap[dayOfWeek.toLowerCase()];
    let matchCount = 0;
    let lastDateOfMonth = new Date(this.year, this.month, 0).getDate();

    for (let date = 1; date <= lastDateOfMonth; date += 1) {
      let day = new Date(this.year, this.month - 1, date);
      let dayOfWeek = day.getDay();

      if (dayOfWeek === dayToMatch) {
        matchCount += 1;
      }

      if (matchCount === countToMatch) {
        this.dayOfMonth = date;
        return this;
      }

    }
    return null;
  }

  findTeenth(weekdayToMatch) {
    weekdayToMatch = Meetup.dayOfWeekMap[weekdayToMatch.toLowerCase()];

    const TEENTH_DATES = [13, 14, 15, 16, 17, 18, 19];

    let lastDateOfMonth = new Date(this.year, this.month, 0).getDate();
    for (let date = 1; date <= lastDateOfMonth; date += 1) {
      let day = new Date(this.year, this.month - 1, date);
      let dayOfWeek = day.getDay();

      if (dayOfWeek === weekdayToMatch && TEENTH_DATES.includes(date)) {
        this.dayOfMonth = date;
        return this;
      } 
    }
    return null;
  }

  findLast(weekdayToMatch) {
    weekdayToMatch = Meetup.dayOfWeekMap[weekdayToMatch.toLowerCase()];

    let lastDateOfMonth = new Date(this.year, this.month, 0).getDate();
    for (let date = lastDateOfMonth; date >= 1; date -= 1) {
      let day = new Date(this.year, this.month - 1, date);
      let dayOfWeek = day.getDay();
      if (dayOfWeek === weekdayToMatch) {
        this.dayOfMonth = date;
        return this;
      }
    }
    return null;
  }

  toString() {
    return new Date(this.year, this.month - 1, this.dayOfMonth).toString();
  }
}

module.exports = Meetup;