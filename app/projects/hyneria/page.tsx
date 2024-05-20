'use client';

import { usePathname } from 'next/navigation';
import { projects } from '@/data/projects';

import { Button } from '@/components/ui/button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  const pathname = usePathname();
  const project = projects.find(project => project.title.toLowerCase() === pathname.split('/').pop())!
  return (
    <main className="p-4 flex flex-col items-start gap-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Hyneria</h1>

      <div className='mb-4'>
        <p className="text-sm">{project.description}</p>
        <p className="text-sm text-muted-foreground">{project.details}</p>
      </div>

      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <span tabIndex={0}>
              <Button variant="outline" disabled>
                View Deployed Application
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>
              Under Construction ({' '}
              <a href="https://hyneria.com" className="text-[color:--link]">
                hyneria.com
              </a>{' '}
              )
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <a href="https://github.com/jorahty/hyneria">
        <Button variant="outline">
          <GitHubIcon className="mr-2 h-4 w-4" />
          View Source Code
        </Button>
      </a>
    </main>
  );
}
