let queue = $state({
    /** @type {import('../../../../types').Song[]} */
    playlist : [],
    current : 0,

    currentTime : 0, // synced with <audio>.currentTime, to redraw elapsed time
    progressTime : 0, // input[type=range] value
    duration : 0,
    scrubbing : false, // whether to update progressTime

    volume : 0.75,
    muted : false,

    playing : false, // play button state
    loading : false, // loading spinner state

    /** @type null|HTMLAudioElement */
    audio : null
});

export function getQueue() {
    /**
     * link <audio>
     * @param {HTMLAudioElement} audio
     */
    function setAudioElement(audio) {
        queue.audio = audio;

        queue.audio?.addEventListener("ended", () => {
            queue = {
                ...queue,
                playing : false
            };
        });
    }

    /**
     * add song to playlist
     * @param {import('../../../../types').Song} song
     */
    function add(song) {
        let playlist = [ ...queue.playlist, song ];

        queue = {
            ...queue,
            playlist,
            current  : playlist.length - 1,
            playing  : true,
            loading : true
        };

        queue.audio?.addEventListener("canplay", () => {
            queue.loading = false;
            queue.audio?.play();
        }, { once : true });
    }


    function next() {
        let current = queue.current + 1;

        if (current >= queue.playlist.length) {
            current = 0;
        }

        if (queue.audio) {
            queue.audio.currentTime = 0;
        }

        queue = { ...queue, current };
    }

    function prev() {
        let current = queue.current - 1;

        if (current < 0) {
            current = queue.playlist.length -1;
        }

        queue = { ...queue, current };
    }

    function togglePlay() {
        queue = { ...queue, playing : !queue.playing };

        if (queue.playing) {
            queue.audio?.play();
        } else {
            queue.audio?.pause();
        }  return queue.playlist[queue.current] || {};
    }

    function toggleMute() {
        if (queue.audio) {
            queue.audio.muted = !queue.audio.muted;
        }

        queue.muted = !queue.muted;
    }

    return {
        get queue() {
            return queue;
        },

        setAudioElement,
        add,
        next,
        prev,

        togglePlay,
        toggleMute
    };
}
