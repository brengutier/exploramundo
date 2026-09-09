/* ============================================
   EXPLORAMUNDO - CATÁLOGO DE INTERESES
   Alimenta los chips sugeridos y el buscador
   del bottom sheet "Agregar interés".
   ============================================ */

/* Cada interés declara la franja de edad en la que tiene sentido.
   `min` / `max` filtran TANTO los sugeridos COMO los resultados del
   buscador: un menor de 8 años que busca "bares" no lo encuentra.
   `sin` son sinónimos que matchean en la búsqueda sin mostrarse como chip.
   `tags` se usan para recomendar similares cuando no hay match exacto. */

const INTERESES = [
  /* --- aire libre y naturaleza --- */
  { id:'playa',        label:'Playa',              min:0,  tags:['aire-libre','agua','relax'],   sin:['mar','costa','arena'] },
  { id:'montania',     label:'Montaña',            min:0,  tags:['aire-libre','naturaleza'],     sin:['sierra','cerro'] },
  { id:'trekking',     label:'Trekking',           min:6,  tags:['aire-libre','deporte'],        sin:['senderismo','caminata','hiking'] },
  { id:'camping',      label:'Camping',            min:6,  tags:['aire-libre','naturaleza'],     sin:['acampar','carpa'] },
  { id:'naturaleza',   label:'Naturaleza',         min:0,  tags:['aire-libre','naturaleza'],     sin:['paisajes','flora','fauna'] },
  { id:'cataratas',    label:'Cataratas',          min:0,  tags:['aire-libre','naturaleza'],     sin:['saltos'] },
  { id:'nieve',        label:'Nieve',              min:0,  tags:['aire-libre'],                  sin:['invierno'] },
  { id:'esqui',        label:'Esquí',              min:6,  tags:['aire-libre','deporte'],        sin:['snowboard','ski'] },
  { id:'avistaje',     label:'Avistaje de fauna',  min:4,  tags:['naturaleza','aire-libre'],     sin:['ballenas','pinguinos','aves','safari'] },

  /* --- agua --- */
  { id:'pileta',       label:'Pileta',             min:0,  tags:['agua','relax'],                sin:['piscina','natacion'] },
  { id:'snorkel',      label:'Snorkel',            min:8,  tags:['agua','aventura'],             sin:['esnorquel'] },
  { id:'buceo',        label:'Buceo',              min:13, tags:['agua','aventura'],             sin:['diving','scuba'] },
  { id:'surf',         label:'Surf',               min:8,  tags:['agua','deporte','aventura'],   sin:['olas','bodyboard'] },
  { id:'kayak',        label:'Kayak',              min:8,  tags:['agua','aventura','deporte'],   sin:['canotaje','remo'] },
  { id:'navegacion',   label:'Navegación',         min:0,  tags:['agua'],                        sin:['barco','velero','catamaran','crucero'] },

  /* --- deporte --- */
  { id:'futbol',       label:'Fútbol',             min:0,  tags:['deporte'],                     sin:['cancha','partido'] },
  { id:'tenis',        label:'Tenis',              min:6,  tags:['deporte'],                     sin:['padel'] },
  { id:'ciclismo',     label:'Ciclismo',           min:6,  tags:['deporte','aire-libre'],        sin:['bici','bicicleta','mtb'] },
  { id:'escalada',     label:'Escalada',           min:8,  tags:['deporte','aventura'],          sin:['climbing','rapel'] },
  { id:'golf',         label:'Golf',               min:13, tags:['deporte'] },
  { id:'gimnasio',     label:'Gimnasio',           min:13, tags:['deporte'],                     sin:['gym','entrenar','pesas'] },

  /* --- cultura --- */
  { id:'cultura',      label:'Cultura',            min:6,  tags:['cultura'],                     sin:['cultural'] },
  { id:'museos',       label:'Museos',             min:4,  tags:['cultura'],                     sin:['museo','exposicion','muestra'] },
  { id:'historia',     label:'Historia',           min:10, tags:['cultura'],                     sin:['ruinas','patrimonio','historico'] },
  { id:'arte',         label:'Arte',               min:10, tags:['cultura'],                     sin:['galerias','pintura','escultura'] },
  { id:'arquitectura', label:'Arquitectura',       min:13, tags:['cultura'],                     sin:['edificios','iglesias','catedrales'] },
  { id:'teatro',       label:'Teatro',             min:10, tags:['cultura','entretenimiento'],   sin:['obra'] },
  { id:'musica',       label:'Música en vivo',     min:10, tags:['cultura','entretenimiento'],   sin:['recital','concierto','banda'] },
  { id:'festivales',   label:'Festivales',         min:10, tags:['cultura','entretenimiento'],   sin:['ferias','carnaval'] },
  { id:'pueblos',      label:'Pueblos con encanto',min:13, tags:['cultura','relax'],             sin:['pueblitos','aldeas'] },

  /* --- gastronomía --- */
  { id:'gastronomia',  label:'Gastronomía',        min:10, tags:['gastronomia','cultura'],       sin:['comida','cocina','gourmet','comer'] },
  { id:'restaurantes', label:'Restaurantes',       min:10, tags:['gastronomia'],                 sin:['restaurant','resto'] },
  { id:'mercados',     label:'Mercados',           min:0,  tags:['gastronomia','cultura'],       sin:['feria','comida callejera','street food'] },
  { id:'dulces',       label:'Heladerías y dulces',min:0,  tags:['gastronomia','ninios'],        sin:['helado','postres','chocolate'] },
  { id:'vinos',        label:'Vinos',              min:18, tags:['gastronomia'],                 sin:['bodegas','vino','enoturismo'] },
  { id:'cerveza',      label:'Cerveza artesanal',  min:18, tags:['gastronomia','nocturna'],      sin:['birra','cervecerias'] },

  /* --- relax --- */
  { id:'descanso',     label:'Descanso',           min:0,  tags:['relax'],                       sin:['relax','relajarse','tranquilidad','no hacer nada'] },
  { id:'spa',          label:'Spa',                min:16, tags:['relax'],                       sin:['masajes','wellness'] },
  { id:'termas',       label:'Termas',             min:0,  tags:['relax','agua'],                sin:['aguas termales','banios termales'] },
  { id:'resort',       label:'Resort all inclusive',min:0, tags:['relax'],                       sin:['all inclusive','todo incluido','hotel'] },
  { id:'yoga',         label:'Yoga y meditación',  min:13, tags:['relax','deporte'],             sin:['meditacion','mindfulness','pilates'] },

  /* --- entretenimiento --- */
  { id:'parques',      label:'Parques de diversiones',min:0,tags:['entretenimiento','ninios'],   sin:['parque','disney','montania rusa','juegos mecanicos'] },
  { id:'acuaticos',    label:'Parques acuáticos',  min:0,  tags:['entretenimiento','agua','ninios'], sin:['toboganes','aquapark'] },
  { id:'zoologico',    label:'Zoológico y acuario',min:0,  tags:['entretenimiento','ninios','naturaleza'], sin:['zoo','acuario','animales'] },
  { id:'shows',        label:'Shows y espectáculos',min:0, tags:['entretenimiento'],             sin:['circo','espectaculo'] },
  { id:'bares',        label:'Bares',              min:18, tags:['nocturna'],                    sin:['bar','tragos','cocteles'] },
  { id:'nocturna',     label:'Vida nocturna',      min:18, tags:['nocturna'],                    sin:['boliche','fiesta','discoteca','salir de noche'] },
  { id:'casino',       label:'Casino',             min:18, tags:['nocturna','entretenimiento'],  sin:['apuestas'] },

  /* --- compras --- */
  { id:'compras',      label:'Compras',            min:10, tags:['compras'],                     sin:['shopping','tiendas'] },
  { id:'outlets',      label:'Outlets',            min:13, tags:['compras'],                     sin:['descuentos','marcas'] },

  /* --- tiempo tranquilo / chicos --- */
  { id:'juegos',       label:'Juegos',             min:0,  max:14, tags:['ninios'],              sin:['jugar','juguetes'] },
  { id:'dibujar',      label:'Dibujar',            min:0,  max:14, tags:['ninios','cultura'],    sin:['pintar','arte para chicos'] },
  { id:'peliculas',    label:'Películas',          min:0,  tags:['entretenimiento'],             sin:['cine','pelis','series'] },
  { id:'leer',         label:'Leer',               min:6,  tags:['cultura'],                     sin:['libros','lectura'] },
  { id:'videojuegos',  label:'Videojuegos',        min:6,  tags:['ninios','entretenimiento'],    sin:['gaming','consola','play'] },
];

