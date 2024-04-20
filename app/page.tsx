import Header from './header';

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-4 max-w-lg mx-auto">
      <Header />

      <div>
        <p className="font-semibold">Hey there! I'm James, a developer based in the bay area.</p>
        <p>
          I'm on a mission to develop eqip myself with tools to create useful producsta and services
          passioante create things solve important problems
        </p>
      </div>
    </main>
  );
}
