import React from 'react';
import { format } from 'date-fns';
import { enUS, pt } from 'date-fns/locale';

export default function MyComponent() {
  const today = format(new Date(), 'MMM dd yyyy', { locale: enUS });
  const todayPt = format(new Date(), 'dd MMM yyyy', { locale: pt });

  const currentTime = format(new Date(), 'HH:mm');

  return (
    <>
      <section className="flex flex-col items-end justify-center  text-white w-full h-1/5 uppercase">
        <span> Porto, Portugal</span>

        <span>{today}</span>
        {/* <span>{todayPt}</span> */}
        <span>{currentTime}</span>
      </section>
    </>
  );
}
