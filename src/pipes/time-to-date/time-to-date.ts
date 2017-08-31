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
      return moment(value).fromNow();
    }

    /** More than an hour */
    return moment(value).format(format);
  }
}
