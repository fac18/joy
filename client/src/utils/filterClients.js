// export const filterClients = (firstNameStr, array) => {
// // add -> lastNameStr, dateOfBirthStr, 
//     if (firstNameStr === undefined) {
//       return array;
//     } else {
//       return array.filter(client => {
//         let lowerCaseInput = firstNameStr.toLowerCase();
//         return client.client_firstname.toLowerCase().includes(lowerCaseInput);
//       });
//     }
//   };

  export const filterClients = (firstNameStr, lastNameStr, dateOfBirthStr, array) => {
    // add -> lastNameStr, dateOfBirthStr, 
        if (firstNameStr && lastNameStr && dateOfBirthStr === undefined) {
          return array;
        } else if(firstNameStr && dateOfBirthStr !== undefined) {
          return array.filter(client => {
            let lowerCaseInput = firstNameStr.toLowerCase();
            return client.client_firstname.toLowerCase().includes(lowerCaseInput) && client.to_char.toLowerCase().startsWith(dateOfBirthStr);
        })}
         else if(firstNameStr !== undefined) {
          return array.filter(client => {
            let lowerCaseInput = firstNameStr.toLowerCase();
            return client.client_firstname.toLowerCase().includes(lowerCaseInput);
          });
        } else if(lastNameStr !== undefined) {
          return array.filter(client => {
            let lowerCaseInput = lastNameStr.toLowerCase();
            return client.client_surname.toLowerCase().includes(lowerCaseInput);
          });
        } else if(dateOfBirthStr !== undefined) {
          return array.filter(client => {
            let lowerCaseInput = dateOfBirthStr.toLowerCase();
            return client.to_char.toLowerCase().startsWith(lowerCaseInput);
          });
        } else {
          return array;
        }
      };