const todos = [
    {
      id: "1",
      title: "Learn Express"
    },
    {
      id: "2",
      title: "Learn JavaScript"
    },
    {
      id: "3",
      title: "Learn Web Dev"
    }
];

exports.getTodos = ((req, res) => {
    res.status(200).send({todos})
})