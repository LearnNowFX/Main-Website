import moment from "moment";

enum Precision {
  DAY,
  HOUR,
  MINUTE,
}

export const areDatesEqual = (
  date1: Date | string,
  date2: Date | string,
  precision: Precision = Precision.MINUTE
) => {
  const date1Moment = moment(date1);
  const date2Moment = moment(date2);

  switch (precision) {
    case Precision.DAY:
      return date1Moment.isSame(date2Moment, "day");
    case Precision.HOUR:
      return date1Moment.isSame(date2Moment, "hour");
    case Precision.MINUTE:
      return date1Moment.isSame(date2Moment, "minute");
  }
};
