import { writable } from 'svelte/store';
// DEBUG
export const tracks = writable([{ trackName: "1", trackKey: "12a" }, { trackName: "2", trackKey: "4a" }, { trackName: "3", trackKey: "1b" }, { trackName: "4", trackKey: "1a" }, { trackName: "5", trackKey: "3a" }]);
export const solutions = writable([
    [
        {
            "trackName": "1",
            "trackKey": "12a"
        },
        {
            "trackName": "4",
            "trackKey": "1a"
        },
        {
            "trackName": "3",
            "trackKey": "1b"
        }
    ],
    [
        {
            "trackName": "2",
            "trackKey": "4a"
        },
        {
            "trackName": "5",
            "trackKey": "3a"
        }
    ],
    [
        {
            "trackName": "3",
            "trackKey": "1b"
        },
        {
            "trackName": "4",
            "trackKey": "1a"
        },
        {
            "trackName": "1",
            "trackKey": "12a"
        }
    ],
    [
        {
            "trackName": "4",
            "trackKey": "1a"
        },
        {
            "trackName": "1",
            "trackKey": "12a"
        }
    ],
    [
        {
            "trackName": "5",
            "trackKey": "3a"
        },
        {
            "trackName": "2",
            "trackKey": "4a"
        }
    ]
]);

// export const tracks = writable([]);
// export const solutions = writable([]);