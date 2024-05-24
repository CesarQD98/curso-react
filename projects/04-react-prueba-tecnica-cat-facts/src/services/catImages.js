export const getRandomImage = (threeFirstWords) => {
  return fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return url
    })
}
