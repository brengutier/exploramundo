# Fotos de las actividades

Las 50 actividades del prototipo comparten **13 fotos**, agrupadas por lo
que se vería en la imagen. Cada actividad declara su grupo en el campo
`foto` dentro de `DETALLES`, en `index.html`.

Son miniaturas de 48 × 48 px, así que **200 × 200 px** alcanza y sobra.

| Archivo | Usos | Qué muestra |
|---|---|---|
| `catamaran.jpg` | 8 | Paseos en barco, velero, lancha o jangada |
| `spa.jpg` | 6 | Spa y masajes |
| `chicos.jpg` | 6 | Talleres y juegos para chicos |
| `snorkel.jpg` | 4 | Snorkel y buceo |
| `paddle-kayak.jpg` | 4 | Kayak y stand up paddle |
| `buggy.jpg` | 4 | Buggy, jeep y carritos |
| `surf.jpg` | 3 | Surf y windsurf |
| `playa-chicos.jpg` | 3 | Chicos jugando en la arena |
| `fauna-marina.jpg` | 3 | Acuarios, delfines, caballitos de mar |
| `cena.jpg` | 3 | Cenas y cata de vinos |
| `ruinas.jpg` | 2 | Sitios arqueológicos |
| `naturaleza.jpg` | 2 | Cenotes, senderos, selva |
| `parque-acuatico.jpg` | 2 | Parques acuáticos y toboganes |

Como se repiten entre destinos, conviene que sean **genéricas**: que no se
reconozca una playa puntual, porque la misma foto de snorkel aparece en
Riviera Maya, Curazao, Bayahibe y San Andrés.

## Mientras falten

Cada miniatura tiene un degradado de fondo derivado del color del
destino. Si el archivo no existe se ve ese degradado, así que se pueden
sumar de a una.
