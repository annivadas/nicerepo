
/*   const handleClick = () => {
  const buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        console.log(buttons[i].textContent);
      });
    }
  };
  handleClick() */

const handleClick = () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      console.log(btn.innerHTML);
    })
  );
};
/* const handleClick = () => {
    let elements = document.querySelectorAll(".button");
    for(let i=0; i<elements.length; i++) {
        elements[i].addEventListener("click", () => console.log(elements[i].innerHTML)
        )
    }
} */

handleClick()


/* let elements = document.querySelectorAll('.button');
for (let i = 0; i < elements.length; i += 1) {
  elements[i].addEventListener('click', () => {
    console.log(elements[i].innerHTML);
  })
} */
  // jelen esetben 0 vagy 1 vagy 2

