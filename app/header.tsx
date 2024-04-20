import Image from 'next/image';
import Links from './links';

export default function Header() {
  return (
    <div className="flex gap-4 items-stretch">
      <Image
        className="drop-shadow-md rounded-xl"
        src="/pfp.png"
        width={110}
        height={110}
        priority
        alt=""
      />
      <div className="flex flex-col justify-evenly grow">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">James Tennant</h1>
          <Links />
        </div>
        <p>B.S. Computer Engineerng</p>
        <p>Univeristy of California, Santa Cruz</p>
      </div>
    </div>
  );
}
