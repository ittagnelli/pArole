<script>
    import Board from './Board.svelte';
    import Keyboard from './Keyboard.svelte';
    import GameOver from './GameOver.svelte';
    import Navbar from './Navbar.svelte';
    import Disclaimer from './Disclaimer.svelte';
    import { gameOver } from './store';
    import { fade } from 'svelte/transition';   
</script>

<main>
    <Navbar />
    <Disclaimer />
    
    {#if $gameOver}
        <div in:fade={{duration: 1500}}>
            <GameOver />
        </div>
    {:else}
        <div in:fade={{duration: 1500}}>
            <Board />
            <Keyboard />
        </div>
    {/if}
</main>


<style>
    main {
        margin: auto;
    }
</style>
