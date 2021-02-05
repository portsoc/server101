const messages = ['Ahoj!', 'Hi!', 'Cześć!', '¡Hola!', 'Ciao!', 'Servus!'];

let lastIndex = 0;

export function nextMessage() {
  lastIndex = (lastIndex + 1) % messages.length;
  return messages[lastIndex];
}
