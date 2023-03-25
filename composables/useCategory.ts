// import { defineStore } from "pinia";
import type { Category, ICategoryDetail, IProductList } from 'types'

// export const useCategories = defineStore("categories", {
//   state: () => ({
//     categories: [] as Category[],
//   }),
//   actions: {
//     async fetchAll() {
//       try {
//         const config = useRuntimeConfig();
//         const data = await $fetch<Category[]>(
//           `${config.public.apiUrl}/category/`,
//           {
//             method: "GET",
//           }
//         );
//         this.categories = data;
//         return data as Category[];
//       } catch (e: any) {
//         return e.message;
//       }
//     },
//   },
//   getters: {
//     getCategoryList(): Category[] {
//       return this.categories;
//     },
//   },
// });

export const useCategory = () => {
  const config = useRuntimeConfig()

  const getCategryList = async () => {
    try {
      const data = await $fetch<Category[]>(
        `${config.public.apiUrl}/categories/`,
        // {
        //   params: { root: true },
        // }
      )
      return data as Category[]
    }
    catch (e) {
      // console.log(e)
      return [] as Category[]
    }
  }
  const getRootCategories = async () => {
    try {
      const data = await $fetch<Category[]>(
        `${config.public.apiUrl}/categories/root/`,
      )
      return data as Category[]
    }
    catch (e) {
      // console.log(e)
      return [] as Category[]
    }
  }
  const getCategory = async (slug: string) => {
    try {
      const { data: category } = await useFetch<ICategoryDetail>(
        `${config.public.apiUrl}/categories/${slug}/`,
      )
      // const data = await $fetch<ICategoryDetail>(
      //   `${config.public.apiUrl}/categories/${slug}/`
      // );
      return category
    }
    catch (e) {
      // console.log(e)
    }
  }
  const getProductList = async (slug: string) => {
    try {
      const { data: productList } = await useFetch<IProductList>(
        `${config.public.apiUrl}/categories/${slug}/products/`,
      )
      // const data = await $fetch<IProductList>(
      //   `${config.public.apiUrl}/categories/${slug}/products/`
      // );
      // return data as IProductList;
      return productList
    }
    catch (e) {
      // console.log(e)
    }
  }

  return { getCategryList, getCategory, getProductList, getRootCategories }
}
