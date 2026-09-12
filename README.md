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

0. Home de Exploramundo (la app que ya existe; solo el banner entra a la feature)
1. Onboarding / perfil familiar — Step 1 (pasajeros e intereses)
2. Onboarding / preferencias — Step 2 (destino, fechas, actividad, presupuesto)
3. Ranking de paquetes (top 10)
4. Detalle del paquete (tabs Estadía/Traslados, CTA flotante con el precio)
5. Forma de pago (millas, cuotas 1x/3x/6x/12x, tarjeta y moneda)
6. Resumen / checkout (con desglose por concepto)
7. Compra confirmada

## Estructura

```
index.html    El prototipo completo. Es el entregable.
tokens/       Los mismos tokens, separados por tipo, como referencia del
              design system. index.html los inlinea: si tocás uno, tocá los dos.
assets/       Memojis de Fluentmoji. Los dos del paso 2 van inlineados en
              base64; la brújula animada de la home va por ruta relativa,
              porque es un APNG y en base64 sumaría ~800 KB al HTML.
assets/paquetes/     Los 10 destinos del ranking más una foto de hotel
              compartida entre todos.
assets/home/         Los 5 destinos y las 2 ofertas de la home. No se
              repiten con los del ranking, para no spoilearlo.
assets/actividades/  14 fotos que las 50 actividades comparten, agrupadas
              por lo que se ve en la imagen.
              Las tres carpetas cargan por ruta relativa y cada una tiene
              su README con nombres y tamaños.
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
- **Actividades por edad.** La tab la define la actividad y no la familia: con
  tope de edad es de chicos, desde los 18 es de adultos, y sin tope va en
  "Todos". Así cada una aparece en un solo lugar. La tab de menores se rotula
  con sus edades reales —chicos de 2 y 5 muestran "2-5 años"—, y una tab sin
  actividades en ese paquete no se muestra. Las incluidas van primero.
- **Vuelos.** Rodrigo sale de Córdoba, así que todo internacional hace escala
  en Buenos Aires, y la vuelta invierte el recorrido.
- **Pago.** Las millas descuentan a 0,05 USD cada una y topean en el saldo, no
  en el precio: el paquete nunca se paga entero con millas. Las cuotas reparten
  el total y solo 12 suma interés, avisado antes de elegir. El toggle ARS/USD
  se puede volver a tocar acá y recalcula todo.
- **Resumen.** El desglose por concepto reparte el precio con porcentajes fijos
  y la última fila absorbe el redondeo, así la suma cierra exacta con descuento
  e interés incluidos.
- **Vocabulario.** Los pasajeros son "adultos y menores" en todo el flujo, como
  los rotula el quiz del paso 1.

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
- [x] Pantalla 5 — Forma de pago (millas, cuotas y moneda)
- [x] Pantalla 6 — Resumen / checkout
- [x] Pantalla 7 — Compra confirmada
- [x] Home de Exploramundo (entrada a la feature)
- [x] Las 32 fotos: 11 de paquetes, 7 de home y 14 de actividades

El prototipo está completo. Toda card que muestra una imagen tiene su
degradado de respaldo, así que si falta un archivo no se rompe nada.
