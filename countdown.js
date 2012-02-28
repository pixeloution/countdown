/**
 * returns hours, minutes, seconds between two dates, ie. 25 hours in the future will return:
 *
 *    01 day
 *    01 hour
 *    00 minutes
 * 
 * not the total number of hours (25) left, or the total numer of minutes.
 *
 *
 * General Usage
 * countdown = new Countdown('February 29, 2012 5:15 PM');
 * console.log(countdown);
 */


/**
 * @param string datestring
 * a string representing the countdown date, in the following format:
 * Jan, 24, 2012 10:15 AM
 */
function Countdown(datestring) {
  var remaining = {};
  var until = Date.parse(datestring);
  var from  = new Date();

  // dates are in milliseconds so divide out and get minutes, rounded to nearest minute
  this._total_minutes = Math.round(((until - from) / 1000) / 60); 

  // only meant to return time until, not time past
  if(this._total_minutes < 0) {
    remaining.days    = 0;
    remaining.hours   = 0;
    remaining.minutes = 0;
  }
  else {
    remaining.days    = this._daysRemaining();
    remaining.hours   = this._hoursRemaining();
    remaining.minutes = this._minutesRemaining();
  }

  return remaining;
}
Countdown.prototype._minutesRemaining = function() {
  return this._format( (this._total_minutes % 1440) % 60  ); 
};
Countdown.prototype._hoursRemaining = function() {
  return this._format( Math.floor((this._total_minutes % 1440) / 60) );
};
Countdown.prototype._daysRemaining = function() {
  return this._format( Math.floor((this._total_minutes / 1440)) );
};
// 0 pads numbers less then 10
Countdown.prototype._format = function(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
};


/**
 * Date.parse Polyfill
 * via https://gist.github.com/1053863
 */
Date.parse=Date.parse||function(a){a=a.split(/\W\D?/);return new Date(a[3],"anebarprayunulugepctovec".search(a[1])/2,a[2],a[4],a[5],a[6])}
