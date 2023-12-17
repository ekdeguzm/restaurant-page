function createFooter() {
  const content = document.getElementById("content");
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const copyright = document.createElement("p");

  // Create a span element for the name "ekdeguzm"
  const nameSpan = document.createElement("span");
  nameSpan.textContent = "ekdeguzm";

  // Create a link element for the GitHub profile
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ekdeguzm";
  githubLink.target = "_blank"; // Open link in a new tab

  // Use Unicode character for the GitHub icon
  const githubIcon = document.createTextNode("\u{1F5A5}"); // Unicode for GitHub icon

  githubLink.appendChild(githubIcon);

  // Append the name span and GitHub link to the copyright paragraph
  copyright.appendChild(document.createTextNode("Copyright © "));
  copyright.appendChild(nameSpan);
  copyright.appendChild(document.createTextNode(" "));
  copyright.appendChild(githubLink);

  // Append the copyright paragraph to the footer
  footer.appendChild(copyright);

  // Append the footer to the content
  content.appendChild(footer);

  return footer;
}

export default createFooter;
