import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { getRandomImage } from './services/catImages'

// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    getRandomImage(threeFirstWords).then(newImageUrl => setImageUrl(newImageUrl))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
    setIsDisabled(true)

    setTimeout(() => {
      setIsDisabled(false)
    }, 2000)
  }

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}
    >
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image obtained using the first three words from ${fact}`} />}
      </section>

      <button disabled={isDisabled} onClick={handleClick}>
        {isDisabled ? 'Loading...' : 'Get a new fact!'}
      </button>
    </main>
  )
}
