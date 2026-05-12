
        let btn = document.querySelectorAll(".box");
        let message = document.querySelector('.message');
        let newgame = document.querySelector('.newgame');
        let reset = document.querySelector('.reset');
        let turnO = true;
        let gameOver = false;
        const winnerpattren = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        btn.forEach((box) => {
            box.addEventListener("click", () => {
                if (box.innerText != "" || gameOver) {
                    return;
                }
                if (turnO) {
                    box.innerText = "O";
                    box.classList.add('player')
                    turnO = false;
                    checkWin();
                }
                else {
                    box.innerText = "X";
                     box.classList.add('player')
                    turnO = true;
                    checkWin();
                }
            });
        });

        function checkWin() {
            let iswin = false;
            for (let pattren of winnerpattren) {
                let a = btn[pattren[0]].innerText;
                let b = btn[pattren[1]].innerText;
                let c = btn[pattren[2]].innerText;
                if (a != "" && a === b && a === c) {
                    message.innerText = `${a} wins`;
                    iswin = true;
                    gameOver = true;
                    return;
                }
            }
            isFilled = [...btn].every(box => box.innerText !== "");
            if (!iswin && isFilled) {
                message.innerText = "draw";
            }
        }

        reset.addEventListener('click', resetGame);
        newgame.addEventListener('click', resetGame);

        function resetGame() {
            btn.forEach(box => box.innerText = "")
            turnO = true;
            gameOver = false;
            message.innerText="";
        }
  