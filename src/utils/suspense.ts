export function preloadImage(src: string) {
  return new Promise((resolve) => {
    const img = document.createElement('img')
    img.src = src
    img.onload = () => resolve(src)
  })
}

export function processPromiseForSuspense<T>(promise: Promise<T>) {
  let status = 'pending'
  let result : Promise<void> | T = promise.then(
    (resolved) => {
      status = 'success'
      result = resolved
    },
    (rejected) => {
      status = 'error'
      result = rejected
    }
  )
  return {
    read() {
      if (status === 'pending') throw result
      if (status === 'error') throw result
      if (status === 'success') return result
    },
  }
}
