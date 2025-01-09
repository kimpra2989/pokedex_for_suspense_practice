import useSuspenseImage from '@/hooks/suspense/useSuspenseImage'

interface Props {
  url: string
}

function SuspensedImage({ url }: Props) {
  const image = useSuspenseImage(url)

  return <img src={image} alt="pokemon" className="pokemon_image" />
}

export default SuspensedImage
