import React from 'react';

const useGetDate = () => {
  const currentDate: Date = new Date();
  const month: number = currentDate.getMonth() + 1;
  function getCustomWeek(date: Date): number {
    const startOfYear: Date = new Date(date.getFullYear(), 0, 0);
    const timeDiff: number = date.getTime() - startOfYear.getTime();
    const dayOfYear: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return (Math.floor(dayOfYear / 7) % 4) + 1;
  }

  const weekNumber: number = getCustomWeek(currentDate);

  const monthString: string = `${month}월`;
  const weekString: string = `${month}월 ${weekNumber}주차`;

  return { monthString, weekString };
};

export default useGetDate;
