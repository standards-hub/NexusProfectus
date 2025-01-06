import meetingRegister from '@/assets/data/meetingRegister.json'

const meetingRegister = (obj = {}, res = {}, extraKey = '') => {
    for (key in obj) {
        if (typeof obj[key] !== 'object') {
            res[extraKey + key] = obj[key];
        } else {
            meetingRegister(obj[key], res, `${extraKey}${key}.`);
        };
    };
    return res;
};
