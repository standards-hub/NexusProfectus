<template>
    <div>
        <div v-for="(meeting, index) in formattedMeetings" :key="index">
            <h2>Meeting {{ index + 1 }}</h2>
            <ul>
                <li v-for="(topic, topicIndex) in meeting.topics" :key="topicIndex">
                    {{ topic }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import meetingRegister from 'public/data/meetingRegister.json';

// Take a list of meetings, extract the titles of the agenda topics from each meeting,
// and create a new list where each meeting is represented by just the titles of its topics
const formattedMeetings = meetingRegister.meetings.map((meeting) => ({
    topics: meeting.agendaTopics.map((topic) => topic.title),
}));
</script>
