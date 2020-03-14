export default class CourseService {
    data = [{
            id: 1,
            topic: 'CSS frameworks',
            date: '2/11/2020',
            lecturer: 'Ostap Rybak',
            duration: '01h 10min'
        },
        {
            id: 2,
            topic: 'Optimization',
            date: '2/13/2020',
            lecturer: 'Roman Volkov',
            duration: '01h 15min'
        },
        {
            id: 3,
            topic: 'OOP',
            date: '2/18/2020',
            lecturer: 'Oksana Hodysh',
            duration: '01h 20min'
        },
        {
            id: 4,
            topic: 'ES NEXT',
            date: '2/20/2020',
            lecturer: 'Yuriy Pankiv',
            duration: '01h 25min'
        },
        {
            id: 5,
            topic: 'AJAX',
            date: '2/25/2020',
            lecturer: 'Andrii Dubchak',
            duration: '01h 30min'
        },
        {
            id: 6,
            topic: 'jQuery',
            date: '2/27/2020',
            lecturer: 'Anatolii Dmytruk',
            duration: '01h 35min'
        },
        {
            id: 7,
            topic: 'Tools',
            date: '3/3/2020',
            lecturer: 'Andrii Shupta',
            duration: '01h 40min'
        },
        {
            id: 8,
            topic: 'React.js',
            date: '3/5/2020',
            lecturer: 'Tetiana Kandybal',
            duration: '01h 45min'
        },
        {
            id: 9,
            topic: 'React.js + Redux',
            date: '3/10/2020',
            lecturer: 'Tetiana Kandybal',
            duration: '01h 50min'
        },
    ];
    getCourses() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700);
        })
    }
}