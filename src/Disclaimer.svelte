<div class="disclaimer">
    <p>pArole è giocabile</p>
    <p>solo in modalità portrait.</p>
    <p>Per cortesia gira il tuo telefono</p>
</div>

<style>
     .disclaimer {
        display: none;
    }
    @media only screen and (orientation:landscape) and (max-width: 1023px) {
        .disclaimer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            visibility: visible;
            background-color: red;
            color: whitesmoke;
            font-size: 30px;
            font-weight: bolder;
            width: 100%;
            height: 100vh;
            z-index: 1;
        }
    }

</style>