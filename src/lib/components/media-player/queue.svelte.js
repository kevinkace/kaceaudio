let queue = $state({
    /** @type any[] */
    playlist : [],
    current : 0,
    playing : false,
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
    }

    /**
     * add song to playlist
     * @param {object} song
     */
    function add(song) {
        console.log(song);
        queue.playlist = [ ...queue.playlist, song ];

        queue.current = queue.playlist.length - 1;

        queue.playing = true;

        queue.audio?.addEventListener("canplay", () => {
            queue.audio?.play();
        }, { once : true });
    }


    function next() {
        queue.current += queue.current;

        if (queue.current >= queue.playlist.length) {
            queue.current = 0;
        }
    }

    function prev() {
        queue.current -= queue.current;

        if (queue.current < 0) {
            queue.current = queue.playlist.length -1;
        }
    }

    function togglePlay() {
        queue.playing = !queue.playing;

        if (queue.playing) {
            queue.audio?.play();
        } else {
            queue.audio?.pause();
        }
    }

    function getCurrent() {
        console.log(queue.playlist);
        console.log(queue.current);
        return queue.playlist[queue.current] || {};
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
        getCurrent
    };
}
