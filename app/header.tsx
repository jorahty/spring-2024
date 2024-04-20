import Image from 'next/image';
import { Link } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="h-8 w-8">
          <Link className="h-[1rem] w-[1rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
          <Menu />
        </div>
        <p>B.S. Computer Engineerng</p>
        <p>Univeristy of California, Santa Cruz</p>
      </div>
    </div>
  );
}
