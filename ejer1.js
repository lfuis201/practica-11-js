let tasks = [
    {
    'name' : 'Buy milk from the shop ',
    'duration ' : 20,
    'priority' : 1,
    },
    {
    'name' : 'Clean the house ',
    'duration' : 120 ,
    'priority' : 3
    },
    {
    'name' : 'Study JS functions ',
    'duration' : 180 ,
    'priority ' : 1
    }
];

console.log(tasks.map(task => task.name));
