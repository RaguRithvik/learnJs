const one = [
    {
        "id": 3,
        "task": [
            {
                "id": 1,
                "assignedTo": "ragu",
                "status": "processing"
            }
        ]
    }
]
const two = [
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
console.log(one.filter(val => !two.includes(val)))