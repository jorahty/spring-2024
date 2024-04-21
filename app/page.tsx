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
          Technology, to me, is akin to magic — it empowers us to solve impossible problems and
          convert dreams to reality. I'm on a mission to equip myself with the knowledge and skills
          needed to bring my creative visions to life, solve important real-world problems, and make
          meaningful contributions to my community. I'm driven by relentless curiosity and desire to
          understand our world, and by my passion for design, problem-solving, and building. I enjoy
          combining art, science, and engineering to create excellent products and services that are
          both functional and aesthetic.
        </p>
      </div>

      <Contact />

      <Projects />

      <Skills />
    </main>
  );
}
