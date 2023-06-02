/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */

// FUNCIÓN VALIDACIÓN LINKS
const validLink = (route) => {
  fetch('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions')
    .then((response) => {
      const urlLink = response.url;
      const statusLink = response.status;
      const statusTextLink = response.statusText;
      if (response.ok) {
        return ([urlLink, statusLink, statusTextLink]);
        // return ([href, text, file]);
      }
      throw new Error('Error en la solicitud');
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = validLink;
