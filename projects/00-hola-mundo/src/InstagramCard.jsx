import { useState } from 'react'

export function InstagramCard ({ username, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="ig-followCard">
      <header className="ig-followCard-header">
        <img className="ig-followCard-avatar" src={`https://unavatar.io/instagram/${username}`} alt="avatar-ig" />
        <div className="ig-followCard-info">
          <strong>{name}</strong>
          <span>Followed by ...</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className="ig-followCard-button">{text}</button>
      </aside>
    </article>
  )
}
