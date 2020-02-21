export const filterClients = (
  firstNameStr,
  lastNameStr,
  dateOfBirthStr,
  clients
) => {
  let filteredClients=clients.filter(client => {

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

   if(isFirstNameFilled == doesFirstNameMatch && isLastNameFilled == doesLastNameMatch && isDOBFilled==doesDOBMatch)
   return true;
   else return false;
   });
   return filteredClients;
   };
