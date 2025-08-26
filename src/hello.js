"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello Guys! You all are awesome thankyou for the part of this jounrey",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
