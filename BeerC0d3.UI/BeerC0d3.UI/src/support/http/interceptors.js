import { useAuthStore, useCommonStore } from "stores/all";

export const addInterceptors = (Router) => {
  const commonStore = useCommonStore();
  const user = useAuthStore();

  const { fetch: originalFetch } = window;

  window.fetch = async (...args) => {
    let [resource, config] = args;
    // request interceptor here
    const response = await originalFetch(resource, config);
    commonStore.Remove_Request();

    // if (!response.ok && response.status === 401) {
    //   // 404 error handling
    //   //return Promise.reject(response);
    //   await user.RefreshToken();
    // }

    // if (error.response.status === 401 && user.isAuthenticated) {
    //   await user.RefreshToken();
    // }
    //console.log(response);
    // response interceptor here
    return response;
  };
  // const authStore = useAuthStore();
  // api.interceptors.response.use(
  //   (response) => {
  //     commonStore.REMOVE_REQUEST()
  //     return response
  //   },
  // async (error) => {
  //   commonStore.Remove_Request();
  //if (!error.response) return Promise.reject(new Error('Falha de conexão, tente novamente mais tarde!'));
  // if (error.response.status === 401) {
  //   if (Router.currentRoute.value.path.includes('lock')) return Promise.resolve()
  //   if (error.config.url.includes('refresh')) {
  //     commonStore.ADD_REQUEST()
  //     storage.setBlocked(true)
  //     await authStore.SET_BLOCK(true).then(() => {
  //       Router.push({name: 'Lock Screen', query: {to: Router.currentRoute.value.path}})
  //     })
  //   } else if (!error.config.url.includes('create') && !error.config.url.includes('refresh') && !error.config.url.includes('verify')) {
  //     try {
  //       commonStore.ADD_REQUEST()
  //       await authStore.VALID_TOKEN(authStore.getUserToken?.access)
  //     } catch (error) {
  //       commonStore.REMOVE_REQUEST()
  //       if (authStore.isBlocked) Router.push({
  //         name: 'Lock Screen',
  //         query: {to: Router.currentRoute.value.path}
  //       })
  //       else {
  //         commonStore.ADD_REQUEST()
  //         await authStore.SIGN_OUT()
  //         Router.push({
  //           path: '/login',
  //           query: {to: Router.currentRoute.value.path}
  //         })
  //       }
  //     }
  //   }
  //   return Promise.reject(error);
  // };
  // })
};
