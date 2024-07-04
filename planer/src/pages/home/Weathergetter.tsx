import React, { useEffect } from 'react';

const ZurichWeatherWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'weatherwidget-io-js';
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="weatherwidget-io"
      href="https://forecast7.com/en/47d388d54/zurich/"
      data-label_1="ZÜRICH"
      data-label_2="WEATHER"
      data-theme="original"
      data-basecolor="#7b3445"
      data-textcolor="#D7B3B3"
      data-mooncolor="#D7B3B3"
    >
      ZÜRICH WEATHER
    </a>
  );
};

export default ZurichWeatherWidget;
