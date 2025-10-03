// Mostrar resultado do quiz
document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  window.scrollTo(0, document.getElementById("resultado").offsetTop);
});

// Contador regressivo (3 dias)
function iniciarContador() {
  const fim = new Date();
  fim.setDate(fim.getDate() + 3);
  const contador = document.getElementById("contador");

  setInterval(() => {
    const agora = new Date().getTime();
    const distancia = fim - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);
}
iniciarContador();

// Scroll automático para o quiz
function scrollToQuiz() {
  document.getElementById("quiz-section").scrollIntoView({ behavior: "smooth" });
}
