// plugins/filterTopic.ts

export default defineNuxtPlugin((nuxtApp) => {
    // Define types for the meeting structure
    type AgendaTopic = {
        title: string;
        id: string;
        url?: string;
    };

    type Meeting = {
        agendaTopics: AgendaTopic[];
    };

    type MeetingRegister = {
        meetings: Meeting[];
    };

    type FormattedTopic = {
        id: string;
        title: string;
        link?: string; // Optional field for the link
    };

    type FormattedMeeting = {
        topics: FormattedTopic[];
    };

    // Define the function to process meeting data
    const filterTopic = (meetingRegister: MeetingRegister): FormattedMeeting[] => {
        // Extract the topics, their IDs, and optionally links
        const formattedMeetings = []
        meetingRegister.meetings.map((meeting) => {
            const attendees = []
            meeting.attendees.map((attendee) => {
                attendees.push(attendee.name)
            })
            
            return meeting.agendaTopics.map((topic) => {
                formattedMeetings.push({
                    id: topic.id,
                    title: topic.title,
                    link: topic.url ? topic.url : undefined, // Generate link if `url` exists
                    discussed: topic.discussed ? 'YES' : 'NO',
                    releaseVersion: topic.releaseVersion,
                    meetingID: meeting.id,
                    group: meeting.groupID,
                    attendees: attendees.join(', '),
                })
            })
        });

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
