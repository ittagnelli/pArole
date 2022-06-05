<script>
    export let char;
    export let keypress;
</script>

<div class="key" on:click={keypress(char.toUpperCase())}>
    {char.toUpperCase()}
</div>

<style>
    .key {
        background-color: var(--bg);
        color: white;
        padding: 2.2vw 2.2vw;
        /* margin: 2px 3px; */
        margin: 0.4vw 0.4vw;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color .2s;
        font-weight: bolder;
        font-size: 1.1em;
    }

    .key:hover {
        background-color: var(--orange);
    }

    /* desktop */
    @media screen and (min-width: 1024px) {
        .key {
            /* padding: 20px 20px;
            margin: 4px 6px;
            font-size: 1.7em; */
            padding: 1.3vw 1.3vw;
            margin: 0.3vw 0.3vw;
            font-size: 1.7em;
        }
    }

</style>