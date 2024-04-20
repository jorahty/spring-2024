'use client';

import { useState } from 'react';

export default function Contact() {
  const [clicked, setClicked] = useState(false);

  return clicked ? (
    <div className="text-center text-muted-foreground">
      &#106;&#116;&#101;&#110;&#110;&#097;&#110;&#116;&#064;&#117;&#099;&#115;&#099;&#046;&#101;&#100;&#117;
    </div>
  ) : (
    <div
      onClick={() => setClicked(true)}
      className="text-center text-blue-500 font-semibold hover:cursor-pointer">
      Contact me
    </div>
  );
}
