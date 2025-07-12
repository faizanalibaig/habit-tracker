interface DayWithWeekday {
  date: number;
  weekday: string;
}

export default function getDaysWithWeekdays(
  year: number,
  month: number
): DayWithWeekday[] {
  const days: DayWithWeekday[] = [];
  const weekdays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Note: month is 1-indexed here
  const totalDays: number = new Date(year, month, 0).getDate();

  for (let day = 1; day <= totalDays; day++) {
    const date: Date = new Date(year, month - 1, day); // month-1 because JS months are 0-indexed
    days.push({
      date: day,
      weekday: weekdays[date.getDay()] ?? '',
    });
  }

  return days;
}
