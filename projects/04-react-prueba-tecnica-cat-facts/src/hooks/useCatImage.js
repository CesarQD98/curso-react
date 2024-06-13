import { useState, useEffect } from 'react'
import { getRandomImage } from '../services/catImages'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    // getRandomImage(threeFirstWords).then(newImageUrl => setImageUrl(newImageUrl))
    setImageUrl(getRandomImage(threeFirstWords))
    console.log('imageUrl', imageUrl)
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
