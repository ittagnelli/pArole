<script>
    import { board, colors } from "./store";

    export let x;
    export let y;

    $: letter = $board[y][x];
    $: color = $colors[y][x];
</script>

<div class={`cell ${color}`}>
    <span>{letter}</span>
</div>

<style>
    .cell {
        background-color: var(--bg);
        aspect-ratio: 1;
        color: white;
        position: relative;
        border-radius: 5px;
        transition: background-color .7s;
    }

    .cell > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.7em;
        font-weight: bolder;
    }

    .correct {
        background-color: var(--green);
    }

    .close {
        background-color: var(--orange);
    }

    .incorrect {
        background-color: var(--dark);
    }

</style>