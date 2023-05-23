const path = require('node:path');
const fs = require('fs');


const validateRoute = (route) => {

    if (fs.existsSync(route)) {
        const validatePath= path.isAbsolute(route);

        if(validatePath) {
            return route
        } else { 
            return path.resolve(route);
      }
    }
      return undefined;
}

module.exports={
    validateRoute
}
