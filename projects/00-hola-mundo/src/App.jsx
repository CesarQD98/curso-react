import './App.css'
import { InstagramCard } from './InstagramCard'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
      <section className="card-section">
        <h1>Twitter section</h1>
        <TwitterFollowCard initialIsFollowing={false} userName="midudev" name="Miguel Ángel Durán" />
        <TwitterFollowCard initialIsFollowing userName="CesarQD98" name="César Quispe" />
        <TwitterFollowCard initialIsFollowing={false} userName="ratondelcongo" name="El ratón del congo" />
      </section>

      <section className="card-section">
        <h1>Instagram section</h1>
        <InstagramCard initialIsFollowing username="cqudav" name="cesar.quispe"/>
        <InstagramCard initialIsFollowing={false} username="c_ulstudio" name="c_ulstudio"/>
        <InstagramCard initialIsFollowing username="cqudav" name="cesar.quispe"/>
      </section>
    </section>
  )
}
