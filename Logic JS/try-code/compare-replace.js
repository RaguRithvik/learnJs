const testData = [
    { display: "1", name: "TEST1" },
    { display: "2", name: "TEST2" }
  ];
  
  const customData = [
    { display: "CUSTOM_1", name: "TEST1", custom: "YES" },
    { display: "CUSTOM_3", name: "TEST3", custom: "YES" }
  ];
  
  let map = {};
  testData.forEach(item => map[item.name] = item);
  customData.forEach(item => map[item.name] = item);
//   const result = Object.values(map);
  
//   console.log(map);

  const data2 = [
    {
        "id": 1,
        "name": "Project 1",
        "task": [
            {
                "id": 1,
                "task": "Changes UI/UX",
                "assignedTo": "u1",
                "status": "pending"
            }
        ]
    },
    {
        "id": 2,
        "name": "Project 2",
        "task": [
            {
                "id": 1,
                "task": "Configure Mail Server",
                "assignedTo": "u2",
                "status": "progress"
            }
        ]
    },
    {
        "id": 3,
        "name": "Project 3",
        "task": [
            {
                "id": 1,
                "task": "Server Issue",
                "assignedTo": "u3",
                "status": "completed"
            }
        ]
    }
]
const data1 = [
    {
        "id": 3,
        "task": [
            {
                "id": 1,
                "assignedTo": "jkkk",
                "status": "uiii"
            }
        ]
    }
]
let map1 = {};
data1.forEach(item => map1[item.id] = item);
data2.forEach(item => map1[item.id] = item);
//   const result = Object.values(map);

console.log(map1);