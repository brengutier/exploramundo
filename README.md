# Exploramundo

Prototipo HTML de la feature de planificación de viajes familiares (ecosistema Despegar).
Entregable final del curso UXBP 2026. Persona: Rodrigo, organizador de viaje familiar.

## Stack

- HTML plano + Tailwind vía CDN (sin React, sin npm, sin build step)
- Un solo `.html` autocontenido como entregable
- Tokens en CSS variables sobre `:root` (mini design system estilo shadcn)
- Lógica de estados en JS vanilla, rule-based (sin IA)

## Alcance

Feature dentro de una app que ya existe: las pantallas se conectan solo entre sí,
sin routing ni navegación global. Mobile only, viewport de 390px. Light mode únicamente.

## Flujo

1. Onboarding / perfil familiar — Step 1
2. Onboarding / perfil familiar — Step 2
3. Listado de paquetes
4. Detalle de paquete (tabs Estadía/Traslados, sticky price/CTA)
5. Simulador de pago (slider de millas + cuotas 1x/3x/6x/12x + tarjeta)
6. Resumen final
7. Success page

## Estructura

```
tokens/       Design tokens en CSS variables
design/       Referencias visuales del proto de Figma
```

## Estado

- [x] Tokens de tipografía (Manrope, 10 estilos)
- [ ] Tokens de color (brand indigo 50–900 + semánticos)
- [ ] Tokens de spacing, radius y sombras
- [ ] Pantalla 1 — Onboarding Step 1
- [ ] Pantallas 2 a 7
