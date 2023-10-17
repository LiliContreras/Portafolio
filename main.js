let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Me dedico a la investigación en el área de sismología y tsunamis. Desarrollo sitios web para divulgar la importancia del estudio de estos fenómenos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  