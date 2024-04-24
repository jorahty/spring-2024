import { Button } from '@/components/ui/button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-start gap-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Baskin</h1>

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
              <a href="https://baskin.app" className="text-[color:--link]">
                baskin.app
              </a>{' '}
              )
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <a href="https://github.com/jorahty/baskin">
        <Button variant="outline">
          <GitHubIcon className="mr-2 h-4 w-4" />
          View Source Code
        </Button>
      </a>
    </main>
  );
}
