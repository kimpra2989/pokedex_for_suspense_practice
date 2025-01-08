export function processPromiseForSuspense<T>(promise: Promise<T>) {
  let status = 'pending'
  let data: T
  let result = promise.then(
    (resolved) => {
      status = 'success'
      data = resolved
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
      if (status === 'success') return data
    },
  }
}
