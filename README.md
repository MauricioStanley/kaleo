# Kaleo Hotel Boutique — sitio web (maqueta)

Sitio de demostración para **Kaleo Hotel Boutique**, Colonia San Benito, San Salvador.
HTML, CSS y JavaScript *vanilla*. Sin framework, sin paso de compilación, sin dependencias.

## Cómo verlo

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python -m http.server 4323
```

Y entra a `http://localhost:4323`.

## Estructura

```
index.html            Portada
habitaciones.html     Las 5 categorías + tabla comparativa
nava.html             Restaurante Nava y la cafetería
nosotros.html         Historia, sostenibilidad y amenidades
ofertas.html          Paquetes y tarifas
ubicacion.html        Mapa, distancias y formulario de contacto
reservar.html         Motor de reservas (maqueta, 5 pasos)
privacidad.html       Aviso de privacidad y términos
assets/css/styles.css Sistema de diseño (tokens, componentes)
assets/js/
  data.js             Datos del hotel: habitaciones, tarifas, ofertas, extras
  partials.js          Footer, barra de anuncio, barra fija de reserva, WhatsApp
  main.js              Interacciones (scroll, menú, reveal, lightbox, FAQ, comparador)
  booking.js           Motor de reservas
  i18n.js              Traducción cliente ES ⇄ EN
manifest.json / sw.js  PWA: instalable y con carga sin conexión
```

## Identidad

- **Color:** verde-piedra de fondo, tarjetas blancas y limpias, verde salvia (`#476a4b`, acción), verde bosque (`#2e3d30`, secciones profundas) y terracota tenue para el detalle.
- **Tipografía:** Lora (serif de titulares) + Mulish (texto e interfaz), ambas de Google Fonts.
- **Movimiento:** una sola animación de entrada al hacer scroll; hover con elevación y barrido de luz en botones; todo respeta `prefers-reduced-motion`.
- **Tono:** sereno y sostenible; "kaleo" (griego, "una llamada") como invitación a bajar el ritmo.

## Funcionalidades

- Motor de reservas de 5 pasos con calendario de precios indicativos, extras y cálculo de IVA. **No procesa pagos.**
- Selector de idioma **ES / EN** (traducción por texto, sin recarga; recuerda la preferencia).
- Barra de reserva fija que aparece al hacer scroll en todas las páginas.
- PWA instalable con service worker (carga instantánea / offline).
- Botón flotante de WhatsApp y barra de reserva móvil.
- Tabla comparativa de habitaciones, acordeón de preguntas frecuentes.
- Página de sostenibilidad como diferenciador de marca.
- Datos estructurados (`Hotel`, `FAQPage`) y Open Graph para compartir.

## Antes de publicarlo como sitio oficial

- **Imágenes:** las de `assets/img/hotel/` son **provisionales** (bloques de color etiquetados). Sustituir por fotografía real: fachada, jardín, sun terrace, cada categoría de habitación, restaurante Nava, cafetería y paneles solares.
- **Datos a confirmar con el hotel:** número exacto de habitaciones (la maqueta usa 12), carta y horarios de Nava y de la cafetería, tarifas, detalles y cifras de sostenibilidad (paneles, consumo), política de mascotas, coordenadas exactas del mapa.
- **Reseñas y calificación** de la portada son de ejemplo.
- El **calendario de precios** del motor de reservas se calcula (temporada / fin de semana); no refleja disponibilidad real.
- Enlaces de **Facebook e Instagram** del footer quedan como marcador (`#`): sustituir por los perfiles reales.
- Los formularios (contacto, boletín, reserva) **no envían nada**: conectar a un backend, a un servicio de correo o al motor real (p. ej. Cloudbeds).
