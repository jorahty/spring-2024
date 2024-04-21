import Header from './header';
import Contact from './contact';
import Projects from './projects';
import { Skills } from './skills';

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-4 max-w-4xl mx-auto min-w-[370px]">
      <Header />

      <div>
        <h2 className="font-semibold">
          Hey! I'm James, a software engineer based in the Bay Area.
        </h2>
        <p>
          I'm on a mission to develop eqip myself with tools to create useful producsta and services
          passioante create things solve important problems
        </p>
      </div>

      <Contact />

      <Projects />

      <Skills />
    </main>
  );
}
