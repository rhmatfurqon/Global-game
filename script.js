function handleOpenGame (data) {
  const linkUrl = data.getAttribute("data-url")
  window.open(linkUrl, "_blank")
}

function handleSearch(){
 const input = document.getElementById("search")
 input.classList.toggle("active")
}