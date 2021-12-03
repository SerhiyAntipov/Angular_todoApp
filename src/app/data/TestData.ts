import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

    static categories: Category[] = [
        {id: 1, title: 'Work', logo: "work"},
        {id: 2, title: 'Family', logo: "family_restroom"},
        {id: 3, title: 'Company', logo: "business"},
        {id: 4, title: 'Relax', logo: "self_improvement"},
        {id: 5, title: 'Sport', logo: "sports_kabaddi"},
        {id: 6, title: 'Food', logo: "lunch_dining"},
        {id: 7, title: 'Finance', logo: "euro_symbol"},
        {id: 8, title: 'Gadget', logo: "devices_other"},
        {id: 9, title: 'Health', logo: "health_and_safety"},
        {id: 10, title: 'Vehicle', logo: "airport_shuttle"},
        {id: 11, title: 'Repair', logo: "construction"},
    ];


    static priorities: Priority[] = [
        {id: 1, title: 'Low', color: '#e5e5e5'},
        {id: 2, title: 'Middle', color: '#85D1B2'},
        {id: 3, title: 'Hight', color: '#F1828D'},
        {id: 4, title: 'Hight Priority', color: '#F1128D'}
    ];


    static tasks: Task[] = [
        {
            id: 1,
            title: 'Fill up with gasoline',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2019-04-10')
        },

        {
            id: 2,
            title: 'Submit reports to the chief',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2019-04-11')
        },

        {
            id: 3,
            title: 'Clean the house',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1]
        },

        {
            id: 4,
            title: 'Take a walk in the park',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2019-08-17')
        },
        {
            id: 5,
            title: 'Learn Angular',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[10]
        },
        {
            id: 6,
            title: 'Go to a programming seminar',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2019-06-11')
        },

        {
            id: 7,
            title: 'Buy a plane ticket to Italy',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3]
        },
        {
            id: 8,
            title: 'Cook dinner',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[5]
        },
        {
            id: 9,
            title: 'Pull up 10 times',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-12')
        },
        {
            id: 10,
            title: 'Run a half marathon',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[11]
        },

        {
            id: 11,
            title: 'Organize a holiday',
            completed: false
        },

        {
            id: 12,
            title: 'Go to the cinema',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 13,
            title: 'Buy food for a week',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2019-05-11')
        },

        {
            id: 14,
            title: 'Make a presentation of the project',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[0]
        },

        {
            id: 15,
            title: 'Travel to Italy',
            priority: TestData.priorities[2],
            completed: true
        },


        {
            id: 16,
            title: 'Spare 40 thousand dollars',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 17,
            title: 'To buy an apartment',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 18,
            title: 'Go to the theater',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2020-12-11')
        },

        {
            id: 19,
            title: 'Analyze the news',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2019-10-11')
        },

        {
            id: 20,
            title: 'Play a video game',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-17')
        }

    ];

}

