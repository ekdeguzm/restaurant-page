function createFooter() {
  const content = document.getElementById("content");
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} ekdeguzm`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ekdeguzm";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  
  content.appendChild(footer);

  return footer;
}

export default createFooter;
