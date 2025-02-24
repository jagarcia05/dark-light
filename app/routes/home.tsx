// Home.tsx
import type { Route } from "./+types/home";
import ThemeToggle from "../Components/ThemeToggle";
import UserPersona from "~/Components/UserPerson";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
        
        <UserPersona></UserPersona>
        
    </div>
  );
}
