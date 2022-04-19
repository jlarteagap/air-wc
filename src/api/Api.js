const { API_HOST, A, E, UB } = window.CONFIG

export async function getData(section) {
  try {
    const url = `${API_HOST}/${section}/?a=${A}&e=${E}&ub=${UB}`
    const res = await fetch(url)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getSlide(galeria) {
  try {
    const url = `${API_HOST}/fotogaleria/?a=${A}&e=${E}&ub=${UB}&c=${galeria}`
    const res = await fetch(url)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
