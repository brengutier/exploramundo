# Fotos del prototipo

Todas en JPG, en esta carpeta. El nombre tiene que coincidir exacto
—minúsculas, con guiones y **sin tildes**— porque la ruta se arma sola
desde el `id` del paquete en `index.html`.

## Destinos — 10 archivos, 1024 × 640 px

Relación 16:10. Se usan en las cards del ranking, en el hero del detalle
y en el resumen.

```
riviera-maya.jpg
curazao.jpg
bayahibe.jpg
aruba.jpg
porto-de-galinhas.jpg
punta-cana.jpg
cancun.jpg
florianopolis.jpg
san-andres.jpg
buzios.jpg
```

Ojo con tres: `cancun` y `florianopolis` van sin tilde, y es
`porto-de-galinhas` con "de".

## Hotel — 1 archivo, 800 × 500 px

```
hotel.jpg
```

Es la misma para los diez paquetes. Siempre es un hotel de playa, así que
diferenciarla por destino no aportaba nada.

## Notas

Se recortan con `object-fit: cover` y quedan centradas: si la foto tiene
el punto de interés muy al borde, puede perderse.

Mientras un archivo no exista, la card muestra un degradado propio en vez
de una imagen rota, así que se pueden ir sumando de a una.

Las miniaturas de las actividades no usan archivo: siempre son degradados.
