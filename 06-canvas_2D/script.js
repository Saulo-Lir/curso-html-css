
var c = document.getElementById('canvas'); // Obtem o elemento canvas
var contexto = c.getContext('2d'); // Cria o elemento no contexto 2D

contexto.moveTo(100,100);  // Posição inicial do cursor  x, y (horizonatal da esquerda pra direita, vertical de cima para baixo)
contexto.lineTo(300,100); // Aplica uma linha no meio da tela

contexto.moveTo(300,100);
contexto.lineTo(300,300);

contexto.moveTo(100,100);
contexto.lineTo(100,300);

contexto.moveTo(300,100);
contexto.lineTo(300,300);

contexto.moveTo(100,100);
contexto.lineTo(300,300);

contexto.moveTo(100,300);
contexto.lineTo(300,100);

contexto.stroke(); // Desena a linha aplicada anteriormente

