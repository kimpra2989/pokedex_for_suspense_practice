import { preloadImage, processPromiseForSuspense } from '@/utils/suspense'

const imageCache = new Map()

const useSuspenseImage = (url: string) => {
  if (!imageCache.has(url)) {
    imageCache.set(url, processPromiseForSuspense(preloadImage(url)))
  }

  return imageCache.get(url).read()
}

export default useSuspenseImage
