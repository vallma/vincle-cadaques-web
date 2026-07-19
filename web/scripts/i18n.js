/* ═══════════════════════════════════════════════════════
   VINCLE CADAQUÉS — i18n
   Idiomas: es (por defecto), ca, en, fr
   ═══════════════════════════════════════════════════════ */

const I18N = {

  /* ─── Español ─── */
  es: {
    'meta.title': 'Restaurant Vincle Cadaqués | Restaurante Mediterráneo',
    'nav.rest': 'El Restaurante', 'nav.cocina': 'La Cocina', 'nav.vinos': 'Los Vinos',
    'nav.espacio': 'El Espacio', 'nav.muralla': 'La Muralla', 'nav.eventos': 'Eventos', 'nav.reservar': 'Reservar',
    'hero.sub': 'Entre las piedras de la antigua muralla y la luz del Mediterráneo, Vincle ofrece una experiencia gastronómica donde el producto, la temporada y el respeto por la tradición son los protagonistas.',
    'hero.cta1': 'Reservar mesa', 'hero.cta2': 'Ver la carta',
    'marq.1': 'Cuina mediterrània', 'marq.3': 'Producto de temporada', 'marq.5': 'Arroces &amp; mariscos', 'marq.6': 'Bóvedas del s. XIV',
    'idx.rest': 'El Restaurante', 'idx.cocina': 'La Cocina', 'idx.vinos': 'Los Vinos', 'idx.equipo': 'El Equipo',
    'idx.espacio': 'El Espacio', 'idx.muralla': 'La Muralla', 'idx.hablemos': 'Hablemos', 'idx.reservas': 'Reservas', 'idx.faq': 'Preguntas frecuentes',
    'rest.title': 'Donde la piedra<br>y el mar<br><em>se unen</em>',
    'rest.p1': 'Escondido en un tranquilo callejón del casco antiguo de Cadaqués, Vincle nace entre las paredes de la antigua muralla. Un restaurante donde la piedra centenaria, la luz del Mediterráneo y una cocina de producto conviven en perfecta armonía.',
    'rest.p2': 'Dirigido por el chef <strong>Alexandre Vehí</strong> y la sumiller <strong>Mónica Font</strong>, Vincle ofrece una experiencia gastronómica basada en el respeto al producto, la memoria culinaria y una mirada contemporánea. Un lugar donde comer en Cadaqués significa descubrir el territorio a través de cada plato.',
    'sig.title': '¿Significado de <em>Vincle</em>?',
    'sig.intro': '<em>Vincle</em> es una palabra en catalán, significa <strong>vínculo</strong>.',
    'sig.li1': 'El vínculo con <strong>Cadaqués</strong>, donde nace nuestro proyecto y nuestro chef Alexandre.',
    'sig.li2': 'El vínculo con el <strong>Mediterráneo</strong> y el producto que nos inspira cada día.',
    'sig.li3': 'El vínculo entre la <strong>cocina y el vino</strong>, dos lenguajes que se complementan.',
    'sig.li4': 'El vínculo con los <strong>productores</strong> que hacen posible cada servicio.',
    'sig.li5': 'Y, sobre todo, el vínculo que se crea alrededor de una <strong>mesa</strong>, compartiendo tiempo, conversación y gastronomía.',
    'sig.cierre': 'Ese es el espíritu que da nombre a nuestro restaurante.',
    'coc.title': 'Sabor<br><em>mediterráneo</em>',
    'coc.sub1': 'La cocina de Vincle cambia con el ritmo de las estaciones. Trabajamos con productos seleccionados en su mejor momento para ofrecer una propuesta profundamente mediterránea, ligada al entorno de Cadaqués y al respeto por cada ingrediente.',
    'coc.sub2': 'Entre la memoria de las recetas de siempre y una mirada contemporánea, cada plato nace del equilibrio entre tradición, técnica y sensibilidad. Una cocina honesta, donde el producto marca el camino y cada elaboración tiene un propósito.',
    'dish.1': 'Plato icónico: receta recuperada de la abuela con un toque contemporáneo',
    'dish.2': 'Gamba roja de la Costa Brava, bechamel artesanal',
    'dish.3': 'Arroz de mercado con los mejores productos de temporada',
    'dish.4': 'Atún rojo fresco, vinagreta cítrica y flores del Cap de Creus',
    'vin.title': 'Una bodega<br><em>de autor</em>',
    'vin.sub1': 'El vino forma parte de la experiencia en Vincle. Nuestra selección nace con la misma filosofía que nuestra cocina: respeto por el producto, el territorio y las personas que hay detrás de cada botella.',
    'vin.sub2': 'Ofrecemos una carta para descubrir nuevas referencias, tanto para quien busca un clásico como para quien disfruta dejándose sorprender.',
    'eq.title': 'Dos visiones,<br>una <em>experiencia</em>',
    'eq.rol2': 'Sala &amp; Vinos',
    'eq.bio1': 'Cadaquesenc, formado en la cocina de Paco Pérez. Cocina de raíz con técnica contemporánea, inspirada en los sabores de la infancia y el producto del Mediterráneo.',
    'eq.bio2': 'Sumiller y directora de sala. Formada con los hermanos Roca en El Celler de Can Roca. Su presencia convierte cada cena en una experiencia completa.',
    'esp.title': 'Un interior único,<br>entre la historia<br><em>y la luz</em>',
    'esp.text': 'Nuestro comedor ocupa una casa histórica del siglo XIV. La bóveda de piedra de 400 años, las paredes del antiguo muro de la ciudad, las vigas de madera y la luz cálida crean un ambiente íntimo donde el tiempo parece detenerse.',
    'esp.tag1': 'Bóveda de piedra · s. XIV', 'esp.tag2': 'Cocina a la vista', 'esp.tag3': 'Terraza exterior', 'esp.tag4': 'Privados para eventos →',
    'his.title': 'Tres siglos antes,<br>ya estábamos<br><em>en el mapa</em>',
    'his.p1': 'Este grabado de Sébastien de Beaulieu (1655) muestra la villa amurallada de Cadaqués —"Cap de Quiers"— durante el sitio de las tropas de Luis XIV. Las piedras de aquella muralla son hoy las paredes de nuestro comedor.',
    'his.p2': 'El pin señala dónde está Vincle: dentro del trazado original de la muralla, en el corazón del casco antiguo.',
    'con.title': 'Celebra o<br><em>únete</em> a Vincle',
    'con.tab1': 'Eventos privados', 'con.tab2': 'Trabaja con nosotros',
    'con.intro1': 'Vincle ofrece la posibilidad de celebrar eventos privados, reuniones familiares, comidas de empresa o encuentros gastronómicos en un entorno único del casco antiguo de Cadaqués. Adaptamos cada propuesta según las necesidades de cada grupo para que la experiencia mantenga la misma esencia que vivimos cada día en el restaurante.',
    'con.intro2': 'Buscamos personas con ganas, respeto por el producto y amor por la hostelería. Si te ves en nuestra cocina o en nuestra sala, escríbenos.',
    'f.nombre': 'Nombre *', 'f.telefono': 'Teléfono', 'f.fecha': 'Fecha deseada', 'f.invitados': 'Nº de invitados',
    'f.tipo': 'Tipo de evento', 'f.mas': 'Cuéntanos más', 'f.puesto': 'Puesto *', 'f.disp': 'Disponibilidad',
    'f.cv': 'Enlace a CV / LinkedIn', 'f.presentate': 'Preséntate *',
    'f.send1': 'Enviar solicitud', 'f.send2': 'Enviar candidatura',
    'f.opt.sel': 'Selecciona…', 'f.opt.empresa': 'Comida / cena de empresa', 'f.opt.familiar': 'Celebración familiar',
    'f.opt.boda': 'Boda / pedida', 'f.opt.grupo': 'Grupo grande', 'f.opt.otro': 'Otro',
    'f.opt.cocina': 'Cocina', 'f.opt.sala': 'Sala', 'f.opt.barra': 'Barra', 'f.opt.stage': 'Prácticas / stage',
    'f.opt.inmediata': 'Inmediata', 'f.opt.verano': 'Temporada de verano', 'f.opt.convenir': 'A convenir',
    'ph.invitados': 'p. ej. 25', 'ph.mensaje': 'Horario, menú, alergias, presupuesto orientativo…', 'ph.presentate': 'Experiencia, motivación, lo que te hace especial…',
    'res.title': '¿Nos vemos<br>en <em>Cadaqués</em>?',
    'res.body': 'Reserva tu mesa en Vincle y descubre una cocina mediterránea de temporada en pleno centro histórico de Cadaqués. Si tienes cualquier consulta, estaremos encantados de ayudarte.',
    'res.btn': 'Reservar mesa online',
    'hor.title': 'Horario', 'hor.d1': 'Miércoles', 'hor.d2': 'Jue – Sáb', 'hor.d3': 'Domingo', 'hor.d4': 'Lun – Mar', 'hor.cerrado': 'Cerrado',
    'faq.title': '¿Tienes alguna<br><em>duda</em>?',
    'faq.q1': '¿Dónde comer en Cadaqués?',
    'faq.a1': 'En pleno casco antiguo de Cadaqués, Vincle ofrece una cocina mediterránea de temporada entre las paredes de la antigua muralla. Una experiencia gastronómica donde el producto, la tradición y el territorio son los protagonistas.',
    'faq.q2': '¿Es necesario reservar?',
    'faq.a2': 'Recomendamos reservar con antelación, especialmente en temporada alta. Puedes reservar tu mesa online o llamarnos al <a href="tel:+34623213155">+34 623 21 31 55</a>.',
    'faq.q3': '¿Qué tipo de cocina ofrece Vincle?',
    'faq.a3': 'Cocina mediterránea de producto y de temporada, con raíces en la tradición y una mirada contemporánea. Trabajamos con productos seleccionados en su mejor momento, ligados al entorno de Cadaqués y el Cap de Creus.',
    'faq.q4': '¿Hay opciones vegetarianas?',
    'faq.a4': 'Sí. Nuestra carta de temporada incluye opciones vegetarianas y adaptamos los platos a alergias e intolerancias. Indícanoslo al reservar y lo tendremos todo preparado.',
    'faq.q5': '¿Dónde está situado?',
    'faq.a5': 'En el Carrer Vigilant, 8, un tranquilo callejón del casco antiguo de Cadaqués (Girona), a pocos pasos de la iglesia de Santa Maria y del paseo marítimo.',
    'foot.tag': 'Cuina mediterrània al cor<br>del casc antic de Cadaqués',
    'foot.h1': 'Mié: 13–15:30', 'foot.h2': 'Jue–Sáb: 13–15:30 / 20–22:30', 'foot.h3': 'Dom: 13–15:30',
    'foot.gracias': 'Gracias por formar parte de <em>Vincle</em>.',
    'leg.aviso': 'Aviso legal', 'leg.priv': 'Política de privacidad', 'leg.cook': 'Política de cookies',
    'ck.text': 'Utilizamos cookies de análisis para conocer las visitas y mejorar la web. Solo se activan si las aceptas.',
    'ck.more': 'Más información', 'ck.accept': 'Aceptar', 'ck.reject': 'Rechazar'
  },

  /* ─── Català ─── */
  ca: {
    'meta.title': 'Restaurant Vincle Cadaqués | Restaurant Mediterrani',
    'nav.rest': 'El Restaurant', 'nav.cocina': 'La Cuina', 'nav.vinos': 'Els Vins',
    'nav.espacio': "L'Espai", 'nav.muralla': 'La Muralla', 'nav.eventos': 'Esdeveniments', 'nav.reservar': 'Reservar',
    'hero.sub': "Entre les pedres de l'antiga muralla i la llum del Mediterrani, Vincle ofereix una experiència gastronòmica on el producte, la temporada i el respecte per la tradició són els protagonistes.",
    'hero.cta1': 'Reservar taula', 'hero.cta2': 'Veure la carta',
    'marq.1': 'Cuina mediterrània', 'marq.3': 'Producte de temporada', 'marq.5': 'Arrossos &amp; marisc', 'marq.6': 'Voltes del s. XIV',
    'idx.rest': 'El Restaurant', 'idx.cocina': 'La Cuina', 'idx.vinos': 'Els Vins', 'idx.equipo': "L'Equip",
    'idx.espacio': "L'Espai", 'idx.muralla': 'La Muralla', 'idx.hablemos': 'Parlem', 'idx.reservas': 'Reserves', 'idx.faq': 'Preguntes freqüents',
    'rest.title': 'On la pedra<br>i el mar<br><em>s\'uneixen</em>',
    'rest.p1': "Amagat en un tranquil carreró del nucli antic de Cadaqués, Vincle neix entre les parets de l'antiga muralla. Un restaurant on la pedra centenària, la llum del Mediterrani i una cuina de producte conviuen en perfecta harmonia.",
    'rest.p2': "Dirigit pel xef <strong>Alexandre Vehí</strong> i la sommelier <strong>Mónica Font</strong>, Vincle ofereix una experiència gastronòmica basada en el respecte al producte, la memòria culinària i una mirada contemporània. Un lloc on menjar a Cadaqués significa descobrir el territori a través de cada plat.",
    'sig.title': 'El significat de <em>Vincle</em>',
    'sig.intro': "<em>Vincle</em> vol dir <strong>lligam, unió</strong>. És el fil que ho connecta tot.",
    'sig.li1': 'El vincle amb <strong>Cadaqués</strong>, on neix el nostre projecte i el nostre xef Alexandre.',
    'sig.li2': 'El vincle amb el <strong>Mediterrani</strong> i el producte que ens inspira cada dia.',
    'sig.li3': 'El vincle entre la <strong>cuina i el vi</strong>, dos llenguatges que es complementen.',
    'sig.li4': 'El vincle amb els <strong>productors</strong> que fan possible cada servei.',
    'sig.li5': "I, sobretot, el vincle que es crea al voltant d'una <strong>taula</strong>, compartint temps, conversa i gastronomia.",
    'sig.cierre': "Aquest és l'esperit que dona nom al nostre restaurant.",
    'coc.title': 'Sabor<br><em>mediterrani</em>',
    'coc.sub1': "La cuina de Vincle canvia amb el ritme de les estacions. Treballem amb productes seleccionats en el seu millor moment per oferir una proposta profundament mediterrània, lligada a l'entorn de Cadaqués i al respecte per cada ingredient.",
    'coc.sub2': "Entre la memòria de les receptes de sempre i una mirada contemporània, cada plat neix de l'equilibri entre tradició, tècnica i sensibilitat. Una cuina honesta, on el producte marca el camí i cada elaboració té un propòsit.",
    'dish.1': "Plat icònic: recepta recuperada de l'àvia amb un toc contemporani",
    'dish.2': 'Gamba roja de la Costa Brava, beixamel artesanal',
    'dish.3': 'Arròs de mercat amb els millors productes de temporada',
    'dish.4': 'Tonyina roja fresca, vinagreta cítrica i flors del Cap de Creus',
    'vin.title': 'Un celler<br><em>d\'autor</em>',
    'vin.sub1': "El vi forma part de l'experiència a Vincle. La nostra selecció neix amb la mateixa filosofia que la nostra cuina: respecte pel producte, el territori i les persones que hi ha darrere de cada ampolla.",
    'vin.sub2': 'Oferim una carta per descobrir noves referències, tant per a qui busca un clàssic com per a qui gaudeix deixant-se sorprendre.',
    'eq.title': 'Dues visions,<br>una <em>experiència</em>',
    'eq.rol2': 'Sala &amp; Vins',
    'eq.bio1': 'Cadaquesenc, format a la cuina de Paco Pérez. Cuina d\'arrel amb tècnica contemporània, inspirada en els sabors de la infància i el producte del Mediterrani.',
    'eq.bio2': 'Sommelier i directora de sala. Formada amb els germans Roca a El Celler de Can Roca. La seva presència converteix cada sopar en una experiència completa.',
    'esp.title': 'Un interior únic,<br>entre la història<br><em>i la llum</em>',
    'esp.text': "El nostre menjador ocupa una casa històrica del segle XIV. La volta de pedra de 400 anys, les parets de l'antiga muralla, les bigues de fusta i la llum càlida creen un ambient íntim on el temps sembla aturar-se.",
    'esp.tag1': 'Volta de pedra · s. XIV', 'esp.tag2': 'Cuina a la vista', 'esp.tag3': 'Terrassa exterior', 'esp.tag4': 'Privats per a esdeveniments →',
    'his.title': 'Tres segles abans,<br>ja érem<br><em>al mapa</em>',
    'his.p1': 'Aquest gravat de Sébastien de Beaulieu (1655) mostra la vila emmurallada de Cadaqués —"Cap de Quiers"— durant el setge de les tropes de Lluís XIV. Les pedres d\'aquella muralla són avui les parets del nostre menjador.',
    'his.p2': "El pin assenyala on és Vincle: dins del traçat original de la muralla, al cor del nucli antic.",
    'con.title': 'Celebra o<br><em>uneix-te</em> a Vincle',
    'con.tab1': 'Esdeveniments privats', 'con.tab2': 'Treballa amb nosaltres',
    'con.intro1': "Vincle ofereix la possibilitat de celebrar esdeveniments privats, reunions familiars, dinars d'empresa o trobades gastronòmiques en un entorn únic del nucli antic de Cadaqués. Adaptem cada proposta segons les necessitats de cada grup perquè l'experiència mantingui la mateixa essència que vivim cada dia al restaurant.",
    'con.intro2': "Busquem persones amb ganes, respecte pel producte i amor per l'hostaleria. Si et veus a la nostra cuina o a la nostra sala, escriu-nos.",
    'f.nombre': 'Nom *', 'f.telefono': 'Telèfon', 'f.fecha': 'Data desitjada', 'f.invitados': 'Nre. de convidats',
    'f.tipo': "Tipus d'esdeveniment", 'f.mas': "Explica'ns més", 'f.puesto': 'Lloc de treball *', 'f.disp': 'Disponibilitat',
    'f.cv': 'Enllaç a CV / LinkedIn', 'f.presentate': "Presenta't *",
    'f.send1': 'Enviar sol·licitud', 'f.send2': 'Enviar candidatura',
    'f.opt.sel': 'Selecciona…', 'f.opt.empresa': "Dinar / sopar d'empresa", 'f.opt.familiar': 'Celebració familiar',
    'f.opt.boda': 'Casament / petició', 'f.opt.grupo': 'Grup gran', 'f.opt.otro': 'Altres',
    'f.opt.cocina': 'Cuina', 'f.opt.sala': 'Sala', 'f.opt.barra': 'Barra', 'f.opt.stage': 'Pràctiques / stage',
    'f.opt.inmediata': 'Immediata', 'f.opt.verano': "Temporada d'estiu", 'f.opt.convenir': 'A convenir',
    'ph.invitados': 'p. ex. 25', 'ph.mensaje': 'Horari, menú, al·lèrgies, pressupost orientatiu…', 'ph.presentate': 'Experiència, motivació, allò que et fa especial…',
    'res.title': 'Ens veiem<br>a <em>Cadaqués</em>?',
    'res.body': "Reserva la teva taula a Vincle i descobreix una cuina mediterrània de temporada en ple centre històric de Cadaqués. Si tens qualsevol consulta, estarem encantats d'ajudar-te.",
    'res.btn': 'Reservar taula online',
    'hor.title': 'Horari', 'hor.d1': 'Dimecres', 'hor.d2': 'Dij – Dis', 'hor.d3': 'Diumenge', 'hor.d4': 'Dil – Dim', 'hor.cerrado': 'Tancat',
    'faq.title': 'Tens algun<br><em>dubte</em>?',
    'faq.q1': 'On menjar a Cadaqués?',
    'faq.a1': "En ple nucli antic de Cadaqués, Vincle ofereix una cuina mediterrània de temporada entre les parets de l'antiga muralla. Una experiència gastronòmica on el producte, la tradició i el territori són els protagonistes.",
    'faq.q2': 'Cal reservar?',
    'faq.a2': 'Recomanem reservar amb antelació, especialment en temporada alta. Pots reservar la teva taula online o trucar-nos al <a href="tel:+34623213155">+34 623 21 31 55</a>.',
    'faq.q3': 'Quin tipus de cuina ofereix Vincle?',
    'faq.a3': "Cuina mediterrània de producte i de temporada, amb arrels en la tradició i una mirada contemporània. Treballem amb productes seleccionats en el seu millor moment, lligats a l'entorn de Cadaqués i el Cap de Creus.",
    'faq.q4': 'Hi ha opcions vegetarianes?',
    'faq.a4': "Sí. La nostra carta de temporada inclou opcions vegetarianes i adaptem els plats a al·lèrgies i intoleràncies. Indica'ns-ho en reservar i ho tindrem tot preparat.",
    'faq.q5': 'On està situat?',
    'faq.a5': "Al Carrer Vigilant, 8, un tranquil carreró del nucli antic de Cadaqués (Girona), a pocs passos de l'església de Santa Maria i del passeig marítim.",
    'foot.tag': 'Cuina mediterrània al cor<br>del casc antic de Cadaqués',
    'foot.h1': 'Dc: 13–15:30', 'foot.h2': 'Dj–Ds: 13–15:30 / 20–22:30', 'foot.h3': 'Dg: 13–15:30',
    'foot.gracias': 'Gràcies per formar part de <em>Vincle</em>.',
    'leg.aviso': 'Avís legal', 'leg.priv': 'Política de privacitat', 'leg.cook': 'Política de galetes',
    'ck.text': "Fem servir galetes d'anàlisi per conèixer les visites i millorar la web. Només s'activen si les acceptes.",
    'ck.more': 'Més informació', 'ck.accept': 'Acceptar', 'ck.reject': 'Rebutjar'
  },

  /* ─── English ─── */
  en: {
    'meta.title': 'Restaurant Vincle Cadaqués | Mediterranean Restaurant',
    'nav.rest': 'The Restaurant', 'nav.cocina': 'The Cuisine', 'nav.vinos': 'The Wines',
    'nav.espacio': 'The Space', 'nav.muralla': 'The Wall', 'nav.eventos': 'Events', 'nav.reservar': 'Book',
    'hero.sub': 'Between the stones of the old city wall and the Mediterranean light, Vincle offers a dining experience where produce, seasonality and respect for tradition take centre stage.',
    'hero.cta1': 'Book a table', 'hero.cta2': 'View the menu',
    'marq.1': 'Mediterranean cuisine', 'marq.3': 'Seasonal produce', 'marq.5': 'Rice dishes &amp; seafood', 'marq.6': '14th-century vaults',
    'idx.rest': 'The Restaurant', 'idx.cocina': 'The Cuisine', 'idx.vinos': 'The Wines', 'idx.equipo': 'The Team',
    'idx.espacio': 'The Space', 'idx.muralla': 'The Wall', 'idx.hablemos': "Let's talk", 'idx.reservas': 'Bookings', 'idx.faq': 'Frequently asked questions',
    'rest.title': 'Where stone<br>and sea<br><em>meet</em>',
    'rest.p1': 'Hidden in a quiet alley of the old town of Cadaqués, Vincle was born between the walls of the ancient rampart. A restaurant where centuries-old stone, Mediterranean light and produce-driven cooking live in perfect harmony.',
    'rest.p2': 'Led by chef <strong>Alexandre Vehí</strong> and sommelier <strong>Mónica Font</strong>, Vincle offers a dining experience built on respect for produce, culinary memory and a contemporary outlook. A place where eating in Cadaqués means discovering the land through every dish.',
    'sig.title': 'The meaning of <em>Vincle</em>',
    'sig.intro': '<em>Vincle</em> is a Catalan word meaning <strong>bond</strong>.',
    'sig.li1': 'The bond with <strong>Cadaqués</strong>, where our project and our chef Alexandre were born.',
    'sig.li2': 'The bond with the <strong>Mediterranean</strong> and the produce that inspires us every day.',
    'sig.li3': 'The bond between <strong>food and wine</strong>, two languages that complement each other.',
    'sig.li4': 'The bond with the <strong>producers</strong> who make every service possible.',
    'sig.li5': 'And, above all, the bond created around a <strong>table</strong>, sharing time, conversation and gastronomy.',
    'sig.cierre': 'That is the spirit that gives our restaurant its name.',
    'coc.title': 'Mediterranean<br><em>flavour</em>',
    'coc.sub1': "Vincle's cuisine changes with the rhythm of the seasons. We work with produce selected at its peak to offer a deeply Mediterranean proposal, tied to the surroundings of Cadaqués and to respect for every ingredient.",
    'coc.sub2': 'Between the memory of time-honoured recipes and a contemporary outlook, every dish is born from the balance of tradition, technique and sensitivity. Honest cooking, where produce leads the way and every preparation has a purpose.',
    'dish.1': "Signature dish: grandmother's recipe revived with a contemporary touch",
    'dish.2': 'Costa Brava red prawn, artisan béchamel',
    'dish.3': "Market rice with the season's finest produce",
    'dish.4': 'Fresh bluefin tuna, citrus vinaigrette and Cap de Creus flowers',
    'vin.title': 'A curated<br><em>cellar</em>',
    'vin.sub1': 'Wine is part of the Vincle experience. Our selection is born from the same philosophy as our cuisine: respect for the produce, the land and the people behind every bottle.',
    'vin.sub2': 'Our list invites you to discover new references — whether you seek a classic or enjoy being surprised.',
    'eq.title': 'Two visions,<br>one <em>experience</em>',
    'eq.rol2': 'Front of house &amp; Wines',
    'eq.bio1': 'Born in Cadaqués, trained in the kitchen of Paco Pérez. Rooted cooking with contemporary technique, inspired by childhood flavours and Mediterranean produce.',
    'eq.bio2': 'Sommelier and front-of-house director. Trained with the Roca brothers at El Celler de Can Roca. Her presence turns every dinner into a complete experience.',
    'esp.title': 'A unique interior,<br>between history<br><em>and light</em>',
    'esp.text': 'Our dining room occupies a historic 14th-century house. The 400-year-old stone vault, the walls of the old city rampart, the wooden beams and the warm light create an intimate atmosphere where time seems to stand still.',
    'esp.tag1': 'Stone vault · 14th c.', 'esp.tag2': 'Open kitchen', 'esp.tag3': 'Outdoor terrace', 'esp.tag4': 'Private events →',
    'his.title': 'Three centuries ago,<br>we were already<br><em>on the map</em>',
    'his.p1': 'This engraving by Sébastien de Beaulieu (1655) shows the walled town of Cadaqués —"Cap de Quiers"— during the siege by the troops of Louis XIV. The stones of that rampart are today the walls of our dining room.',
    'his.p2': 'The pin marks where Vincle stands: within the original line of the wall, in the heart of the old town.',
    'con.title': 'Celebrate or<br><em>join</em> Vincle',
    'con.tab1': 'Private events', 'con.tab2': 'Work with us',
    'con.intro1': 'Vincle offers the possibility of hosting private events, family gatherings, business lunches or gastronomic get-togethers in a unique setting in the old town of Cadaqués. We tailor each proposal to the needs of every group, so the experience keeps the same essence we live every day at the restaurant.',
    'con.intro2': 'We look for people with drive, respect for produce and a love of hospitality. If you can see yourself in our kitchen or our dining room, write to us.',
    'f.nombre': 'Name *', 'f.telefono': 'Phone', 'f.fecha': 'Preferred date', 'f.invitados': 'Number of guests',
    'f.tipo': 'Type of event', 'f.mas': 'Tell us more', 'f.puesto': 'Position *', 'f.disp': 'Availability',
    'f.cv': 'CV / LinkedIn link', 'f.presentate': 'Introduce yourself *',
    'f.send1': 'Send request', 'f.send2': 'Send application',
    'f.opt.sel': 'Select…', 'f.opt.empresa': 'Business lunch / dinner', 'f.opt.familiar': 'Family celebration',
    'f.opt.boda': 'Wedding / proposal', 'f.opt.grupo': 'Large group', 'f.opt.otro': 'Other',
    'f.opt.cocina': 'Kitchen', 'f.opt.sala': 'Front of house', 'f.opt.barra': 'Bar', 'f.opt.stage': 'Internship / stage',
    'f.opt.inmediata': 'Immediate', 'f.opt.verano': 'Summer season', 'f.opt.convenir': 'To be agreed',
    'ph.invitados': 'e.g. 25', 'ph.mensaje': 'Time, menu, allergies, approximate budget…', 'ph.presentate': 'Experience, motivation, what makes you special…',
    'res.title': 'See you<br>in <em>Cadaqués</em>?',
    'res.body': 'Book your table at Vincle and discover seasonal Mediterranean cuisine in the very heart of the historic centre of Cadaqués. If you have any questions, we will be delighted to help.',
    'res.btn': 'Book a table online',
    'hor.title': 'Opening hours', 'hor.d1': 'Wednesday', 'hor.d2': 'Thu – Sat', 'hor.d3': 'Sunday', 'hor.d4': 'Mon – Tue', 'hor.cerrado': 'Closed',
    'faq.title': 'Any<br><em>questions</em>?',
    'faq.q1': 'Where to eat in Cadaqués?',
    'faq.a1': 'In the very heart of the old town of Cadaqués, Vincle offers seasonal Mediterranean cuisine between the walls of the ancient rampart. A dining experience where produce, tradition and the land take centre stage.',
    'faq.q2': 'Do I need to book?',
    'faq.a2': 'We recommend booking in advance, especially in high season. You can book your table online or call us on <a href="tel:+34623213155">+34 623 21 31 55</a>.',
    'faq.q3': 'What kind of cuisine does Vincle offer?',
    'faq.a3': 'Produce-driven, seasonal Mediterranean cuisine, rooted in tradition with a contemporary outlook. We work with produce selected at its peak, tied to the surroundings of Cadaqués and Cap de Creus.',
    'faq.q4': 'Are there vegetarian options?',
    'faq.a4': 'Yes. Our seasonal menu includes vegetarian options and we adapt dishes to allergies and intolerances. Let us know when booking and everything will be ready.',
    'faq.q5': 'Where is it located?',
    'faq.a5': 'At Carrer Vigilant, 8, a quiet alley in the old town of Cadaqués (Girona), a few steps from the church of Santa Maria and the seafront promenade.',
    'foot.tag': 'Mediterranean cuisine in the heart<br>of the old town of Cadaqués',
    'foot.h1': 'Wed: 13–15:30', 'foot.h2': 'Thu–Sat: 13–15:30 / 20–22:30', 'foot.h3': 'Sun: 13–15:30',
    'foot.gracias': 'Thank you for being part of <em>Vincle</em>.',
    'leg.aviso': 'Legal notice', 'leg.priv': 'Privacy policy', 'leg.cook': 'Cookie policy',
    'ck.text': 'We use analytics cookies to understand our visits and improve the site. They are only activated if you accept them.',
    'ck.more': 'More information', 'ck.accept': 'Accept', 'ck.reject': 'Reject'
  },

  /* ─── Français ─── */
  fr: {
    'meta.title': 'Restaurant Vincle Cadaqués | Restaurant Méditerranéen',
    'nav.rest': 'Le Restaurant', 'nav.cocina': 'La Cuisine', 'nav.vinos': 'Les Vins',
    'nav.espacio': "L'Espace", 'nav.muralla': 'La Muraille', 'nav.eventos': 'Événements', 'nav.reservar': 'Réserver',
    'hero.sub': "Entre les pierres de l'ancienne muraille et la lumière de la Méditerranée, Vincle propose une expérience gastronomique où le produit, la saison et le respect de la tradition sont les protagonistes.",
    'hero.cta1': 'Réserver une table', 'hero.cta2': 'Voir la carte',
    'marq.1': 'Cuisine méditerranéenne', 'marq.3': 'Produits de saison', 'marq.5': 'Riz &amp; fruits de mer', 'marq.6': 'Voûtes du XIVe siècle',
    'idx.rest': 'Le Restaurant', 'idx.cocina': 'La Cuisine', 'idx.vinos': 'Les Vins', 'idx.equipo': "L'Équipe",
    'idx.espacio': "L'Espace", 'idx.muralla': 'La Muraille', 'idx.hablemos': 'Parlons-en', 'idx.reservas': 'Réservations', 'idx.faq': 'Questions fréquentes',
    'rest.title': 'Où la pierre<br>et la mer<br><em>se rejoignent</em>',
    'rest.p1': "Caché dans une ruelle tranquille de la vieille ville de Cadaqués, Vincle naît entre les murs de l'ancienne muraille. Un restaurant où la pierre centenaire, la lumière de la Méditerranée et une cuisine de produit vivent en parfaite harmonie.",
    'rest.p2': "Dirigé par le chef <strong>Alexandre Vehí</strong> et la sommelière <strong>Mónica Font</strong>, Vincle propose une expérience gastronomique fondée sur le respect du produit, la mémoire culinaire et un regard contemporain. Un lieu où manger à Cadaqués signifie découvrir le territoire à travers chaque plat.",
    'sig.title': 'La signification de <em>Vincle</em>',
    'sig.intro': "<em>Vincle</em> est un mot catalan qui signifie <strong>lien</strong>.",
    'sig.li1': 'Le lien avec <strong>Cadaqués</strong>, où sont nés notre projet et notre chef Alexandre.',
    'sig.li2': 'Le lien avec la <strong>Méditerranée</strong> et le produit qui nous inspire chaque jour.',
    'sig.li3': 'Le lien entre la <strong>cuisine et le vin</strong>, deux langages qui se complètent.',
    'sig.li4': 'Le lien avec les <strong>producteurs</strong> qui rendent chaque service possible.',
    'sig.li5': "Et, surtout, le lien qui se crée autour d'une <strong>table</strong>, en partageant temps, conversation et gastronomie.",
    'sig.cierre': "C'est cet esprit qui donne son nom à notre restaurant.",
    'coc.title': 'Saveur<br><em>méditerranéenne</em>',
    'coc.sub1': "La cuisine de Vincle change au rythme des saisons. Nous travaillons avec des produits sélectionnés à leur meilleur moment pour offrir une proposition profondément méditerranéenne, liée à l'environnement de Cadaqués et au respect de chaque ingrédient.",
    'coc.sub2': "Entre la mémoire des recettes de toujours et un regard contemporain, chaque plat naît de l'équilibre entre tradition, technique et sensibilité. Une cuisine honnête, où le produit trace le chemin et chaque préparation a un but.",
    'dish.1': 'Plat emblématique : recette de grand-mère retrouvée, avec une touche contemporaine',
    'dish.2': 'Crevette rouge de la Costa Brava, béchamel artisanale',
    'dish.3': 'Riz du marché avec les meilleurs produits de saison',
    'dish.4': 'Thon rouge frais, vinaigrette aux agrumes et fleurs du Cap de Creus',
    'vin.title': 'Une cave<br><em>d\'auteur</em>',
    'vin.sub1': "Le vin fait partie de l'expérience Vincle. Notre sélection naît de la même philosophie que notre cuisine : le respect du produit, du territoire et des personnes derrière chaque bouteille.",
    'vin.sub2': 'Nous proposons une carte pour découvrir de nouvelles références, autant pour qui cherche un classique que pour qui aime se laisser surprendre.',
    'eq.title': 'Deux visions,<br>une <em>expérience</em>',
    'eq.rol2': 'Salle &amp; Vins',
    'eq.bio1': "Né à Cadaqués, formé dans la cuisine de Paco Pérez. Une cuisine de racines à la technique contemporaine, inspirée des saveurs de l'enfance et du produit de la Méditerranée.",
    'eq.bio2': 'Sommelière et directrice de salle. Formée avec les frères Roca à El Celler de Can Roca. Sa présence transforme chaque dîner en une expérience complète.',
    'esp.title': "Un intérieur unique,<br>entre l'histoire<br><em>et la lumière</em>",
    'esp.text': "Notre salle occupe une maison historique du XIVe siècle. La voûte en pierre de 400 ans, les murs de l'ancienne muraille, les poutres en bois et la lumière chaleureuse créent une atmosphère intime où le temps semble s'arrêter.",
    'esp.tag1': 'Voûte en pierre · XIVe s.', 'esp.tag2': 'Cuisine ouverte', 'esp.tag3': 'Terrasse extérieure', 'esp.tag4': 'Salons privés pour événements →',
    'his.title': 'Trois siècles plus tôt,<br>nous étions déjà<br><em>sur la carte</em>',
    'his.p1': 'Cette gravure de Sébastien de Beaulieu (1655) montre la ville fortifiée de Cadaqués —« Cap de Quiers »— pendant le siège des troupes de Louis XIV. Les pierres de cette muraille sont aujourd\'hui les murs de notre salle.',
    'his.p2': "L'épingle indique où se trouve Vincle : dans le tracé original de la muraille, au cœur de la vieille ville.",
    'con.title': 'Célébrez ou<br><em>rejoignez</em> Vincle',
    'con.tab1': 'Événements privés', 'con.tab2': 'Travaillez avec nous',
    'con.intro1': "Vincle offre la possibilité de célébrer des événements privés, des réunions de famille, des repas d'entreprise ou des rencontres gastronomiques dans un cadre unique de la vieille ville de Cadaqués. Nous adaptons chaque proposition aux besoins de chaque groupe pour que l'expérience garde la même essence que nous vivons chaque jour au restaurant.",
    'con.intro2': "Nous recherchons des personnes motivées, respectueuses du produit et passionnées par l'hôtellerie. Si vous vous voyez dans notre cuisine ou dans notre salle, écrivez-nous.",
    'f.nombre': 'Nom *', 'f.telefono': 'Téléphone', 'f.fecha': 'Date souhaitée', 'f.invitados': "Nombre d'invités",
    'f.tipo': "Type d'événement", 'f.mas': 'Dites-nous en plus', 'f.puesto': 'Poste *', 'f.disp': 'Disponibilité',
    'f.cv': 'Lien CV / LinkedIn', 'f.presentate': 'Présentez-vous *',
    'f.send1': 'Envoyer la demande', 'f.send2': 'Envoyer la candidature',
    'f.opt.sel': 'Sélectionnez…', 'f.opt.empresa': "Déjeuner / dîner d'entreprise", 'f.opt.familiar': 'Fête de famille',
    'f.opt.boda': 'Mariage / demande', 'f.opt.grupo': 'Grand groupe', 'f.opt.otro': 'Autre',
    'f.opt.cocina': 'Cuisine', 'f.opt.sala': 'Salle', 'f.opt.barra': 'Bar', 'f.opt.stage': 'Stage',
    'f.opt.inmediata': 'Immédiate', 'f.opt.verano': "Saison d'été", 'f.opt.convenir': 'À convenir',
    'ph.invitados': 'p. ex. 25', 'ph.mensaje': 'Horaire, menu, allergies, budget approximatif…', 'ph.presentate': 'Expérience, motivation, ce qui vous rend spécial…',
    'res.title': 'On se voit<br>à <em>Cadaqués</em> ?',
    'res.body': 'Réservez votre table chez Vincle et découvrez une cuisine méditerranéenne de saison en plein centre historique de Cadaqués. Pour toute question, nous serons ravis de vous aider.',
    'res.btn': 'Réserver une table en ligne',
    'hor.title': 'Horaires', 'hor.d1': 'Mercredi', 'hor.d2': 'Jeu – Sam', 'hor.d3': 'Dimanche', 'hor.d4': 'Lun – Mar', 'hor.cerrado': 'Fermé',
    'faq.title': 'Des<br><em>questions</em> ?',
    'faq.q1': 'Où manger à Cadaqués ?',
    'faq.a1': "En plein cœur de la vieille ville de Cadaqués, Vincle propose une cuisine méditerranéenne de saison entre les murs de l'ancienne muraille. Une expérience gastronomique où le produit, la tradition et le territoire sont les protagonistes.",
    'faq.q2': 'Faut-il réserver ?',
    'faq.a2': 'Nous recommandons de réserver à l\'avance, surtout en haute saison. Vous pouvez réserver votre table en ligne ou nous appeler au <a href="tel:+34623213155">+34 623 21 31 55</a>.',
    'faq.q3': 'Quel type de cuisine propose Vincle ?',
    'faq.a3': "Une cuisine méditerranéenne de produit et de saison, enracinée dans la tradition avec un regard contemporain. Nous travaillons avec des produits sélectionnés à leur meilleur moment, liés à l'environnement de Cadaqués et du Cap de Creus.",
    'faq.q4': 'Y a-t-il des options végétariennes ?',
    'faq.a4': 'Oui. Notre carte de saison comprend des options végétariennes et nous adaptons les plats aux allergies et intolérances. Signalez-le lors de la réservation et tout sera prêt.',
    'faq.q5': 'Où se trouve le restaurant ?',
    'faq.a5': "Au Carrer Vigilant, 8, une ruelle tranquille de la vieille ville de Cadaqués (Gérone), à quelques pas de l'église de Santa Maria et de la promenade du bord de mer.",
    'foot.tag': 'Cuisine méditerranéenne au cœur<br>de la vieille ville de Cadaqués',
    'foot.h1': 'Mer : 13–15:30', 'foot.h2': 'Jeu–Sam : 13–15:30 / 20–22:30', 'foot.h3': 'Dim : 13–15:30',
    'foot.gracias': 'Merci de faire partie de <em>Vincle</em>.',
    'leg.aviso': 'Mentions légales', 'leg.priv': 'Politique de confidentialité', 'leg.cook': 'Politique de cookies',
    'ck.text': "Nous utilisons des cookies d'analyse pour connaître les visites et améliorer le site. Ils ne sont activés que si vous les acceptez.",
    'ck.more': "Plus d'informations", 'ck.accept': 'Accepter', 'ck.reject': 'Refuser'
  }
};

/* ─── Lógica de cambio de idioma ─── */
(function () {
  const STORAGE_KEY = 'vincle-lang';
  const LANGS = ['es', 'ca', 'en', 'fr'];

  function applyLang(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.documentElement.lang = lang;
    if (dict['meta.title']) document.title = dict['meta.title'];

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* modo privado */ }
    const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : 'es';
  }

  function init() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
    const lang = detectLang();
    if (lang !== 'es') applyLang(lang);
    else applyLang('es'); // marca la bandera activa
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
