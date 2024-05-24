import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// import { OtroGato } from './components/OtroGato'

export function App () {
  const { fact, isDisabled, slowRefreshFact } = useCatFact()
  console.log('fact', fact)
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    slowRefreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image obtained using the first three words from ${fact}`} />}
        <button disabled={isDisabled} onClick={handleClick}>
          {isDisabled ? 'Loading...' : 'Get a new fact!'}
        </button>
      </section>
    </main>
  )
}
