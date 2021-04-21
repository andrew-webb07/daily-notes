const dailyLog = [
    {
        id: 1,
        subject: "git hub",
        date: "4/16/21",
        feeling: "It was annoying mostly",
        timeSpent: 300,
    },
    {
        id: 2,
        subject: "flex-box",
        date: "4/9/21",
        feeling: "I enjoyed doing this but it definitely took some time to get it to work the way I wanted",
        timeSpent: 300,
    }
]

const today = {
    id: 3,
    subject: "Pushing objects to an object array",
    date: "4/16/21",
    feeling: "I'm feeling good about this so far and am enjoying javascript...so far.",
    timeSpent: 70,
}

dailyLog.push(today)

const searchTerm = 70;

for (let note of dailyLog) {
    if(searchTerm === note.timeSpent) {
        console.log(note)
    }
}

for (const day of dailyLog) {
    console.log(`Note ${day.id}
${day.date}
I learned ${day.subject}.
I spent ${day.timeSpent} minutes working on it.
${day.feeling}.`)
}

const createNote = (note, notesList) => {
    const newId = notesList.length + 1;
    note.id = newId;
    note.dateCreated = Date();

    notesList.push(note);
    console.log(notesList)
}

const lastWeek = {
    subject: "Intro to NSS",
    date: "4/5/21",
    feeling: "Learned about the school",
    timeSpent: 180,
}

createNote(lastWeek,dailyLog)