/* Chips sugeridos por franja etaria. Explícito y en orden de aparición:
   reproduce exactamente lo definido en el diseño y es fácil de ajustar. */
const SUGERIDOS = {
  '0-5':   ['juegos','playa','pileta','dibujar','zoologico'],
  '6-12':  ['juegos','futbol','dibujar','peliculas','leer'],
  '13-17': ['videojuegos','playa','futbol','compras','musica'],
  '18+':   ['gastronomia','descanso','trekking','playa','bares'],
};

/* Términos que la gente busca pero que no son categorías del catálogo.
   Cuando no hay match exacto, se ofrecen estos ids como "similares". */
const RELACIONADOS = {
  'running':    ['trekking','ciclismo','gimnasio'],
  'correr':     ['trekking','ciclismo','gimnasio'],
  'maraton':    ['trekking','ciclismo','gimnasio'],
  'pesca':      ['naturaleza','navegacion','kayak'],
  'aventura':   ['trekking','escalada','kayak','surf'],
  'fotografia': ['naturaleza','arquitectura','cultura'],
  'moto':       ['ciclismo','naturaleza'],
  'caballos':   ['naturaleza','aire-libre'],
  'skate':      ['ciclismo','deporte'],
  'basquet':    ['futbol','deporte'],
  'volley':     ['futbol','playa'],
  'rugby':      ['futbol','deporte'],
  'anime':      ['peliculas','videojuegos'],
  'tiktok':     ['videojuegos','peliculas'],
  'musica':     ['musica','festivales','shows'],
  'idiomas':    ['cultura','historia'],
  'religion':   ['arquitectura','historia','cultura'],
  'trabajo':    ['descanso','resort'],
};
