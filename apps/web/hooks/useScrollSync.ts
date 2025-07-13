'use client';
import { useEffect } from 'react';
import { HabitData } from '.';

export function useScrollSync(habits: HabitData[]) {
  useEffect(() => {
    const headerScroll = document.getElementById('header-scroll');
    const habitScrolls = document.querySelectorAll('[id^="habit-scroll"]');

    const syncScroll = (source: HTMLElement, targets: NodeListOf<Element>) => {
      targets.forEach((target) => {
        if (target !== source) {
          (target as HTMLElement).scrollLeft = source.scrollLeft;
        }
      });
    };

    const handleHeaderScroll = () => {
      if (habitScrolls.length > 0) {
        syncScroll(headerScroll!, habitScrolls);
      }
    };

    const handleHabitScroll = (e: Event) => {
      const source = e.target as HTMLElement;
      if (headerScroll) {
        headerScroll.scrollLeft = source.scrollLeft;
      }
      syncScroll(source, habitScrolls);
    };

    if (headerScroll && habitScrolls.length > 0) {
      headerScroll.addEventListener('scroll', handleHeaderScroll);

      habitScrolls.forEach((habitScroll) => {
        habitScroll.addEventListener('scroll', handleHabitScroll);
      });

      return () => {
        headerScroll.removeEventListener('scroll', handleHeaderScroll);
        habitScrolls.forEach((habitScroll) => {
          habitScroll.removeEventListener('scroll', handleHabitScroll);
        });
      };
    }
  }, [habits]);
}
