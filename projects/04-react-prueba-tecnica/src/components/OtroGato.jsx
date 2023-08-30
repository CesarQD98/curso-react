import { useCatImage } from '../hooks/useCatImage'

export function OtroGato () {
  const { imageUrl } = useCatImage({ fact: 'cat' })
  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
