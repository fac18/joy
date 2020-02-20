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

export const filterClients = (
  firstNameStr,
  lastNameStr,
  dateOfBirthStr,
  clients
) => {
  let filteredClients=clients.filter(client => {
   
    console.log(client)

    let [doesFirstNameMatch,doesLastNameMatch,doesDOBMatch] = [false,false,false];
    let isFirstNameFilled = firstNameStr ? true:false;
    let isLastNameFilled = lastNameStr ? true:false;
    let isDOBFilled = dateOfBirthStr ? true:false;

   
  
    if(firstNameStr && client.client_firstname.toLowerCase().includes(firstNameStr.toLowerCase()))
    {
    doesFirstNameMatch=true;
    }
    if(lastNameStr && client.client_surname.toLowerCase().includes(lastNameStr.toLowerCase())){
    doesLastNameMatch=true;
    }
    if(dateOfBirthStr && client.to_char.includes(dateOfBirthStr)){
      doesDOBMatch=true;
    }
    // console.log("firstname match boolean",client.client_firstname.toLowerCase().includes(firstNameStr.toLowerCase()))
    console.log({firstNameStr})
    console.log({lastNameStr})
    console.log({dateOfBirthStr})
    console.log({doesFirstNameMatch})
    console.log({isFirstNameFilled})
    console.log({doesLastNameMatch})
    console.log({isLastNameFilled})
    console.log({doesDOBMatch})
    console.log({isDOBFilled})

   console.log(isFirstNameFilled == doesFirstNameMatch && isLastNameFilled == doesLastNameMatch && isDOBFilled==doesDOBMatch)

   if(isFirstNameFilled == doesFirstNameMatch && isLastNameFilled == doesLastNameMatch && isDOBFilled==doesDOBMatch)
   return true;
   else return false;
  });
  console.log(filteredClients);
  return filteredClients;
  };

//   // add -> lastNameStr, dateOfBirthStr,
//   if (firstNameStr && lastNameStr && dateOfBirthStr === undefined) {
//     return array;
//   } else if (firstNameStr && dateOfBirthStr !== undefined) {
//     return array.filter(client => {
//       let lowerCaseInput = firstNameStr.toLowerCase();
//       return (
//         client.client_firstname.toLowerCase().includes(lowerCaseInput) &&
//         client.to_char.toLowerCase().startsWith(dateOfBirthStr)
//       );
//     });
//   } else if (firstNameStr && lastNameStr !== undefined) {
//     return array.filter(client => {
//       let lowerCaseFirstName = firstNameStr.toLowerCase();
//       let lowerCaseLastName = lastNameStr.toLowerCase();
//       return (
//         client.client_firstname.toLowerCase().includes(lowerCaseFirstName) &&
//         client.client_surname.toLowerCase().includes(lowerCaseLastName)
//       );
//     });
//   } else if (lastNameStr && dateOfBirthStr !== undefined) {
//     return array.filter(client => {
//       let lowerCaseInput = lastNameStr.toLowerCase();
//       return (
//         client.client_surname.toLowerCase().includes(lowerCaseInput) &&
//         client.to_char.toLowerCase().startsWith(dateOfBirthStr)
//       );
//     });
//   } else if (firstNameStr !== undefined) {
//     return array.filter(client => {
//       let lowerCaseFirstName = firstNameStr.toLowerCase();
//       return client.client_firstname.toLowerCase().includes(lowerCaseFirstName);
//     });
//   } else if (lastNameStr !== undefined) {
//     return array.filter(client => {
//       let lowerCaseInput = lastNameStr.toLowerCase();
//       return client.client_surname.toLowerCase().includes(lowerCaseInput);
//     });
//   } else if (dateOfBirthStr !== undefined) {
//     return array.filter(client => {
//       // let lowerCaseInput = dateOfBirthStr.toLowerCase();
//       return client.to_char.toLowerCase().startsWith(dateOfBirthStr);
//     });
//   } else {
//     return array;
//   }
// };





