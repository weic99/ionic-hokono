import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment/src/moment';

@Pipe({
  name: 'timeToDate',
})
export class TimeToDatePipe implements PipeTransform {
  /**
   * Takes Date.now() and format it
   * Return 'x' minutes ago if less than 1 hour ago,
   * If not return formatted date, ex. Jan 20th 2017 4:00 PM
   */

  transform(value: number, format: string = 'MMM Do YYYY, h:mm a'): string {
    /** Less than an hour ago */

    if (Date.now() - value < 3600000) {
      moment.updateLocale('en', {
        relativeTime : {
          future: "in %s",
          past:   "%s ago",
          s  : 'just now',
          ss : '%ds',
          m:  "a minute",
          mm: "%dm",
          // h:  "an hour",
          // hh: "%d hours",
          // d:  "a day",
          // dd: "%d days",
          // M:  "a month",
          // MM: "%d months",
          // y:  "a year",
          // yy: "%d years"
        }
      });
      return moment(value).fromNow(true);
    }

    /** More than an hour */
    return moment(value).format(format);
  }
}
