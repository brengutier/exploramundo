# Fotos de la home

Son las de las secciones "Seguí explorando" y "Escapadas de relax".
A propósito **no se repiten con las de `assets/paquetes/`**: si la home
mostrara los mismos destinos, spoilearía el ranking antes de que la
persona lo pida.

## Destinos — 560 × 400 px (7:5)

Se muestran a 140 × 100 px, recortadas con `object-fit: cover`.

```
bariloche.jpg
mendoza.jpg
rio-de-janeiro.jpg
madrid.jpg
cusco.jpg
```

## Ofertas — 560 × 400 px

```
termas-rio-hondo.jpg
costa-atlantica.jpg
```

Se muestran en miniaturas **cuadradas** de 48 × 48 px, así que `object-fit:
cover` les recorta los costados y deja el centro. Conviene que el motivo
esté centrado; si queda muy al borde, se pierde.

## Mientras falten

Cada card tiene su propio degradado de fondo. Si el archivo no existe se
ve el degradado en lugar de una imagen rota, así se pueden ir sumando de
a una.
