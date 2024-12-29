import { Props1 , Props2 } from "../components/props";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h1 className="font-bold text-4xl text-blue-400 pt-10 underline">
        ~~~ Welcome to Home Page ~~~
      </h1>
      <Props1 name="Rabia" age={21} />
      <Props2 name="Mubashra" age={20} />
      <Props1 name="Noor" age={21} />
      <Props2 name="Fariya" age={21} />
    </div>
  );
}
