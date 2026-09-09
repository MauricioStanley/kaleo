/* ============================================================
   i18n ligero — Español (base) · English
   Traduce por coincidencia exacta de texto, guarda el original
   y reacciona al contenido que el JS del sitio renderiza.
   ============================================================ */
(function () {
  "use strict";

  var LANGS = { es: "ES", en: "EN" };
  var STORE = "kl_lang";

  var EN = {
    /* --- Navegación y marca --- */
    "Habitaciones": "Rooms",
    "Nava": "Nava",
    "Nava y cafetería": "Nava & café",
    "Nosotros": "About",
    "Ofertas": "Offers",
    "Ubicación": "Location",
    "Reservar": "Book",
    "Reservar ahora": "Book now",
    "Hotel Boutique": "Boutique Hotel",
    "Saltar al contenido": "Skip to content",
    "Inicio": "Home",
    "Abrir menú": "Open menu",
    "Idioma": "Language",

    /* --- Home: hero --- */
    "Hecho para bajar el ritmo": "Made to slow down",
    "Un hotel boutique de doce habitaciones en una calle arbolada de San Benito. Jardín, restaurante de la huerta a la mesa y una forma de viajar que pesa menos sobre el planeta.":
      "A twelve-room boutique hotel on a tree-lined street in San Benito. A garden, a farm-to-table restaurant and a way to travel that weighs less on the planet.",
    "Ver habitaciones": "View rooms",
    "Descubre": "Discover",

    /* --- Home: bienvenida --- */
    "El jardín": "The garden",
    "Kaleo quiere decir \"una llamada\"": "Kaleo means \"a calling\"",
    "Es una palabra griega. Nos gusta entenderla como una invitación a parar: a desayunar sin prisa, a leer en el jardín, a caminar el barrio en lugar de tomar un taxi. Doce habitaciones, un restaurante y una casa que funciona con energía solar.":
      "It's a Greek word. We like to read it as an invitation to pause: to have a slow breakfast, to read in the garden, to walk the neighbourhood instead of taking a taxi. Twelve rooms, a restaurant and a house that runs on solar power.",
    "Todo a escala humana: te aprendes los nombres del equipo, el café es de finca y el ruido de la ciudad se queda en la puerta.":
      "Everything on a human scale: you learn the team's names, the coffee is single-estate and the city noise stays at the door.",
    "Conoce la casa": "Get to know the house",
    "Habitaciones": "Rooms",
    "Calificación de huéspedes": "Guest rating",
    "Reseñas verificadas": "Verified reviews",

    /* --- Home: secciones --- */
    "Tres razones para quedarte": "Three reasons to stay",
    "El jardín y la sun terrace": "The garden and sun terrace",
    "Sombra, hamacas y una terraza al sol para el café de la mañana o la última copa.":
      "Shade, hammocks and a sun terrace for the morning coffee or the last drink.",
    "Nava, de la huerta a la mesa": "Nava, farm to table",
    "El restaurante de la casa: producto salvadoreño, hierbas del jardín y una carta que cambia con la temporada.":
      "The house restaurant: Salvadoran produce, herbs from the garden and a menu that changes with the season.",
    "Un hotel que pesa menos": "A hotel that weighs less",
    "Energía solar, luz LED, sin plásticos de un solo uso y agua que se aprovecha. El lujo también es eso.":
      "Solar power, LED lighting, no single-use plastics and water that gets reused. That's luxury too.",

    "Tu habitación en San Benito": "Your room in San Benito",
    "Doce habitaciones tranquilas, de la Sencilla a la Suite Kaleo. Ropa de cama de algodón, aire acondicionado de bajo consumo, Wi-Fi de fibra y desayuno en Nava incluido en la tarifa flexible. Precios de referencia por noche, sin impuestos.":
      "Twelve quiet rooms, from the Single to the Kaleo Suite. Cotton bedding, low-consumption air conditioning, fibre Wi-Fi and breakfast at Nava included in the flexible rate. Reference prices per night, taxes not included.",
    "Ver detalle": "View details",
    "Desde": "From",
    "Ver todas las habitaciones": "View all rooms",
    "Ver la carta de Nava": "See the Nava menu",
    "Conoce nuestra huella": "See our footprint",
    "Ver todas las ofertas": "View all offers",
    "Cómo llegar": "Directions",

    /* --- Barra de reserva --- */
    "Entrada": "Check-in",
    "Salida": "Check-out",
    "Huéspedes": "Guests",
    "2 adultos · 0 niños · 1 habitación": "2 adults · 0 children · 1 room",
    "Adultos": "Adults",
    "Niños": "Children",
    "Código / Tarifa": "Code / Rate",
    "Código promocional": "Promo code",
    "Opcional": "Optional",
    "Consultar": "Search",
    "Buscar disponibilidad": "Search availability",
    "2 adultos · 1 habitación": "2 adults · 1 room",
    "1 adulto · 1 habitación": "1 adult · 1 room",
    "2 adultos · 1 niño": "2 adults · 1 child",
    "2 adultos · 2 niños": "2 adults · 2 children",
    "4 adultos · 2 habitaciones": "4 adults · 2 rooms",

    /* --- Reserva directa / ventajas --- */
    "Reserva directa · desayuno en Nava, sin comisiones y cancelación flexible.":
      "Book direct · breakfast at Nava, no commissions and flexible cancellation.",
    "Ver ventajas": "See the benefits",
    "Cerrar aviso": "Close notice",
    "Reserva por WhatsApp": "Book via WhatsApp",
    "Escribir por WhatsApp": "Message us on WhatsApp",
    "Reserva directo con nosotros": "Book direct with us",
    "Lo que obtienes al reservar en este sitio y no en una agencia de viajes.":
      "What you get by booking on this site and not through a travel agency.",
    "Mejor precio garantizado": "Best price guaranteed",
    "Si encuentras una tarifa pública más baja, la igualamos.": "If you find a lower public rate, we match it.",
    "Desayuno en Nava incluido": "Breakfast at Nava included",
    "De temporada, con producto local y hierbas del jardín.": "Seasonal, with local produce and garden herbs.",
    "Sin comisiones": "No commissions",
    "Pagas la tarifa del hotel, sin recargos de intermediarios.":
      "You pay the hotel rate, with no middleman surcharges.",
    "Cancelación flexible": "Flexible cancellation",
    "La tarifa flexible se cancela sin cargo hasta 48 h antes de llegar.":
      "The flexible rate can be cancelled free of charge up to 48 h before arrival.",
    "Gimnasio y sun terrace": "Gym and sun terrace",
    "Acceso libre para huéspedes, todos los días.": "Free access for guests, every day.",
    "Salida tardía": "Late check-out",
    "Hasta las 14:00 sin costo cuando hay disponibilidad.": "Until 2:00 p.m. at no charge when available.",
    "Comprobar disponibilidad": "Check availability",

    /* --- Confianza / reseñas --- */
    "Lo que dicen los huéspedes": "What guests say",
    "\"El desayuno en Nava valdría el viaje solo. Y la calle es tan tranquila que olvidas que estás en la capital.\"":
      "\"Breakfast at Nava would be worth the trip on its own. And the street is so quiet you forget you're in the capital.\"",
    "Viaje de trabajo · Bogotá": "Business trip · Bogotá",
    "\"Se nota el cuidado por lo ambiental sin que te lo restrieguen. Todo funciona y todo es agradable.\"":
      "\"You can tell they care about the environment without rubbing it in your face. Everything works and everything is pleasant.\"",
    "Pareja · Costa Rica": "Couple · Costa Rica",
    "\"Trabajé una semana desde la cafetería. Wi-Fi impecable, café increíble y el jardín para las pausas.\"":
      "\"I worked a week from the café. Flawless Wi-Fi, incredible coffee and the garden for breaks.\"",
    "Estancia larga · trabajo remoto": "Long stay · remote work",

    /* --- FAQ --- */
    "Preguntas frecuentes": "Frequently asked questions",
    "¿A qué hora es el check-in y el check-out?": "What are the check-in and check-out times?",
    "Check-in desde las 3:00 p. m. y check-out hasta las 12:00 m. d. Si llegas antes, guardamos tu equipaje y puedes usar el jardín y la cafetería.":
      "Check-in from 3:00 p.m. and check-out until 12:00 noon. If you arrive earlier, we'll store your luggage and you can use the garden and the café.",
    "¿El desayuno está incluido?": "Is breakfast included?",
    "Sí, en la tarifa flexible y en la mayoría de paquetes. Se sirve en Nava de 6:30 a 10:30, con producto de temporada.":
      "Yes, in the flexible rate and most packages. It's served at Nava from 6:30 to 10:30, with seasonal produce.",
    "¿Qué hacen en materia de sostenibilidad?": "What do you do about sustainability?",
    "La casa funciona con energía solar, iluminación LED y sistemas de agua eficientes. No usamos plásticos de un solo uso y las amenidades de baño son rellenables. Compramos a productores locales.":
      "The house runs on solar power, LED lighting and efficient water systems. We don't use single-use plastics and the bathroom amenities are refillable. We buy from local producers.",
    "¿Hay gimnasio?": "Is there a gym?",
    "Sí, un gimnasio pequeño con equipo cardiovascular y de fuerza, abierto para huéspedes. También hay una sun terrace y clases de yoga bajo reserva.":
      "Yes, a small gym with cardio and strength equipment, open to guests. There's also a sun terrace and yoga classes on request.",
    "¿Aceptan mascotas?": "Do you accept pets?",
    "Aceptamos perros de hasta 12 kg en habitaciones designadas, con aviso previo y un cargo de limpieza.":
      "We accept dogs up to 12 kg in designated rooms, with prior notice and a cleaning fee.",
    "¿Se puede llegar caminando a los museos y restaurantes?": "Can you walk to the museums and restaurants?",
    "Sí. El Museo de Arte (MARTE) y el MUNA están a menos de 10 minutos a pie, y la Zona Rosa con sus restaurantes, a 5.":
      "Yes. The Art Museum (MARTE) and the MUNA are less than a 10-minute walk, and Zona Rosa with its restaurants is 5.",

    /* --- CTA --- */
    "Tu estancia empieza aquí": "Your stay begins here",
    "Mejor tarifa garantizada, desayuno en Nava y una casa tranquila a la que volver.":
      "Best rate guaranteed, breakfast at Nava and a quiet house to come back to.",

    /* --- Footer --- */
    "Avenida La Capilla #353, Colonia San Benito, San Salvador, El Salvador.":
      "Avenida La Capilla #353, Colonia San Benito, San Salvador, El Salvador.",
    "Hotel": "Hotel",
    "Reservas": "Reservations",
    "Reservar en línea": "Book online",
    "Recepción:": "Front desk:",
    "WhatsApp:": "WhatsApp:",
    "Boletín": "Newsletter",
    "Suscríbete y recibe un 10 % de descuento en tu primera reserva directa.":
      "Subscribe and get 10% off your first direct booking.",
    "Tu correo electrónico": "Your email address",
    "Suscribirme": "Subscribe",
    "Kaleo Hotel Boutique · San Salvador. Sitio de demostración.":
      "Kaleo Hotel Boutique · San Salvador. Demonstration site.",
    "Privacidad": "Privacy",
    "Términos": "Terms",
    "Contacto": "Contact",

    /* --- Encabezados de páginas interiores --- */
    "Nuestras habitaciones": "Our rooms",
    "Nava y la cafetería": "Nava and the café",
    "Nosotros": "About us",
    "Ofertas y paquetes": "Offers and packages",
    "Ubicación y contacto": "Location and contact",
    "Reserva tu estancia": "Book your stay",

    /* --- Habitaciones --- */
    "Doce habitaciones alrededor del jardín. Elige por cama y espacio; todas comparten el mismo estándar de descanso y el desayuno en Nava incluido en la tarifa flexible.":
      "Twelve rooms around the garden. Choose by bed and space; they all share the same standard of rest and breakfast at Nava included in the flexible rate.",
    "Comparar todas las habitaciones": "Compare all rooms",
    "Ocultar comparación": "Hide comparison",
    "Desde (USD / noche)": "From (USD / night)",
    "Superficie": "Size",
    "Cama": "Bed",
    "Capacidad": "Capacity",
    "Vista": "View",
    "Terraza privada": "Private terrace",
    "Ver": "View",
    "Reservar esta habitación": "Book this room",
    "Lo que incluye": "What's included",
    "¿Lista tu fecha?": "Ready with your dates?",
    "Consulta disponibilidad y tarifas en tiempo real en el motor de reservas.":
      "Check real-time availability and rates in the booking engine.",

    /* --- Nava --- */
    "Nava": "Nava",
    "La cafetería": "The café",
    "El restaurante de Kaleo trabaja con lo que da la temporada, los productores salvadoreños y la huerta del propio hotel. La cafetería, al lado, sirve café de finca de la mañana a la noche.":
      "Kaleo's restaurant works with what's in season, Salvadoran producers and the hotel's own kitchen garden. The café next door serves single-estate coffee from morning to night.",
    "Horarios": "Hours",
    "Desayuno": "Breakfast",
    "Almuerzo y cena": "Lunch and dinner",
    "Cafetería": "Café",
    "De la huerta a la mesa": "From the garden to the table",
    "Una semana en la carta": "A week on the menu",
    "La carta cambia con lo que hay. Esto es una muestra de una semana cualquiera.":
      "The menu changes with what's available. This is a sample from any given week.",
    "Abierto también al público, con reserva.": "Also open to the public, by reservation.",

    /* --- Nosotros / sostenibilidad --- */
    "Una casa pequeña, bien hecha": "A small house, well made",
    "Kaleo abrió como un proyecto de familia: recuperar una casa de San Benito y convertirla en un lugar para quedarse, no solo para dormir. Doce habitaciones es el tamaño exacto para que el trato sea personal.":
      "Kaleo opened as a family project: to restore a house in San Benito and turn it into a place to stay, not just to sleep. Twelve rooms is exactly the size for the service to stay personal.",
    "Lo que hacemos por el entorno": "What we do for the environment",
    "No es una etiqueta: es cómo está construida la operación.": "It's not a label: it's how the operation is built.",
    "Energía solar": "Solar power",
    "Paneles en la azotea que cubren buena parte del consumo diario del hotel.":
      "Rooftop panels that cover much of the hotel's daily consumption.",
    "Iluminación LED": "LED lighting",
    "Toda la casa, con sensores en las zonas comunes.": "The whole house, with sensors in the common areas.",
    "Agua eficiente": "Efficient water",
    "Grifería de bajo caudal y reaprovechamiento para el riego del jardín.":
      "Low-flow taps and reuse for garden irrigation.",
    "Sin plástico de un solo uso": "No single-use plastic",
    "Amenidades rellenables, agua filtrada en jarra y compras a granel.":
      "Refillable amenities, filtered water in a carafe and bulk purchasing.",
    "Compra local": "Local sourcing",
    "Nava y la cafetería trabajan con productores y tostadores salvadoreños.":
      "Nava and the café work with Salvadoran producers and roasters.",
    "Huerta propia": "Own kitchen garden",
    "Hierbas y algunas verduras salen del jardín del hotel a la cocina de Nava.":
      "Herbs and some vegetables go from the hotel garden straight to Nava's kitchen.",
    "Amenidades de la casa": "House amenities",
    "Jardín con hamacas": "Garden with hammocks",
    "Sun terrace": "Sun terrace",
    "Gimnasio": "Gym",
    "Cafetería de especialidad": "Specialty café",
    "Wi-Fi de fibra en todo el hotel": "Fibre Wi-Fi throughout the hotel",
    "Estacionamiento privado": "Private parking",
    "Recepción 24 horas": "24-hour reception",
    "Lavandería": "Laundry service",

    /* --- Ubicación --- */
    "En una calle tranquila de San Benito, a pasos de los museos y la Zona Rosa. Aquí tienes cómo llegar y cómo contactarnos.":
      "On a quiet street in San Benito, steps from the museums and Zona Rosa. Here's how to get here and how to reach us.",
    "Dirección": "Address",
    "Coordenadas": "Coordinates",
    "Teléfono": "Phone",
    "Correo": "Email",
    "Check-in": "Check-in",
    "Cómo llegar en auto": "Driving directions",
    "Abrir en Waze": "Open in Waze",
    "A pie": "On foot",
    "En auto": "By car",
    "Zona Rosa y sus restaurantes — 5 min": "Zona Rosa and its restaurants — 5 min",
    "Museo de Arte (MARTE) y MUNA — 9 min": "Art Museum (MARTE) and MUNA — 9 min",
    "Parque del Bicentenario — 12 min": "Bicentennial Park — 12 min",
    "Aeropuerto Internacional (SAL) — 45 min": "International Airport (SAL) — 45 min",
    "Volcán de San Salvador (El Boquerón) — 35 min": "San Salvador Volcano (El Boquerón) — 35 min",
    "Playa El Tunco (Surf City) — 45 min": "El Tunco beach (Surf City) — 45 min",
    "Escríbenos": "Write to us",
    "Para grupos, eventos pequeños y prensa. Para reservar, usa el ":
      "For groups, small events and press. To book, use the ",
    "motor en línea": "online booking engine",
    "Nombre": "Name",
    "Mensaje": "Message",
    "Enviar mensaje": "Send message",
    "Traslado privado al aeropuerto disponible bajo reserva (sedán, tarifa por trayecto). Solicítalo al reservar o en recepción.":
      "Private airport transfer available on request (sedan, per-trip rate). Ask when booking or at reception.",

    /* --- Motor de reservas --- */
    "Fechas y huéspedes": "Dates and guests",
    "Elegir habitación": "Choose room",
    "Elige tu habitación": "Choose your room",
    "Personaliza tu estancia": "Customise your stay",
    "Datos del huésped": "Guest details",
    "Revisar y confirmar": "Review and confirm",
    "Continuar": "Continue",
    "Volver": "Back",
    "Fechas": "Dates",
    "Habitación": "Room",
    "Extras": "Extras",
    "Datos": "Details",
    "Confirmación": "Confirmation",
    "Tu estancia": "Your stay",
    "Noches": "Nights",
    "Impuestos (IVA 13 %)": "Taxes (13% VAT)",
    "Total estimado": "Estimated total",
    "Mejor tarifa garantizada al reservar directo. Precios en USD; el IVA se calcula en el paso final.":
      "Best rate guaranteed when booking direct. Prices in USD; VAT is calculated in the final step.",
    "Apellido": "Last name",
    "Correo electrónico": "Email",
    "País de residencia": "Country of residence",
    "Hora estimada de llegada": "Estimated arrival time",
    "Selecciona…": "Select…",
    "Solicitudes especiales": "Special requests",
    "Habitación al jardín, celebración, alergias…": "Garden-facing room, celebration, allergies…",
    "No se requiere pago ahora. La reserva se garantiza con tus datos de contacto y se liquida en el hotel al hacer el check-in. Aplica la política de cancelación de la tarifa elegida.":
      "No payment required now. The booking is guaranteed with your contact details and settled at the hotel at check-in. The cancellation policy of the chosen rate applies.",
    "Reserva confirmada": "Booking confirmed",
    "Código de reserva": "Booking code",
    "Huésped": "Guest",
    "Tarifa": "Rate",
    "Volver al inicio": "Back to home",
    "Nueva reserva": "New booking",
    "Elige fechas, habitación y extras en cuatro pasos. El pago se realiza en el hotel.":
      "Choose dates, room and extras in four steps. Payment is made at the hotel.",
    "Dejamos una opción marcada para agilizar; cámbiala si prefieres otra.":
      "We've pre-selected an option to speed things up; change it if you prefer another.",
    "Todo esto es opcional. Puedes añadirlo ahora o pedirlo al llegar.":
      "All optional. Add it now or ask for it on arrival.",
    "Solo pedimos lo imprescindible para garantizar tu reserva.":
      "We only ask for what's essential to hold your booking.",
    "Confirmar reserva": "Confirm booking",
    "opcional": "optional",
    "Precio indicativo por noche, desde. Toca un día para fijar la entrada.":
      "Indicative price per night, from. Tap a day to set the check-in date.",
    "Mes anterior": "Previous month",
    "Mes siguiente": "Next month",

    /* --- Tarifas y extras visibles en el motor --- */
    "Tarifa Flexible": "Flexible Rate",
    "Reserva Anticipada": "Advance Purchase",
    "Media Pensión Nava": "Nava Half Board",
    "Cancelación gratuita hasta 48 h antes · desayuno en Nava incluido": "Free cancellation up to 48 h before · breakfast at Nava included",
    "No reembolsable · ahorra 15 %": "Non-refundable · save 15%",
    "Desayuno y cena de temporada en Nava": "Seasonal breakfast and dinner at Nava",
    "Traslado aeropuerto (ida)": "Airport transfer (one way)",
    "Sedán privado · SAL": "Private sedan · SAL",
    "Desayuno en la habitación": "Breakfast in your room",
    "Por persona, por día": "Per person, per day",
    "Clase de yoga en la sun terrace": "Yoga class on the sun terrace",
    "Grupo reducido · por persona": "Small group · per person",
    "Almuerzo para llevar": "Packed lunch",
    "De Nava, para excursiones · por persona": "From Nava, for day trips · per person",
    "Salida tardía 16:00": "Late check-out 4:00 p.m.",
    "Sujeta a disponibilidad": "Subject to availability"
  };

  var DICTS = { en: EN };
  var norm = function (s) { return s.replace(/\s+/g, " ").trim(); };

  function collectTextNodes(root) {
    var nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("[data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  var applying = false;

  function translateNode(n, dict) {
    if (n.__i18nBase === undefined) n.__i18nBase = n.nodeValue;
    var base = n.__i18nBase;
    var key = norm(base);
    if (!dict) { if (n.nodeValue !== base) n.nodeValue = base; return; }
    var t = dict[key];
    if (t == null) return;
    var lead = base.match(/^\s*/)[0];
    var trail = base.match(/\s*$/)[0];
    var next = lead + t + trail;
    if (n.nodeValue !== next) n.nodeValue = next;
  }

  function translateAttrs(dict) {
    var sel = "[placeholder], [aria-label], [title]";
    document.querySelectorAll(sel).forEach(function (el) {
      ["placeholder", "aria-label", "title"].forEach(function (attr) {
        if (!el.hasAttribute(attr)) return;
        var store = "__i18n_" + attr;
        if (el[store] === undefined) el[store] = el.getAttribute(attr);
        var base = el[store];
        var t = dict ? dict[norm(base)] : null;
        el.setAttribute(attr, t != null ? t : base);
      });
    });
  }

  function apply(lang) {
    var dict = DICTS[lang] || null;
    applying = true;
    try {
      collectTextNodes(document.body).forEach(function (n) { translateNode(n, dict); });
      translateAttrs(dict);
      if (!document.__i18nTitle) document.__i18nTitle = document.title;
      document.title = document.__i18nTitle.split(" · ").map(function (seg) {
        var k = norm(seg);
        return (dict && dict[k] != null) ? dict[k] : seg;
      }).join(" · ");
      document.documentElement.lang = lang;
    } finally { applying = false; }
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    window.KL_LANG = lang;
  }

  function currentLang() {
    var saved;
    try { saved = localStorage.getItem(STORE); } catch (e) {}
    if (saved && LANGS[saved]) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS[nav] ? nav : "es";
  }

  function buildSwitcher() {
    if (document.querySelector(".lang")) return;
    var nav = document.querySelector(".nav");
    if (!nav) return;
    var wrap = document.createElement("div");
    wrap.className = "lang";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Idioma");
    Object.keys(LANGS).forEach(function (code) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = LANGS[code];
      b.setAttribute("data-lang", code);
      b.setAttribute("lang", code);
      b.addEventListener("click", function () { apply(code); });
      wrap.appendChild(b);
    });
    var cta = nav.querySelector(".nav__cta");
    nav.insertBefore(wrap, cta || null);
  }

  function watchDynamic() {
    if (!("MutationObserver" in window)) return;
    var pending = null;
    var mo = new MutationObserver(function (muts) {
      if (applying) return;
      var relevant = muts.some(function (m) { return m.addedNodes && m.addedNodes.length; });
      if (!relevant) return;
      clearTimeout(pending);
      pending = setTimeout(function () { apply(window.KL_LANG || "es"); }, 40);
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    buildSwitcher();
    apply(currentLang());
    watchDynamic();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
