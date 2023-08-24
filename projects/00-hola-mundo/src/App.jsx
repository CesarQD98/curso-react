import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  return (
    <section className="App">
      <TwitterFollowCard initialIsFollowing={false} userName="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard initialIsFollowing userName="CesarQD98" name="César Quispe" />
      <TwitterFollowCard initialIsFollowing={false} userName="ratondelcongo" name="El ratón del congo" />
    </section>
  );
}
