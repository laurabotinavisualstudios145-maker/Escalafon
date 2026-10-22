import React, { useState } from 'react';
import './Productos.css';

const grupos = [
  {
    id: 'gnc',
    codigo: 'GNC',
    titulo: '1. Generación de Nuevo Conocimiento',
    color: '#0057B8',
    icon: '🔬',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Artículos de Investigación (Impresos o Electrónicos)',
        productos: [
          { codigo: 'ART_A1', pts: '10', desc: 'Cuartil 1 (Q1) / Publindex A1' },
          { codigo: 'ART_OPEN_A1', pts: '10', desc: 'Open Access Q1 / Publindex A1' },
          { codigo: 'ART_A2', pts: '6,65', desc: 'Cuartil 1 (Q1) / Publindex A2' },
          { codigo: 'ART_OPEN_A2', pts: '6,65', desc: 'Open Access Q1 / Publindex A2' },
          { codigo: 'ART_B', pts: '3,29', desc: 'Cuartil 2 (Q2) / Publindex B' },
          { codigo: 'ART_OPEN_B', pts: '3,29', desc: 'Open Access Q2 / Publindex B' },
          { codigo: 'ART_C', pts: '1,89', desc: 'Cuartil 3 (Q3) / Publindex C' },
          { codigo: 'ART_OPEN_C', pts: '1,89', desc: 'Open Access Q3 / Publindex C' },
          { codigo: 'ART_D', pts: '0,97', desc: 'Cuartil 4 (Q4) / Publindex D' },
          { codigo: 'ART_OPEN_D', pts: '0,97', desc: 'Open Access Q4 / Publindex D' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Artículo en extenso (en PDF) con número de páginas donde está publicado.',
          'Revista en la cual se publicó el artículo: PDF con portada e índice evidenciando nombre completo, ISSN, año, mes, volumen y número (en PDF o enlace).',
          'Si el artículo es electrónico o digital: incluir además en un PDF el enlace web (URL) y el código DOI.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Documento PDF con el enlace URL y la imagen donde se evidencie la categoría de indexación vigente de la revista (la fecha del soporte debe coincidir con la fecha de publicación del artículo).',
          'Para artículos categoría D: PDF con enlace URL, fecha de publicación de la revista e imagen para mínimo dos bases de datos bibliográficas de la Tabla 4 (SIRes, pág. 60 Anexo 1 MinCiencias 2024).',
          'Nota de cuartiles: Q1 (A1/A2): 25% superior de JCR o SJR · Q2 (B): entre 50% y 74.9% de JCR o SJR · Q3 (C): entre 25% y 49.9% de JCR o SJR, o Publindex B · Q4 (D): 24.9% inferior de JCR/SJR, bases específicas (Index Medicus, PsycINFO, A&HCI) o Publindex C.',
        ],
      },
      {
        letra: 'B',
        titulo: 'Libros de Investigación y Formación',
        productos: [
          { codigo: 'LIB_A1', pts: '10', desc: 'Primer cuartil superior o premios/menciones' },
          { codigo: 'LIB_B', pts: '5,72', desc: 'Tercer cuartil superior de su área' },
          { codigo: 'LIB_FOR1', pts: '1,12', desc: 'Libro de Formación (primer cuartil superior)' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Libro en extenso (con portadas, índice, título, ISBN, fecha, autores, editorial y lugar de publicación) en PDF.',
          'Exclusivo Libros de Formación (LIB_FOR1): Certificación del representante legal que valide el documento como "Libro de Formación" tras revisar sus soportes.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Documento PDF con el enlace URL y la imagen donde se evidencie la categoría de indexación vigente del libro (citas calculadas desde Google Scholar, Scopus y Web of Science según Anexo 1 MinCiencias 2024).',
          'Nota aclaratoria: Si un libro producto de un proyecto de investigación no cumple los requisitos de calidad para ser ubicado en algún cuartil del Anexo 1 de MinCiencias 2024, se le dará el tratamiento como Libro de Divulgación (LIB_DIV).',
        ],
      },
      {
        letra: 'C',
        titulo: 'Creación Artística, Arquitectura e Investigación-Creación',
        productos: [
          { codigo: 'AAD_A1', pts: '10', desc: 'Premio/distinción internacional (curaduría y trayectoria > 10 años)' },
          { codigo: 'AAD_A', pts: '8,37', desc: 'Premio/distinción nacional (curaduría y trayectoria > 8 años)' },
          { codigo: 'AAD_B', pts: '4,55', desc: 'Premio/distinción local (curaduría y trayectoria > 6 años)' },
          { codigo: 'AAD_C', pts: '0,81', desc: 'Selección para presentación pública con curaduría e impacto local' },
          { codigo: 'VV_A1', pts: '10', desc: 'Variedades Vegetales' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Título, fechas de creación/selección, naturaleza de la obra, área de conocimiento y especialización.',
          'Documento en PDF que acredite el título del proyecto registrado del cual se deriva la creación.',
          'Constancia de soportes alojados en el repositorio de la institución que avala el producto.',
          'Exclusivo Variedades Vegetales (VV_A1): Nombre, autores, fecha, tipo de ciclo y estado de la solicitud.',
          'El producto debe ser resultado de un proyecto de investigación y entregar la Constancia del Decanato de Investigaciones de UNIAJC.',
        ],
        calidad: [
          'Certificación de exposición de la obra indicando curador, financiador, selección con curaduría y sala de exposición, junto con soporte de ámbito y trayectoria del evento.',
          'Variedades Vegetales: Certificado de obtentor, acto administrativo, diploma, inscripción en el registro nacional de cultivadores e informe de ventas expedido por el ICA.',
        ],
      },
    ]
  },
  {
    id: 'dti',
    codigo: 'DTI',
    titulo: '2. Desarrollo Tecnológico e Innovación',
    color: '#7B61FF',
    icon: '⚙️',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Empresas de Base Tecnológica (Spin-off y Start-up)',
        productos: [
          { codigo: 'EBT_A', pts: '6,17', desc: 'Spin-off' },
          { codigo: 'EBT_B', pts: '1,41', desc: 'Start-up' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Nombre de la empresa creada, Certificado de Existencia y Representación Legal de la Cámara de Comercio (no mayor a un año) y NIT (o código tributario equivalente si radica fuera de Colombia).',
          'Certificación institucional describiendo el campo tecnológico de la empresa creada.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Para EBT_A: Validación técnica de la empresa como Spin-off.',
          'Para EBT_B: Validación técnica de la empresa como Start-up.',
        ],
      },
      {
        letra: 'B',
        titulo: 'Innovaciones en Gestión Empresarial, Procesos y Servicios',
        productos: [
          { codigo: 'IG_A1', pts: '6,17', desc: 'Implementada en Grandes Empresas' },
          { codigo: 'IG_A2', pts: '4,55', desc: 'Implementada en Medianas y Pequeñas Empresas' },
          { codigo: 'IPP', pts: '0,97', desc: 'Innovación en Procedimientos/Procesos/Servicios' },
          { codigo: 'IG_B1', pts: '0,97', desc: 'Innovación en Gestión B1' },
          { codigo: 'IG_B2', pts: '0,64', desc: 'Innovación en Gestión B2' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Nombre de la innovación, fecha de desarrollo y autores.',
          'Certificado de Existencia y Representación Legal de la Cámara de Comercio y NIT de la empresa beneficiaria, RUT y documento legal que especifique el tamaño de la empresa según la ley.',
          'Certificado de implementación con el impacto generado, ventajas y producto de investigación resultado de la implementación, expedido por el Representante Legal.',
          'Para Innovaciones en Gestión (IG): Título del proyecto aprobado en convocatorias del SNCTI y certificación del producto por parte de la entidad.',
          'Constancia del Decanato de Investigaciones de UNIAJC.',
        ],
        calidad: [
          'Categorías A1 y A2: Implementadas en el ámbito organizacional o de comercialización en Grandes Empresas (A1) o en Medianas y Pequeñas Empresas (A2).',
          'Categorías B1, B2 e IPP: Certificados de implementación en pequeñas, medianas o grandes empresas, expedidos directamente por el representante legal de la compañía beneficiaria.',
        ],
      },
      {
        letra: 'C',
        titulo: 'Diseños Industriales',
        productos: [
          { codigo: 'DI_A', pts: '2,95', desc: 'Con contrato vigente de fabricación, explotación o comercialización' },
          { codigo: 'DI_B', pts: '0,42', desc: 'Registro sin contrato de fabricación, explotación o comercialización' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF del registro oficial de diseño industrial: Número y título de registro, nombre del titular y año de obtención.',
          'Documento en PDF con el país de obtención y copia de la Gaceta Industrial donde se realizó la publicación.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Para DI_A: Cuenta con un contrato vigente de fabricación, explotación o de comercialización.',
          'Para DI_B: Registro sin contrato de fabricación, explotación o comercialización.',
        ],
      },
      {
        letra: 'D',
        titulo: 'Productos de Software',
        productos: [
          { codigo: 'SF', pts: '1,41', desc: 'Producto de Software registrado en DNDA' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con título del producto o proceso, año de obtención y número de registro aprobado por la Dirección Nacional de Derechos de Autor (DNDA).',
          'Documento en PDF con la descripción del análisis, diseño, implementación y validación del sistema, soporte de diseño del software e informe detallado de los aportes al conocimiento o a la innovación.',
          'Documento en PDF con el manual de usuario.',
          'Carpeta digital que contenga el código fuente (archivos con la extensión del lenguaje utilizado evidenciando los algoritmos) y PDF con instrucciones para instalar y ejecutar el código.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Certificación oficial emitida por la entidad productora del software, donde se declare explícitamente el nivel de innovación del producto.',
        ],
      },
    ]
  },
  {
    id: 'asc',
    codigo: 'ASC',
    titulo: '3. Apropiación Social del Conocimiento',
    color: '#1A7A4A',
    icon: '🤝',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Fortalecimiento Social y Políticas Públicas',
        productos: [
          { codigo: 'FIS', pts: '4,85', desc: 'Fortalecimiento o solución de asuntos de interés social' },
          { codigo: 'GPP_A', pts: '4,85', desc: 'Política pública nivel Nacional' },
          { codigo: 'GPP_B', pts: '3,64', desc: 'Política pública nivel Regional/Sectorial' },
          { codigo: 'GPP_C', pts: '2,78', desc: 'Política pública nivel Local' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con nombre del proceso de apropiación social, fechas (inicio y final), título del proyecto de investigación registrado de origen, institución financiadora/gestora e identificación de investigadores (Principal / Coinvestigador).',
          'Para Códigos GPP: Incluir insumo para el diseño, justificación o modificación del instrumento de política pública o normatividad y descripción de objetivos, metodología y resultados de mejoramiento social.',
          'Medio de verificación en repositorio institucional bajo formatos estándar (.xml, .rtf, .csv, .mp4, etc.).',
          'Certificación del Decanato de Investigaciones de UNIAJC.',
        ],
        calidad: [
          'Para FIS: Certificación de la comunidad u organización pública/privada que avale el proyecto (detallando impacto y beneficios con firma de su líder o representante).',
          'Para GPP: Certificación de la entidad que adopta o usa el documento normativo, especificando nivel Nacional (GPP_A), Regional/Sectorial (GPP_B) o Local (GPP_C).',
        ],
      },
      {
        letra: 'B',
        titulo: 'Fortalecimiento de Cadenas Productivas',
        productos: [
          { codigo: 'FCP_A', pts: '4,85', desc: 'Pequeños productores, cooperativas y asociaciones campesinas' },
          { codigo: 'FCP_B', pts: '2,78', desc: 'Pymes y pequeñas empresas' },
          { codigo: 'FCP_C', pts: '1,85', desc: 'Empresas del sector productivo en general' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con nombre del proceso, autores/coautores, fechas del proyecto, título del proyecto registrado de origen, institución financiadora e identificación de investigadores.',
          'Apartado técnico del proyecto que describa objetivos, metodologías y la variable de productividad afectada positivamente.',
          'Documento en PDF indicando el medio de verificación digital cargado en el repositorio institucional o en otro (ruta, URL).',
          'Constancia del Decanato de Investigaciones de UNIAJC.',
        ],
        calidad: [
          'Certificación oficial emitida por la agremiación sobre su vinculación al proyecto, describiendo el cambio e impacto generado según el tipo de población (FCP_A, FCP_B o FCP_C).',
        ],
      },
      {
        letra: 'C',
        titulo: 'Trabajo Conjunto con Centros de Ciencia',
        productos: [
          { codigo: 'TCCG_A', pts: '4,85', desc: 'Centro de Ciencia reconocido por 5 años' },
          { codigo: 'TCCG_B', pts: '3,64', desc: 'Centro de Ciencia reconocido por 3 años' },
          { codigo: 'TCCG_C', pts: '2,33', desc: 'Centro de Ciencia reconocido por 1 año' },
          { codigo: 'TCCG_D', pts: '0,76', desc: 'Centro de Ciencia caracterizado por MinCiencias' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con nombre del proceso, título del proyecto de investigación origen, fechas de ejecución, investigadores, institución gestora y nombre del Centro de Ciencia participante.',
          'Apartado del documento donde se presenten las estrategias pedagógicas, educomunicativas, artísticas o culturales desarrolladas.',
          'Medio de verificación oficial publicado en el repositorio de la institución.',
          'Constancia del Decanato de Investigaciones de UNIAJC.',
        ],
        calidad: [
          'Certificación oficial expedida por el Centro de Ciencia que avale su participación conjunta y acredite los años mínimos de reconocimiento exigidos por MinCiencias (5 años TCCG_A, 3 años TCCG_B, 1 año TCCG_C o Caracterizado TCCG_D).',
        ],
      },
    ]
  },
  {
    id: 'dpc',
    codigo: 'DPC',
    titulo: '4. Divulgación Pública de la Ciencia',
    color: '#E8A020',
    icon: '📢',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Producciones de Contenido Digital y Generación de Contenidos',
        productos: [
          { codigo: 'PCD_A1', pts: '1,34', desc: 'Producción de Contenido Digital con ruta nacional y enfoque diferencial' },
          { codigo: 'GC', pts: '0,56', desc: 'Generación de Contenidos' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con nombre del producto, título del proyecto de investigación origen, fecha (inicio y final) y lugar de realización.',
          'Documento en PDF con el enlace de publicación del video y Escrito en extenso (PDF) con identificación de investigadores e institución gestora.',
          'Documento en PDF con descripción del público objetivo, conceptualización del formato, género, lineamientos conceptuales, características técnicas, estructura narrativa, ruta de circulación, duración y certificación de alianzas estratégicas.',
          'Medio de verificación digital cargado en el repositorio institucional.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Para PCD_A1: Evidencia técnica de contar con una ruta de circulación nacional que incluya un enfoque diferencial aplicable (poblaciones étnicas, mujeres, LGTBI, víctimas, discapacidad, etc.).',
          'Para GC: Sometido a los mismos requerimientos de existencia institucionales.',
        ],
      },
      {
        letra: 'B',
        titulo: 'Libros de Divulgación o Compilación',
        productos: [
          { codigo: 'LIB_DIV', pts: '0,97', desc: 'Libro de Divulgación de Investigación y/o Compilación' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Datos del libro: Título, ISBN, fecha de publicación, autores, editorial y lugar de publicación.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Certificación oficial emitida por el representante legal de la institución (o quien haga sus veces) declarando que, tras revisar los soportes, el texto se valida formalmente como "Libro de Divulgación de Investigación y/o compilación de divulgación".',
        ],
      },
      {
        letra: 'C',
        titulo: 'Consultorías Científico-Tecnológicas y en Procesos Creativos',
        productos: [
          { codigo: 'CON_CT', pts: '0,96', desc: 'Consultoría Científico-Tecnológica' },
          { codigo: 'CON_AAD', pts: '0,96', desc: 'Consultoría en Procesos de Arte, Arquitectura y Diseño' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con el título de la consultoría realizada, fecha en la que se prestó el servicio y número de contrato o documento legal de soporte.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Para CON_CT: Certificación formal expedida por la empresa o entidad contratante avalando el objeto y la calidad de la consultoría prestada.',
          'Para CON_AAD: Certificación oficial emitida por la IES validando el objeto y calidad de la consultoría con indicadores de existencia MinCiencias.',
        ],
      },
      {
        letra: 'D',
        titulo: 'Eventos Científicos con Componente de Apropiación',
        productos: [
          { codigo: 'EC_A', pts: '0,56', desc: 'Ponencia, Póster o Capítulo en memorias de congreso (máx. 3 por año)' },
          { codigo: 'EC_B', pts: '0,38', desc: 'Organización de evento científico o tecnológico' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con el nombre del evento científico o tecnológico, fecha de inicio y fecha de finalización (Restricción: máximo 3 ponencias por año).',
          'Ponencia en extenso (PDF), presentación de la ponencia (diapositivas en PDF), memorias del evento (PDF) y certificado como ponente de por lo menos uno de los autores (PDF).',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Para ponencias derivadas de productos Académico-administrativos: presentar ponencia en extenso (evaluada por Pares Académicos), diapositivas en PDF y Certificación de la Decanatura correspondiente certificando que es resultado de una actividad Académico-administrativa.',
          'Para EC_A: Evidencia de la presentación de la ponencia o participación con póster en el evento científico.',
          'Para EC_B: Evidencia de la organización del evento científico o copia del capítulo publicado en las memorias del congreso (editadas como libro o revista).',
        ],
      },
    ]
  },
  {
    id: 'frh',
    codigo: 'FRH',
    titulo: '5. Formación del Recurso Humano para CTeI',
    color: '#C0392B',
    icon: '👨‍🏫',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Proyectos de I+D+i y Programa Ondas',
        productos: [
          { codigo: 'PF_A', pts: '0,54', desc: 'Proyectos de Investigación, Desarrollo e Innovación' },
          { codigo: 'APO', pts: '0,37', desc: 'Asesorías del Programa Ondas' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Para PF_A: Documento en PDF con título del proyecto, institución, investigador principal, entidad financiadora y acto administrativo de asignación del recurso (incluir año y número de contrato de beca-pasantía de joven investigador si aplica).',
          'Para APO: Documento en PDF con nombre del proyecto, registro en la base de datos de proyectos aprobados por el Programa Ondas, institución, municipio/departamento y resultados socializados en ferias o comunidades virtuales.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Para PF_A: Proyecto ejecutado de forma conjunta con investigadores en empresas.',
          'Para APO: Iniciativa reconocida formalmente en la comunidad de pares del Programa Ondas, habiendo participado en ferias de ciencia a nivel municipal, departamental, regional, nacional o internacional.',
        ],
      },
      {
        letra: 'B',
        titulo: 'Direcciones de Trabajos de Grado de Maestrías y Tesis Postgraduales',
        productos: [
          { codigo: 'TD_A', pts: '2,70', desc: 'Director/codirector/tutor de Tesis de doctorado con distinción (Laureada, Meritoria)' },
          { codigo: 'TD_B', pts: '1,55', desc: 'Director/codirector/tutor de Tesis de doctorado Aprobada' },
          { codigo: 'TM_A', pts: '0,54', desc: 'Director/codirector/tutor de Trabajo de grado de maestría con distinción (Laureado, Meritorio)' },
          { codigo: 'TM_B', pts: '0,31', desc: 'Director/codirector/tutor de Trabajo de grado de maestría aprobado' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Constancia o acta de sustentación en PDF con título del trabajo o tesis, nombre del autor, institución académica, nombre del director/codirector/tutor, año de sustentación y reconocimientos obtenidos.',
          'Documento en PDF con la evidencia de estar cargada en el CvLAC del investigador.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Certificado de participación como director, codirector o tutor de tesis de doctorado o trabajo de grado de maestría según la categoría correspondiente (con distinción Laureada/Meritoria para TD_A y TM_A, o Aprobada para TD_B y TM_B).',
        ],
      },
      {
        letra: 'C',
        titulo: 'Proyectos de Extensión y Responsabilidad Social',
        productos: [
          { codigo: 'PE', pts: '0,54', desc: 'Proyectos de Extensión financiados o de extensión solidaria' },
        ],
        soportes: [
          'Formato DO-F-039 debidamente diligenciado y firmado (PDF).',
          'Documento en PDF con nombre del proyecto de extensión universitaria, fecha de inicio y finalización (si ya concluyó), instituciones vinculadas, investigador principal o gestor, investigadores participantes y comunidad(es) participante(s).',
          'Documento PDF con el resumen estructurado del programa de extensión en CTeI.',
          'Constancia del Decanato de Investigaciones de UNIAJC (si el producto es resultado de investigación).',
        ],
        calidad: [
          'Nota operativa: En esta categoría se deben relacionar tanto los proyectos de extensión financiados por una entidad contratante como los proyectos de extensión solidaria.',
        ],
      },
    ]
  },
];

const excludedItems = [
  '1. Premios Nacionales e Internacionales.',
  '2. Traducción de libros.',
  '3. Publicaciones impresas Universitarias.',
  '4. Conferencias de clase para un curso completo.',
  '5. Manuales o guías de laboratorio para un curso completo.',
  '6. Materiales para Educación a distancia para un curso completo.',
  '7. Los escritos en boletines, periódicos internos, propuestas curriculares de planeación o acreditación, informes de gestión o tareas asignadas, no se consideran como publicaciones impresas universitarias; tampoco las fotocopias o publicaciones ordenadas por el propio profesor(a).',
  '8. Estudios Post-doctorales.',
  '9. Reseñas Críticas.',
  '10. Traducciones.',
  '11. Dirección de Tesis de pregrado y especialización.',
  '12. Las actividades de dirección académico-administrativas (excepto las relacionadas con el acuerdo 09 de 2025 u otro acto administrativo).',
  '13. OTROS productos que a criterio del comité de asignación de puntaje no cumplan con la naturaleza del escalafón.',
];

export default function Productos() {
  const [openGrupo, setOpenGrupo] = useState(null);

  return (
    <section id="productos" className="section prod-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📚 Productos Académicos</div>
          <h2 className="section-title">Tipologías de Productos y Criterios de Existencia y Calidad</h2>
          <p className="section-subtitle">
            Clasificados bajo la codificación técnica oficial de MinCiencias (Anexo 1 de MinCiencias 2024). Haga clic en cada grupo para consultar los subgrupos, puntajes y soportes requeridos (Tabla N°2).
          </p>
        </div>

        <div className="prod-nota">
          <span>📌</span>
          <div>
            <strong>Notas aclaratorias de la Tabla N°2 (Requisitos de existencia y calidad):</strong>
            <ol style={{ margin: '6px 0 0 18px', padding: 0 }}>
              <li>Un producto derivado de un proyecto de investigación, para la UNIAJC, se entiende como aquel que es avalado por el proceso definido en el Decanato de Investigaciones.</li>
              <li>Productos que no sean resultado de investigación serán evaluados por pares académicos para la asignación de puntos.</li>
            </ol>
          </div>
        </div>

        <div className="prod-grupos">
          {grupos.map((g) => (
            <div key={g.id} className={`prod-grupo ${openGrupo === g.id ? 'open' : ''}`}>
              <button
                className="prod-grupo-header"
                style={{ borderLeftColor: g.color }}
                onClick={() => setOpenGrupo(openGrupo === g.id ? null : g.id)}
              >
                <div className="prod-grupo-icon" style={{ background: `${g.color}15`, color: g.color }}>
                  {g.icon}
                </div>
                <div className="prod-grupo-info">
                  <span className="prod-grupo-codigo" style={{ color: g.color }}>{g.codigo}</span>
                  <h3 className="prod-grupo-titulo">{g.titulo}</h3>
                  <span className="prod-grupo-count">
                    {g.subgrupos.reduce((acc, s) => acc + s.productos.length, 0)} tipologías
                  </span>
                </div>
                <div className="prod-arrow" style={{ color: g.color }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points={openGrupo === g.id ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                  </svg>
                </div>
              </button>

              {openGrupo === g.id && (
                <div className="prod-grupo-body animate-fade-up">
                  {g.subgrupos.map((sub) => (
                    <div key={sub.letra} className="prod-subgrupo">
                      <div className="prod-sub-header">
                        <span className="prod-sub-letra" style={{ background: g.color }}>
                          Subgrupo {sub.letra}
                        </span>
                        <h4 className="prod-sub-titulo">{sub.titulo}</h4>
                      </div>
                      <div className="prod-chips">
                        {sub.productos.map((p) => (
                          <div key={p.codigo} className="prod-chip" title={p.desc || ''}>
                            <span className="chip-codigo" style={{ color: g.color }}>{p.codigo}</span>
                            <span className="chip-pts">{p.pts} pts</span>
                            {p.desc && <span className="chip-desc">{p.desc}</span>}
                          </div>
                        ))}
                      </div>
                      {(sub.soportes || sub.calidad) && (
                        <div className="prod-req-details">
                          {sub.soportes && (
                            <div className="prod-req-col">
                              <h5>📄 Soportes de Existencia:</h5>
                              <ul>
                                {sub.soportes.map((s, idx) => <li key={idx}>{s}</li>)}
                              </ul>
                            </div>
                          )}
                          {sub.calidad && (
                            <div className="prod-req-col">
                              <h5>🏅 Requisitos de Calidad / Notas:</h5>
                              <ul>
                                {sub.calidad.map((c, idx) => <li key={idx}>{c}</li>)}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4.3 Productos Académico-Administrativos */}
        <div className="acad-admin-box">
          <div className="acad-admin-icon">🏛️</div>
          <div>
            <h3>6. Productos Académico-Administrativos (Artículo 35 Acuerdo 09 de 2025)</h3>
            <p>
              <strong>a) Registros Calificados y Acreditación:</strong> Los documentos de acreditación, renovación y/o afines <strong>no son productos para el escalafón</strong>, por tratarse de un informe de gestión interna. En esta línea, solo se admitirán <strong>Artículos de Divulgación o Ponencias</strong> derivados de estos procesos, que demuestren metodológicamente la transformación o el impacto académico generado en el programa de la UNIAJC, otorgando el correspondiente crédito a la Institución. Para recibir Artículos de Divulgación o Ponencias, se debe contar con la <strong>resolución de aprobación, de la renovación o acreditación del programa expedida por el Ministerio de Educación Nacional</strong>.
            </p>
          </div>
        </div>

        {/* Parágrafo legal obligatorio */}
        <div className="prod-nota" style={{ marginTop: 20 }}>
          <span>⚖️</span>
          <p>
            <strong>Parágrafo legal obligatorio:</strong> La presentación de un producto de producción intelectual no implica su reconocimiento automático ni la asignación directa de puntaje. Cada producto será objeto de revisión y verificación de los requisitos de existencia y calidad establecidos en la normativa aplicable, en la matriz de asignación de puntaje institucional y en los demás criterios definidos para la presente convocatoria. La aceptación del producto y la asignación del puntaje correspondiente estarán sujetas al análisis y decisión del Comité de Asignación de Puntaje, de conformidad con el Acuerdo 09 de 2025 y los referentes de MinCiencias vigentes, según corresponda.
          </p>
        </div>

        {/* Exclusiones */}
        <div className="exclusion-box">
          <div className="exclusion-header">
            <span>🚫</span>
            <div>
              <h3>4.5. Régimen de exclusión: ¿Qué productos o documentos NO serán aceptados?</h3>
              <p>De acuerdo con la resolución del comité, NO se aceptarán bajo ninguna circunstancia en la presente convocatoria los siguientes productos o actividades:</p>
            </div>
          </div>
          <div className="exclusion-grid">
            {excludedItems.map((item, i) => (
              <div key={i} className="exclusion-item">
                <span>✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OTROS */}
        <div className="otros-box">
          <div className="otros-icon">❓</div>
          <div>
            <h3>7. Productos OTROS (Ítem 18)</h3>
            <p>OTROS corresponden a los Productos que no estén contemplados expresamente en la presente convocatoria. La evaluación de estos productos (OTROS) corresponderá al Comité de Asignación de Puntaje (CAP), de acuerdo con el documento Acuerdo No. 09 de 2025 y el Anexo 1 de MinCiencias vigente.</p>
            <p style={{marginTop: 8}}>
              El profesor(a) tendrá los <strong>cinco (5) primeros días de la convocatoria</strong> para informar por correo electrónico las características del producto que va a postular al correo:
              <a href="mailto:CAP@admon.uniajc.edu.co" className="otros-email">
                CAP@admon.uniajc.edu.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
