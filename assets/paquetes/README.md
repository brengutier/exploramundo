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

## Foto del hotel

El detalle del paquete muestra además una foto del alojamiento, con el
mismo nombre más el sufijo `-hotel`:

```
riviera-maya-hotel.jpg   curazao-hotel.jpg   bayahibe-hotel.jpg
aruba-hotel.jpg          porto-de-galinhas-hotel.jpg
punta-cana-hotel.jpg     cancun-hotel.jpg    florianopolis-hotel.jpg
san-andres-hotel.jpg     buzios-hotel.jpg
```

Van en **800 × 500 px** (se muestran a 150px de alto, recortadas a lo ancho).

Las miniaturas de las actividades no usan archivo: siempre son degradados.

## Tamaño de la foto del destino

**1024 × 640 px**, JPG. Es relación 16:10 exacta.

La card las muestra a 340 × 213 px, así que 1024 de ancho cubre pantallas
de hasta 3x sin que se vean blandas. Se recortan con `object-fit: cover`
y quedan centradas: si la foto tiene un punto de interés muy al borde,
puede perderse.

## Mientras falten

Cada card tiene un degradado propio de fondo. Si el archivo no existe, se
ve ese degradado en lugar de una imagen rota, así que se pueden ir
sumando de a una sin romper nada.
