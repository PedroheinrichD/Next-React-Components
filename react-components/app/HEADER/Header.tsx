import { UserOnline } from "./UserOnline";

export function Header() {
  return (
    <header className="bg-sky-500 text-white">
      <h1 className="text-4xl">Cabeçalho da página</h1>
      <UserOnline />
    </header>
  );
}
