exports.arrayManipulation = (array) => {
  // Manipulates an array of objects, keeping only the "message" and "username" properties
  // and then reverses the order of the items in the array

  array
    .map((item) => (item = { message: item.message, username: item.username }))
    .reverse();

  return array;
};
