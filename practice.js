let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          {
            school_name: "ABC primary school",
          },
          { location: "Peters Burg" },
        ],
      },
      {
        secondary: [
          {
            school_name: "ABC primary school",
          },
          { location: "St Burg" },
        ],
      },
    ],
  },
};

console.log(data.Sophia.study[1].secondary[1].location)
