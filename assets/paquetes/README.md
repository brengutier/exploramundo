# Fotos de los paquetes

Una imagen por destino, nombrada con el `id` del paquete en `index.html`.
El nombre tiene que coincidir exacto —en minúsculas, con guiones y sin
tildes— porque la ruta se arma sola:

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

## Tamaño

**1024 × 640 px**, JPG. Es relación 16:10 exacta.

La card las muestra a 340 × 213 px, así que 1024 de ancho cubre pantallas
de hasta 3x sin que se vean blandas. Se recortan con `object-fit: cover`
y quedan centradas: si la foto tiene un punto de interés muy al borde,
puede perderse.

## Mientras falten

Cada card tiene un degradado propio de fondo. Si el archivo no existe, se
ve ese degradado en lugar de una imagen rota, así que se pueden ir
sumando de a una sin romper nada.
