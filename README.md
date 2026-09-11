# Exploramundo

Prototipo HTML de la feature de planificación de viajes familiares (ecosistema Despegar).
Entregable final del curso UXBP 2026. Persona: Rodrigo, organizador de viaje familiar.

## Stack

- HTML plano + Tailwind vía CDN (sin React, sin npm, sin build step)
- Un solo `index.html` autocontenido: tokens, catálogos y lógica van inline
- Tokens en CSS variables sobre `:root` (mini design system estilo shadcn)
- Lógica de estados en JS vanilla, rule-based (sin IA)
- Íconos: [Lucide](https://lucide.dev) vía CDN

## Alcance

Feature dentro de una app que ya existe: las pantallas se conectan solo entre sí,
sin routing ni navegación global. Mobile only, viewport de 390px. Light mode únicamente.

## Flujo

1. Onboarding / perfil familiar — Step 1 (pasajeros e intereses)
2. Onboarding / preferencias — Step 2 (destino, fechas, actividad, presupuesto)
3. Listado de paquetes (top 10)
4. Detalle de paquete (tabs Estadía/Traslados, sticky price/CTA)
5. Simulador de pago (slider de millas + cuotas 1x/3x/6x/12x + tarjeta)
6. Resumen final
7. Success page

## Estructura

```
index.html    El prototipo completo. Es el entregable.
tokens/       Los mismos tokens, separados por tipo, como referencia del
              design system. index.html los inlinea: si tocás uno, tocá los dos.
assets/       Memojis de Fluentmoji en 256px. index.html los inlinea en
              base64 a 128px para no depender de rutas relativas.
assets/paquetes/  Fotos de los 10 destinos y de sus hoteles. Se cargan por
              ruta relativa, no inline: ver el README de esa carpeta.
design/       Referencias visuales del proto de Figma.
```

## Reglas que resuelve el prototipo

No son mocks: se calculan con los datos que carga la persona.

- **Pasajeros.** Adulto es 18+, menor 0–17. Siempre tiene que quedar un adulto,
  así que "Eliminar" se deshabilita en el último. Nombre y edad obligatorios.
- **Intereses.** Máximo 5 por persona, opcionales. Los sugeridos dependen de la
  franja etaria, y el buscador resuelve en tres niveles: nombre, sinónimo y
  —si no hay match— categorías similares. No se pueden crear intereses nuevos.
- **Presupuesto.** Con *límites exactos* el ranking descarta lo que se va del
  rango; con *flexibles* lo muestra y avisa cuánto se pasa. El toggle ARS/USD
  convierte los montos con una cotización fija.
- **Ranking.** El "cubre X de N intereses" cruza lo que ofrece cada destino con
  los intereses únicos de toda la familia. Si no cargaron ninguno, la etiqueta
  desaparece en vez de mostrar un cero.
- **Detalle.** Días y noches, resumen de pasajeros, fechas de cada tramo de
  vuelo, hora de cada traslado y capacidad del vehículo se derivan de lo que
  cargó la persona. Hotel, aerolíneas y reseñas son mock.
- **Actividades por edad.** "Todos" no es "sin filtro": son las actividades
  donde entra toda la familia. Cada franja muestra solo lo específico de esa
  edad, así las tabs no repiten. Se listan solo las franjas que tienen algún
  pasajero, y las incluidas van primero.
- **Vuelos.** Rodrigo sale de Córdoba, así que todo internacional hace escala
  en Buenos Aires, y la vuelta invierte el recorrido.

## Design tokens

| Grupo | Cantidad | Archivo |
|---|---|---|
| Tipografía (Manrope, 10 estilos) | 10 | `tokens/typography.css` |
| Color foundation (brand, neutral, status) | 31 | `tokens/colors.css` |
| Color semántico (text, border, surface, bg) | 27 | `tokens/colors.css` |
| Radius, spacing, border width y sombras | 20 | `tokens/layout.css` |

Nota de accesibilidad: `text-tertiary` (3.18 sobre `background`) y `brand-500`
(4.31 sobre blanco) no alcanzan AA para texto de cuerpo. Sirven para metadata,
helper text y elementos de UI, no para texto que haya que leer sí o sí.

## Estado

- [x] Tokens de tipografía, color, spacing, radius y sombra
- [x] Pantalla 1 — Onboarding Step 1 (perfil familiar)
- [x] Pantalla 2 — Onboarding Step 2 (preferencias)
- [x] Pantalla 3 — Ranking de paquetes (top 10)
- [x] Pantalla 4 — Detalle del paquete (estadía y traslados)
- [ ] Fotos de los destinos y hoteles en `assets/paquetes/`
- [ ] Pantalla 5 — Simulador de pago
- [ ] Pantalla 6 — Resumen final
- [ ] Pantalla 7 — Success
