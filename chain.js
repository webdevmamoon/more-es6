const users = [{ id: 1, name: 'abul', job: 'doctor' }]

// console.log(users[0].job);

const data = {
    count: 4000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'abul', job: 'leader' }
    ]
}
const secondJob = data.data[1].job;
// console.log(secondJob);

const user = {
    id: 6003,
    name: 'Chikon Ali',
    address: {
        street: {
            first: '45/B paglamazar lane',
            second: 'third floor',
            third: 'under ground'
        },
        postoffice: 'cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user?.address?.street?.second;
console.log(userFloor);