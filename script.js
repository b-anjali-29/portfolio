// Reveal cards on scroll
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0) scale(1)";
    }
  });
},{threshold:0.2});
cards.forEach(card => observer.observe(card));

// Typing effect
const text = "🚀 Open to Internships & Entry-Level AI/ML Roles";
const typingElement = document.getElementById("typing");
let index = 0;
function type(){
  if(index < text.length){
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
type();
