import moment from "moment";
import 'moment/locale/pt-br'

export function relativeDateFormatter(date: string) {
  return moment(date).locale('pt-br').fromNow();
}

export function DateFormatterYear(date: string | undefined) {
    return moment(date).locale('pt-br').format('YYYY');
  }