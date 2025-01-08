import meetingRegister from 'public/data/meetingRegister.json'

export default defineNuxtPlugin((nuxtApp) => {

    // Take a list of meetings, extract the titles of the agenda topics from each meeting,
    // and create a new list where each meeting is represented by just the titles of its topics
    const formattedMeetings = meetingRegister.meetings.map((meeting) => ({
        topics: meeting.agendaTopics.map((topic) => topic.title),
    }))
    for (const meeting of formattedMeetings) {
        console.log(meeting.topics)
    }
    for (const topic of formattedMeetings){
        //console.log(topic)
    }
})