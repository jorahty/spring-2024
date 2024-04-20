import Image from 'next/image';
import Links from './links';

export default function Header() {
  return (
    <div className="flex gap-3 items-stretch">
      <Image
        className="drop-shadow rounded-xl"
        src="/pfp.png"
        width={110}
        height={110}
        priority
        alt=""
      />
      <div className="flex flex-col justify-evenly grow">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">James Tennant</p>
          <Links />
        </div>
        <p>B.S. Computer Engineerng</p>
        <p>Univeristy of California, Santa Cruz</p>
      </div>
    </div>
  );
}
