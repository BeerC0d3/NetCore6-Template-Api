import { Notify } from "quasar";

export const handleError = (error) => {
  //console.log(error);
  //notify(error);
  if (!error.response)
    if (error.hasOwnProperty("message")) notify(error.message);
    else notify("Falla de conexión, intente mas tarde!");
  else if (error.response.hasOwnProperty("message"))
    notify(error.response.message);
  else if (error.response.hasOwnProperty("data")) {
    const errorData = error.response.data;
    if (errorData && Array.isArray(errorData))
      errorData.forEach((error, index) =>
        notify(error[error.keys(errorData)[index]])
      );
    else if (errorData) {
      const object = errorData[Object.keys(errorData)[0]];
      if (Array.isArray(object))
        return object.forEach((error) => notify(error));
      const customError = customMessageByErrorType(error);
      if (customError) notify(customError);
      else notify(errorData[Object.keys(errorData)[0]]);
    }
  } else notify("a ocurrido un error inesperado, intente mas tarde!");
};

const notify = (message) => {
  Notify.create({
    message: message,
    color: "negative",
    textColor: "white",
  });
};

const notifySuccess = (message) => {
  Notify.create({
    message: message,
    color: "positive",
    textColor: "white",
  });
};

const customMessageByErrorType = (error) => {
  const messages = {
    401: "Usuario no autorizado! Verifique su cuenta de acceso.",
    403: "Acceso denegado! Este usuário no tiene permisos para acessar este recurso!",
    404: "Recurso no encontrado!",
    422: "Falla de validación!",
    500: "a ocurrido un error inesperado, intente mas tarde!",
  };
  return messages[error.response.status];
};
