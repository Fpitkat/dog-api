const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  const input = document.querySelector('input').value
  e.preventDefault()
  getDogByBreed(input)
})

async function getDog() {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const res = await axios.get(url)
  const message = res.data.message
  const img = document.querySelector('img')
  img.setAttribute('src', message)
}

async function getDogByBreed(breed) {
  try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`
    const res = await axios.get(url)
    const img = document.querySelector('img')
    if (res.data.message) {
      img.src = res.data.message
    } else {
      throw Error('Image not found')
    }
  } catch (error) {
    alert('dog not found')
    getDog()
  }
}
