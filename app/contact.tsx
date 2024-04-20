'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Contact() {
  const [clicked, setClicked] = useState(false);

  return clicked ? (
    <Button variant="link" disabled>
      &#106;&#116;&#101;&#110;&#110;&#097;&#110;&#116;&#064;&#117;&#099;&#115;&#099;&#046;&#101;&#100;&#117;
    </Button>
  ) : (
    <Button onClick={() => setClicked(true)} className="text-blue-500" variant="link">
      Contact me
    </Button>
  );
}
