import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const [isDisabled, setIsDisabled] = useState(false)

  const slowRefreshFact = async () => {
    setIsDisabled(true)
    const newFact = await getRandomFact()
    setFact(newFact)
    setIsDisabled(false)
  }

  useEffect(() => {
    slowRefreshFact()
  }, [])

  return { fact, isDisabled, slowRefreshFact }
}
