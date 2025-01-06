<template>
    <div>
        <pre>{{ formattedMeetingInfo }}</pre>
    </div>
</template>

<script setup lang="ts">
import meetingData from 'public/data/meetingRegister.json';

const flattenObject = (obj: Record<string, any>, prefix = ''): Record<string, any> => {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], newKey));
        } else {
            acc[newKey] = obj[key];
        }
        return acc;
    }, {} as Record<string, any>);
};

const formattedMeetingInfo = flattenObject(meetingData);
</script>
