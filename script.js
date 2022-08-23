/* const handleClick = () => {
    let elements = document.querySelectorAll(".button");
    for(let i=0; i<elements.length; i++) {
        elements[i].addEventListener("click", () => console.log(elements[i].innerHTML)

        )
    }
}
handleClick() */

/* const handleClick = () => {
    let elements = document.querySelectorAll('.button');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].addEventListener('click', () => console.log(elements[i].innerHTML)
      )
    }
  }
  handleClick() */

/*   const handleClick = () => {
    const buttonElements = document.getElementsByClassName("button");
    for (let i = 0; i < buttonElements.length; i++) {
      buttonElements[i].addEventListener("click", function () {
        console.log(buttonElements[i].textContent);
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
handleClick()  

/* let elements = document.querySelectorAll('.button');
for (let i = 0; i < elements.length; i += 1) {
  elements[i].addEventListener('click', () => {
    console.log(elements[i].innerHTML);
  })
} */
  // jelen esetben 0 vagy 1 vagy 2