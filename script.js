
const assignments = [
    {
        title: "Lab Assignment 1",
        link: "http://127.0.0.1:5501/1.html",
        description: "My portfolio."
    },
    {
        title: "Lab Assignment 2",
        link: "http://127.0.0.1:5501/2.html",
        description: "Seminar schedule"
    },
    {
        title: "Lab Assignment 3",
        link: "http://127.0.0.1:5501/3.html",
        description: "Student registration portal."
    },
    {
        title: "Lab Assignment 4",
        link: "http://example.com/lab4",
        description: "Analysis of GHI algorithms and their applications."
    },
    {
        title: "Lab Assignment 5",
        link: "http://127.0.0.1:5501/",
        description: "creating webpages using html css."
    },
    {
        title: "Lab Assignment 6",
        link: "http://127.0.0.1:5501/4.html",
        description: "Sample paper"
    },
    {
        title: "Lab Assignment 7",
        link: "http://127.0.0.1:5501/7.html",
        description: "sample paper using javascript."
    },
    {
        title: "Lab Assignment 8",
        link: "http://127.0.0.1:5501/8.html",
        description: "image slideshow."
    }
];

const assignmentList = document.getElementById('assignment-list');

assignments.forEach(assignment => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <a href="${assignment.link}" target="_blank">${assignment.title}</a>
        <p>${assignment.description}</p>
    `;
    assignmentList.appendChild(listItem);
});
