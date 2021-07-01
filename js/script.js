const today = new Date();
const year = today.getFullYear();

const copyRight= document.querySelector(".copyright");
copyRight.innerHTML = `<p>Copyright ${year} | dru oliver</p>`;
