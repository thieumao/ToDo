const defaultArrWorks = [
        { id: 1, title: 'iOS', detail: 'Objective-C, Swift', isDone: true, isShow: false },
        { id: 2, title: 'Android', detail: 'Java, Kotlin', isDone: false, isShow: false },
        { id: 3, title: 'React Native', detail: 'JavaScript', isDone: true, isShow: false },
        { id: 4, title: 'Flutter', detail: 'Dark', isDone: true, isShow: false },
        { id: 5, title: 'Unity', detail: 'JavaScript, C#', isDone: false, isShow: false },
        { id: 6, title: 'PHP', detail: 'PHP, MySQL', isDone: true, isShow: false },
        { id: 7, title: 'Java', detail: 'Java', isDone: false, isShow: false },
        { id: 8, title: '.NET', detail: 'C#, VB.NET, C++', isDone: true, isShow: false },
        { id: 9, title: 'Front End', detail: 'HTML, CSS, JavaScript', isDone: true, isShow: false },
        { id: 10, title: 'Back End', detail: 'PHP, .NET, Java', isDone: false, isShow: false },
        { id: 11, title: 'Database', detail: 'MySQL, SQL Server, SQLite...', isDone: true, isShow: false },
        { id: 12, title: 'Tester', detail: 'Unit Test, UI Test', isDone: false, isShow: false },
        { id: 13, title: 'HR', detail: 'Job, Interview', isDone: true, isShow: false },
        { id: 14, title: 'PM', detail: 'Project, Manager', isDone: false, isShow: false }
];

const arrWorksReducer = (state = defaultArrWorks, action) => {
    if (action.type === 'TOGGLE_DONE') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, isDone: !e.isDone };
        });
    }
    if (action.type === 'TOGGLE_SHOW') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, isShow: !e.isShow };
        });
    }
    if (action.type === 'ADD_WORK') {
        return [{
            id: state.length + 1,
            title: action.title,
            detail: action.detail,
            isDone: false,
            isShow: false
        }].concat(state);
    }
    return state;
};

export default arrWorksReducer;
