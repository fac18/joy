export const filterClients = (inputStr, array) => {
    if (inputStr === undefined) {
      return array;
    } else {
      return array.filter(client => {
        let lowerCaseInput = inputStr.toLowerCase();
        return client.client_firstname.toLowerCase().includes(lowerCaseInput);
      });
    }
  };