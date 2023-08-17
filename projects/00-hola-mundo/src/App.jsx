import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel Durán"/>
      <TwitterFollowCard isFollowing userName="CesarQD98" name="César Quispe"/>
      <TwitterFollowCard isFollowing={false} userName="ratondelcongo" name="El ratón del congo"/>
    </section>
  );
}
