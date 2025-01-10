// plugins/filterTopic.ts
//import meetingRegister from 'public/data/meetingRegister.json'

/*
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
*/

export default defineNuxtPlugin((nuxtApp) => {
    // Define types for the meeting structure
    type AgendaTopic = {
        title: string;
    };

    type Meeting = {
        agendaTopics: AgendaTopic[];
    };

    type MeetingRegister = {
        meetings: Meeting[];
    };

    type FormattedMeeting = {
        topics: string[];
    };

    // Define the function to process meeting data
    const filterTopic = (meetingRegister: MeetingRegister): FormattedMeeting[] => {
        // Extract the topics' titles from the agenda topics of each meeting
        const formattedMeetings = meetingRegister.meetings.map((meeting) => ({
            topics: meeting.agendaTopics.map((topic) => topic.title),
        }));

        console.log(formattedMeetings);
        return formattedMeetings;
    };

    // Provide the function as part of the plugin
    return {
        provide: {
            filterTopic,
        },
    };
});
