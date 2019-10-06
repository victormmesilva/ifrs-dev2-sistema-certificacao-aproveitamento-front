export const fileToBase64 = (element) => {
    return new Promise(resolve => {
      var file = element;
      var reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(reader.result)
    });
  };