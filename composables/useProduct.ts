import type { IProduct } from 'types'

export const useProduct = () => {
  const config = useRuntimeConfig()

  const getProduct = async (slug: string) => {
    try {
      const { data: product } = await useFetch<IProduct>(
        `${config.public.apiUrl}/products/${slug}/`,
      )
      return product
    }
    catch (e) {
      // console.log(e)
    }
  }

  return { getProduct }
}
