import React, { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: '30min' });
        cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      } catch (e) {
        console.error('Failed to load Cal embed', e);
      }
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="evan-trafton/30min"
      data-cal-config='{"layout":"month_view"}'
      style={{ padding: '0.6rem 1rem', fontWeight: 700 }}
    >
      Click me
    </button>
  );
};

export default CalEmbed;



