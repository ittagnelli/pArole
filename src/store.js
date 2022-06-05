import { writable } from 'svelte/store';

export function createGrid() {
    const grid = [];

    for(let r = 0; r < 6; r++) {
        grid.push([]);
        for(let c = 0; c < 5; c++) 
            grid[r][c] = '';
    }

    return grid;
}

export const board = writable(createGrid());
export const gameInfo = writable({
    char: 0,
    attempt: 0
});

export const GAME_WORD = writable("HELLO");
export const guess = writable("");
export const colors = writable(createGrid());
export const gameOver = writable(false);