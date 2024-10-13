const students = {
  count: 5000,
  data: [
    { id: 1, name: "shahriar reza", section: "B", GPA: 3.46 },
    { id: 2, name: "Rony kumar", section: "B", GPA: 3.4 },
    { id: 3, name: "Moniruzzaman", section: "B", GPA: 3.06 },
  ],
};

console.log(students.data[0].name);

const user = {
  id: 1,
  name: "shahriar reza",
  section: "B",
  GPA: 3.46,
  Address: {
    street: {
        first: '54/1 2b',
        second: 'Bashbari Mohammadpur',
        third: 'sghbg'
    },
    city: 'Dhaka'
  }
};

console.log(user.Address.street.first)
