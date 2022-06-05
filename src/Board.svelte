<script>
    import { board } from './store';
    import Cell from './Cell.svelte';
</script>

<div class="game-board">
    {#each $board as column, y}
             {#each column as row, x}
                  <Cell {y} {x}/>
             {/each}
    {/each}
</div>

<style>
    .game-board {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 3px;
        width: 65%;
        margin: 10px auto;
        z-index: 0;
    }

    /* desktop */
    @media screen and (min-width: 1024px) {
        .game-board {
            width: 20%;
            margin: 30px auto;
        }
    }
    
</style>