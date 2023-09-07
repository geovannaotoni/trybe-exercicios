const checkRequiredFields = (receivedFields, requiredFields) => {
  const isValid = requiredFields.every((property) => receivedFields[property]); 
  if (!isValid) {
      return 'Some required fields are missing';
    }
};
// const checkRequiredFields = (receivedFields, requiredFields) => {
//   for (let i = 0; i < requiredFields.length; i += 1) {
//     const currentField = requiredFields[i];
//     if (!(currentField in receivedFields)) {
//       return `"${currentField}" is required`;
//     }
//   }
// };
// module.exports = checkRequiredFields;
const objreceived = {
  title: 'o',
  content: []
}
const result = checkRequiredFields(objreceived, ['title', 'content']);

console.log(result);
// console.log(!objreceived.title);