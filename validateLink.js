/* eslint-disable consistent-return */

// FUNCIÓN VALIDACIÓN LINK
const validLink = (objRoute) => fetch(objRoute.href)
  .then((response) => {
    const statusLink = response.status;
    const statusTextLink = response.statusText;
    if (response.ok) {
      return {
        href: objRoute.href,
        text: objRoute.text,
        file: objRoute.file,
        status: statusLink,
        ok: statusTextLink,
      };
    }
  })
  .catch((error) => {
    console.log(`Se produjo el siguiente error: ${error}`);
  });

module.exports = validLink;
