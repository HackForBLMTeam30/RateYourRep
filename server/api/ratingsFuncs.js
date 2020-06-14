class AvgRating {
  constructor(total, count, transparency, publicEngagement, alignWithValues) {
    this.totalAllCategory = total;
    this.transparencyTotal = transparency;
    this.publicEngagementTotal = publicEngagement;
    this.alignWithValuesTotal = alignWithValues;
    this.count = count;
  }
  addRating(category, value) {
    if (category === 'transparency') {
      this.transparencyTotal += value;
    } else if (category === 'publicEngagement') {
      this.publicEngagementTotal += value;
    } else if (category === 'alignWithValues') {
      this.alignWithValuesTotal += value;
    }
    this.count++;
    this.totalAllCategory += value;
  }
  updateRating(category, prevRating, newRating) {
    if (category === 'transparency') {
      this.transparencyTotal -= prevRating;
      this.transparencyTotal += newRating;
    } else if (category === 'publicEngagement') {
      this.publicEngagementTotal -= newRating;
      this.publicEngagementTotal += newRating;
    } else if (category === 'alignWithValues') {
      this.alignWithValuesTotal -= prevRating;
      this.alignWithValuesTotal += newRating;
    }
    this.total -= prevRating;
    this.total += newRating;
  }
  getRating(category) {
    if (category === 'transparency') {
      return this.transparencyTotal / this.count;
    } else if (category === 'publicEngagement') {
      return this.publicEngagementTotal / this.count;
    } else if (category === 'alignWithValues') {
      return this.alignWithValuesTotal / this.count;
    } else if (category === 'all') {
      return this.totalAllCategory / this.count;
    }
  }
}
class LegislatorRating {
  constructor() {
    this.totalRatings = new AvgRating();
    this.blackRatings = new AvgRating();
  }
}

module.exports = { AvgRating, LegislatorRating };
