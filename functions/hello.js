exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "Ryn",
      age: 97,
      email: "whiliniong@gmail.com",
    }),
  };
};
