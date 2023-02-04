import { ref } from "vue";
import { fetchWrapper } from "@/helpers";
import { handleError } from "src/support/errors/handleErrors";
import { useCommonStore } from "stores/all";

const baseUrl = `${process.env.API}/api/Menus`;

export const useMenu = () => {
  let result = ref([]);
  const $commonStore = useCommonStore();

  async function Get() {
    $commonStore.Add_Request();
    await fetchWrapper
      .get(baseUrl)
      .then((data) => {
        result.value = data;
      })
      .catch((error) => {
        handleError(error);
        $commonStore.Remove_Request();
      });
  }

  return {
    result,
    Get,
  };
};
