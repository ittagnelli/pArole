<script>
    import Key from "./Key.svelte";
    import { board, gameInfo, colors, GAME_WORD, guess, gameOver } from "./store";

    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3 = ['DEL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'ENTER']; 


    function handleDelete() {
        if($gameInfo.char === 0)
            return;
        gameInfo.update((prev) => {
            return {
                char: prev.char - 1,
                attempt: prev.attempt
            }
        });

        board.update((prevBoard) => {
            const newBoard = prevBoard;
            newBoard[$gameInfo.attempt][$gameInfo.char] = '';
            return newBoard;
        });
    }

    function handleEnter() {
        let { attempt, char } = $gameInfo;

        if(char != 5)
            return;
        
        gameInfo.set({
            attempt:    attempt + 1,
            char: 0
        });

        const prevAttempt = $gameInfo.attempt - 1;
        const newColorsBoard = $colors;

        const duplicateChars = new Set();

        for(let i = 0; i < 5; i++) {
            let char = $board[prevAttempt][i].toUpperCase();
            guess.update((prevChars) => prevChars + char);

            if($GAME_WORD[i].toUpperCase() === char)
                newColorsBoard[prevAttempt][i] = "correct";
            else if ($GAME_WORD.toUpperCase().includes(char)) {
                if(!duplicateChars.has(char)) {
                    newColorsBoard[prevAttempt][i] = "close";
                    duplicateChars.add(char);
               }
            } else
                newColorsBoard[prevAttempt][i] = "incorrect";
        }

        colors.set(newColorsBoard);

        if($guess == $GAME_WORD.toUpperCase() || prevAttempt == 5)
            gameOver.set(true);
        else
            guess.set("");
    }

    function keypress(key) {
        console.log("Keypress:", key);
        if (key == "DEL")
            handleDelete();
        else if (key == "ENTER")
            handleEnter();
        else {
            let { attempt, char } = $gameInfo;

            if (char > 4)
                return;
            
            board.update((prevBoard) => {
                const newBoard = prevBoard;
                newBoard[attempt][char++] = key;
                return newBoard;
            });

            gameInfo.set({attempt, char});
        }
    }
</script>

<div class="keybaord">
    <div class="row">
        {#each row1 as char}
             <Key {char} {keypress} />
        {/each}
    </div>

    <div class="row">
        {#each row2 as char}
             <Key {char} {keypress} />
        {/each}
    </div>

    <div class="row">
        {#each row3 as char}
             <Key {char} {keypress} />
        {/each}
    </div>
</div>

<style>
    .keybaord {
        box-sizing:border-box;
        position: fixed;
        width: 100vw;
        bottom: 20px;
        z-index: -1;
    }

    .row {
        box-sizing:border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

</style>