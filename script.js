// ================= CONFIGURACIÓN SUPABASE ================= //
const SUPABASE_URL = "https://xpxrhrncxkfkgavdsrsc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_kihoxAj0CoPTAhvLux2SZw_tnWZzMVZ";

// Le cambiamos el nombre a 'clienteSupabase' para no chocar con la librería original
const clienteSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



// ================= DATOS ================= //
const dbMayores = [
    {
        id: 1, 
        nombre: "Alba Estopiña Segrera",
        falla: "Falla Avinguda Malva-Rosa-Antoni Ponz-Cavite",
        sector: "Sector Malva-rosa - Cabanyal - Beteró",
        notaEntrevista: 9.0,
        hablaValenciano: true,
        foto: "./fotos/Alba_Estopiña_Segrera.png" 
    },
    {
        id: 2,
        nombre: "Paula Bonet Barberá",
        falla: "Falla Sant Rafael-Antón Martín",
        sector: "Sector Malva-rosa - Cabanyal - Beteró",
        notaEntrevista: 7.5,
        hablaValenciano: false,
        foto: "./fotos/Paula_Bonet_Barberá.png"
    },
    {
        id: 3,
        nombre: "Patricia Rubio Ros",
        falla: "Falla Sant Pere-Mare de Déu de la Vallivana",
        sector: "Sector Malva-rosa - Cabanyal - Beteró", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Patricia_Rubio_Ros.png"
    },
    {
        id: 4,
        nombre: "Lydia Contreras Carrasco",
        falla: "Falla Barri de Sant Isidre",
        sector: "Sector Patraix", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Lydia_Contreras_Carrasco.png"
    },
    {
        id: 5,
        nombre: "Leire Silva Martínez",
        falla: "Falla Ceramista Ros-Josep Maria Mortes Lerma",
        sector: "Sector Patraix", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Leire_Silva_Martínez.png"
    },
    {
        id: 6,
        nombre: "Carmen Ballester Muñoz",
        falla: "Falla Músic Espí-Gravador Fabregat",
        sector: "Sector Rascanya", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Carmen_Ballester_Muñoz.png"
    },
    {
        id: 7,
        nombre: "Paula Crespo Herrero",
        falla: "Falla Montortal-Torrefiel",
        sector: "Sector Rascanya", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Paula_Crespo_Herrero.png"
    },
    {
        id: 8,
        nombre: "Sara Cabello Andreu",
        falla: "Falla Avinguda Primat Reig-Sant Vicent de Paül",
        sector: "Sector Rascanya", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Sara_Cabello_Andreu.png"
    },
    {
        id: 9,
        nombre: "Esther Rodrigo Giménez",
        falla: "Falla Riu Segura-Forn d’Alcedo",
        sector: "Sector Poblats al Sud", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Esther_Rodrigo_Giménez.png"
    },
    {
        id: 10,
        nombre: "Andrea Meca Monrabal",
        falla: "Falla Hellín-Pere de Lunal",
        sector: "Sector Poblats al Sud", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Andrea_Meca_Monrabal.png"
    },
    {
        id: 11,
        nombre: "María Requena Butrón",
        falla: "Falla Grup de Peixcadors del Perellonet",
        sector: "Sector Poblats al Sud", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/María_Requena_Butrón.png"
    },
    {
        id: 12,
        nombre: "María Ruiz Such",
        falla: "Falla Vicent Sancho Tello-Xile",
        sector: "Sector Pla del Reial - Benimaclet", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/María_Ruiz_Such.png"
    },
    {
        id: 13,
        nombre: "María Valero Sanmartín",
        falla: "Falla Molinell-Alboraia",
        sector: "Sector Pla del Reial - Benimaclet", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/María_Valero_Sanmartín.png"
    },
    {
        id: 14,
        nombre: "Paula López Pérez",
        falla: "Falla Avinguda de Valladolid-Enginyer Vicent Pichó",
        sector: "Sector Pla del Reial - Benimaclet", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Paula_López_Pérez.png"
    },
    {
        id: 15,
        nombre: "Ana Inés Pérez Gómez",
        falla: "Falla Plaça Santa Creu",
        sector: "Sector El Carme", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Ana_Inés_Pérez_Gómez.png"
    },
    {
        id: 16,
        nombre: "Leticia Hoffmann Hernandis",
        falla: "Falla Dalt-Sant Tomàs",
        sector: "Sector El Carme", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Leticia_Hoffmann_Hernandis.png"
    },
    {
        id: 17,
        nombre: "Marta Torres Miranda",
        falla: "Falla Na Jordana",
        sector: "Sector El Carme", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Marta_Torres_Miranda.png"
    },
    {
        id: 18,
        nombre: "María Abad Carrión",
        falla: "Falla Sant Antoni",
        sector: "Sector Quart de Poblet - Xirivella", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/María_Abad_Carrión.png"
    },
    {
        id: 19,
        nombre: "Raquel Sanz López",
        falla: "Falla València-Teodor Llorente",
        sector: "Sector Quart de Poblet - Xirivella", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Raquel_Sanz_López.png"
    },
    {
        id: 20,
        nombre: "Laura López Castillo",
        falla: "Falla Luz Casanova-Pare Espasa",
        sector: "Sector Quart de Poblet - Xirivella", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Laura_López_Castillo.png"
    },
    {
        id: 21,
        nombre: "Claudia Ravello García-Conde",
        falla: "Falla Comte de Salvatierra-Ciril Amorós",
        sector: "Sector Pla del Remei - Gran Via", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Claudia_Ravello_García-Conde.png"
    },
    {
        id: 22,
        nombre: "Carla Yago Barranco",
        falla: "Falla Salamanca-Comte d’Altea",
        sector: "Sector Pla del Remei - Gran Via", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Carla_Yago_Barranco.png"
    },
    {
        id: 23,
        nombre: "Gemma Galiano López",
        falla: "Falla Avinguda Jacinto Benavente-Regina Na Germana",
        sector: "Sector Pla del Remei - Gran Via", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Gemma_Galiano_López.png"
    },
    {
        id: 24,
        nombre: "Paloma Mora García",
        falla: "Falla Doctor Marañón-Mestre Palau",
        sector: "Sector Mislata", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Paloma_Mora_García.png"
    },
    {
        id: 25,
        nombre: "Laura Flores Hinojosa",
        falla: "Falla Plaça de la Moreria",
        sector: "Sector Mislata", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Laura_Flores_Hinojosa.png"
    },
    {
        id: 26,
        nombre: "Lara Cuevas Muriel",
        falla: "Falla Doctor Domingo Orozco-Bailén",
        sector: "Sector Benimàmet - Burjassot - Beniferri", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Lara_Cuevas_Muriel.png"
    },
    {
        id: 27,
        nombre: "Paula López-Tercero Romero",
        falla: "Falla Isaac Peral-Misser Mascó",
        sector: "Sector Benimàmet - Burjassot - Beniferri", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Paula_López-Tercero_Romero.png"
    },
    {
        id: 28,
        nombre: "Gemma Belenguer Gómez",
        falla: "Falla Evarist Bas-Cullera",
        sector: "Sector Benimàmet - Burjassot - Beniferri", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Gemma_Belenguer_Gómez.png"
    },
    {
        id: 29,
        nombre: "Blanca Rodenas Maestro",
        falla: "Falla Plaça La Creu -Els Àngels",
        sector: "Sector Canyamelar - Grau - Natzaret", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Blanca_Rodenas_Maestro.png"
    },
    {
        id: 30,
        nombre: "María Chulia Zaragoza",
        falla: "Falla Blocs Platja",
        sector: "Sector Canyamelar - Grau - Natzaret", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/María_Chulia_Zaragoza.png"
    },
    {
        id: 31,
        nombre: "Elena Giménez Grimalt",
        falla: "Falla Just Vilar-Mercat del Cabanyal",
        sector: "Sector Canyamelar - Grau - Natzaret", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Elena_Giménez_Grimalt.png"
    },
    {
        id: 32,
        nombre: "María Rodríguez Palomo",
        falla: "Falla Rubén Darío-Fra Lluís Colomer",
        sector: "Sector Algirós", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/María_Rodríguez_Palomo.png"
    },
    {
        id: 33,
        nombre: "Nerea Guillem Guillem",
        falla: "Falla Barri de Sant Josep",
        sector: "Sector Algirós", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Nerea_Guillem_Guillem.png"
    },
    {
        id: 34,
        nombre: "Ana Martínez Muñoz",
        falla: "Falla Doctor Manuel Candela-Beatriz Tortosa",
        sector: "Sector Algirós", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Ana_Martínez_Muñoz.png"
    },
    {
        id: 35,
        nombre: "María Climent Lago",
        falla: "Falla Lluís Oliag-Mariola-Granada",
        sector: "Sector Quatre Carreres", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/María_Climent_Lago.png"
    },
    {
        id: 36,
        nombre: "Lucía Gómez Villaplana",
        falla: "Falla Avinguda Pianista Martínez Carrasco-Eslida",
        sector: "Sector Quatre Carreres", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Lucía_Gómez_Villaplana.png"
    },
    {
        id: 37,
        nombre: "Arantxa Alonso Chuliá",
        falla: "Falla Carrera de Sant Lluís-Rafael Albiñana",
        sector: "Sector Quatre Carreres", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Arantxa_Alonso_Chuliá.png"
    },
    {
        id: 38,
        nombre: "Beatriz Blanco Tamarit",
        falla: "Falla Castelló-Sogorb",
        sector: "Sector Russafa B", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Beatriz_Blanco_Tamarit.png"
    },
    {
        id: 39,
        nombre: "Carmen Chiva Gomara",
        falla: "Falla Cadis-Literat Azorín",
        sector: "Sector Russafa B", 
        notaEntrevista: 8.2,
        hablaValenciano: true,
        foto: "./fotos/Carmen_Chiva_Gomara.png"
    }
];

const dbInfantiles = [
    // Pega aquí las candidatas infantiles
    {
        id: 101,
        nombre: "Natalia Roig Monzo",
        falla: "Falla Avinguda Peris i Valero-Cuba",
        sector: "Sector Russafa B",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Natalia_Roig_Monzo.png" 
    },
    {
        id: 102, 
        nombre: "Lorena Meléndez Simó",
        falla: "Falla Sueca-Literat Azorín",
        sector: "Sector Russafa B",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Lorena_Meléndez_Simó.png" 
    },
    {
        id: 103, 
        nombre: "Sofía Perea Gómez",
        falla: "Falla Avinguda Pianista Martínez Carrasco-Eslida",
        sector: "Sector Quatre Carreres",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Sofía_Perea_Gómez.png" 
    },
    {
        id: 104, 
        nombre: "Alejandra Coloma Rubio",
        falla: "Falla Bisbe Jaume Pérez-Lluís Oliag",
        sector: "Sector Quatre Carreres",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Alejandra_Coloma_Rubio.png" 
    },
    {
        id: 105, 
        nombre: "María Merchán Bernabé",
        falla: "Falla Carrera de Malilla-Enginyer J. Benlloch",
        sector: "Sector Quatre Carreres",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/María_Merchán_Bernabé.png" 
    },
    {
        id: 106, 
        nombre: "Sofía Martínez Decornoy",
        falla: "Falla Barri de Sant Josep",
        sector: "Sector Algirós",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Sofía_Martínez_Decornoy.png" 
    },
    {
        id: 107, 
        nombre: "Inma Sánchez Agustí",
        falla: "Falla Iecla-Cardenal Benlloch",
        sector: "Sector Algirós",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Inma_Sánchez_Agustí.png" 
    },
    {
        id: 108, 
        nombre: "Carmen Alonso García",
        falla: "Falla Avinguda Tarongers-Universitat Politècnica",
        sector: "Sector Algirós",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Carmen_Alonso_García.png" 
    },
    {
        id: 109, 
        nombre: "Julia Vizcayno Orero",
        falla: "Falla Rosari-Plaça Calabuig",
        sector: "Sector Canyamelar - Grau - Natzaret",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Julia_Vizcayno_Orero.png" 
    },
    {
        id: 110, 
        nombre: "Marta Inés De La Peña Y De La Rosa",
        falla: "Falla Major-Moraira-Natzaret",
        sector: "Sector Canyamelar - Grau - Natzaret",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Marta_Inés_DeLaPeña_Y_DeLaRosa.png" 
    },
    {
        id: 111, 
        nombre: "Carla Traver Valero",
        falla: "Falla Menorca-Lluís Bolinches",
        sector: "Sector Canyamelar - Grau - Natzaret",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Carla_Traver_Valero.png" 
    },
    {
        id: 112, 
        nombre: "Martina García Cebrián",
        falla: "Falla Plaça Lluís Cano",
        sector: "Sector Benimàmet - Burjassot - Beniferri",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Martina_García_Cebrián.png" 
    },
    {
        id: 113, 
        nombre: "Daniella Samblas Benaches",
        falla: "Falla Pi i Margall-Arturo Cervellera",
        sector: "Sector Benimàmet - Burjassot - Beniferri",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Daniella_Samblas_Benaches.png" 
    },
    {
        id: 114, 
        nombre: "Julia Martos Pardo",
        falla: "Falla Evarist Bas-Cullera",
        sector: "Sector Benimàmet - Burjassot - Beniferri",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Julia_Martos_Pardo.png" 
    },
    {
        id: 115, 
        nombre: "Ariadna Fernández Zapata",
        falla: "Falla Barri Quint-Pizarro",
        sector: "Sector Mislata",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Ariadna_Fernández_Zapata.png" 
    },
    {
        id: 116, 
        nombre: "Carla Martínez Lluna",
        falla: "Falla Felipe Bellver-Mare Ràfols",
        sector: "Sector Mislata",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Carla_Martínez_Lluna.png" 
    },
    {
        id: 117, 
        nombre: "Macarena De La Osa Soler",
        falla: "Falla Avinguda Regne de València-Ciscar",
        sector: "Sector Pla del Remei - Gran Via",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Macarena_DeLa_Osa_Soler.png" 
    },
    {
        id: 118, 
        nombre: "Valeria Sordo Ferrero",
        falla: "Falla Mestre Gozalbo-Comte d’Altea",
        sector: "Sector Pla del Remei - Gran Via",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Valeria_Sordo_Ferrero.png" 
    },
    {
        id: 119, 
        nombre: "Alejandra Hernández Macián",
        falla: "Falla Comte de Salvatierra-Ciril Amorós",
        sector: "Sector Pla del Remei - Gran Via",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Alejandra_Hernández_Macián.png" 
    },
    {
        id: 120, 
        nombre: "Alma Ruedas García",
        falla: "Falla Pius XII-Jaume Roig",
        sector: "Sector Quart de Poblet - Xirivella",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Alma_Ruedas_García.png" 
    },
    {
        id: 121, 
        nombre: "María Catalá Martínez",
        falla: "Falla Poeta Llorente",
        sector: "Sector Quart de Poblet - Xirivella",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/María_Catalá_Martínez.png" 
    },
    {
        id: 122, 
        nombre: "Júlia Grau Mayordomo",
        falla: "Falla Mestre Serrano-Alacant",
        sector: "Sector Quart de Poblet - Xirivella",
        notaEntrevista: 8.5,
        hablaValenciano: true,
        foto: "./fotos/FMI/Júlia_Grau_Mayordomo.png" 
    }
    
];

// ================= VARIABLES DE ESTADO ================= //
let usuarioActivo = null;
let modoActual = 'mayores'; 
let candidatasActivas = dbMayores; // Asegúrate de tener dbMayores y dbInfantiles declarados en tu código
let corteHonor = []; 
let elegidaFinal = null; 
let modoEleccion = false; 

// ================= LÓGICA DE CAMBIO DE MODO ================= //
function cambiarCategoria(nuevaCategoria) {
    if (modoActual === nuevaCategoria) return; 
    guardarEstado();
    modoActual = nuevaCategoria;
    candidatasActivas = (modoActual === 'mayores') ? dbMayores : dbInfantiles;

    document.documentElement.style.setProperty('--color-tema', modoActual === 'mayores' ? '#800020' : '#0077b6');
    document.getElementById('titulo-app').textContent = modoActual === 'mayores' ? 'Probabilidad FMV 2026' : 'Probabilidad FMIV 2026';
    document.getElementById('texto-corte').textContent = modoActual === 'mayores' ? 'Corte de Honor' : 'Corte de Honor Infantil';
    document.getElementById('titulo-fmv').textContent = modoActual === 'mayores' ? 'Fallera Mayor de Valencia' : 'Fallera Mayor Infantil de Valencia';

    document.getElementById('btn-mayores').classList.toggle('activo', modoActual === 'mayores');
    document.getElementById('btn-infantiles').classList.toggle('activo', modoActual === 'infantiles');

    cargarEstado();
    inicializarFiltros();
    document.getElementById('buscador').value = ''; 
    actualizarCuadroEleccion();
    renderizarTarjetas();
}

// ================= FUNCIONES DE AUTENTICACIÓN ================= //
async function registro() {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;

    if (!email || !password) {
        alert("Por favor, rellena el email y la contraseña.");
        return;
    }

    const { data, error } = await clienteSupabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        alert("Error en el registro: " + error.message);
    } else {
        alert("¡Registro correcto! Ya puedes iniciar sesión.");
    }
}

async function login() {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;

    const { data, error } = await clienteSupabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert("Error al entrar: " + error.message);
    } else {
        usuarioActivo = data.user;
        actualizarInterfazAuth();
        alert("Bienvenido, sesión iniciada.");
    }
}

async function logout() {
    await clienteSupabase.auth.signOut();
    usuarioActivo = null;
    actualizarInterfazAuth();
}

function actualizarInterfazAuth() {
    const divOut = document.getElementById('user-logged-out');
    const divIn = document.getElementById('user-logged-in');
    const textUser = document.getElementById('user-email-text');

    if (usuarioActivo) {
        divOut.style.display = 'none';
        divIn.style.display = 'flex';
        textUser.textContent = `Sesión: ${usuarioActivo.email}`;
    } else {
        divOut.style.display = 'flex';
        divIn.style.display = 'none';
    }
}

// Escuchar si el usuario ya tenía sesión iniciada al cargar la página
async function revisarSesion() {
    const { data: { session } } = await clienteSupabase.auth.getSession();
    if (session) {
        usuarioActivo = session.user;
        actualizarInterfazAuth();
    }
}

// ================= GUARDAR EN LA NUBE ================= //
async function guardarQuinielaEnNube() {
    if (!usuarioActivo) {
        alert("Debes registrarte o iniciar sesión para guardar tu quiniela oficial.");
        return;
    }

    if (corteHonor.length < 13) {
        alert("Debes completar las 13 seleccionadas antes de guardar.");
        return;
    }

    const { data, error } = await clienteSupabase
        .from('quinielas')
        .upsert({
            user_id: usuarioActivo.id,
            user_email: usuarioActivo.email,
            tipo: modoActual,
            corte: corteHonor,
            elegida_final: elegidaFinal
        }, { onConflict: 'user_id,tipo' });

    if (error) {
        alert("No se pudo guardar: " + error.message);
    } else {
        alert("¡Tu quiniela oficial ha sido guardada en la base de datos de la comisión!");
    }
}



// ================= LÓGICA DE CAMBIO DE MODO ================= //
function cambiarCategoria(nuevaCategoria) {
    if (modoActual === nuevaCategoria) return; // Si ya estamos ahí, no hacemos nada

    // 1. Guardar el progreso de la categoría actual antes de irnos
    guardarEstado();

    // 2. Cambiar las variables
    modoActual = nuevaCategoria;
    candidatasActivas = (modoActual === 'mayores') ? dbMayores : dbInfantiles;

    // 3. Modificar la interfaz visual (Colores y Textos)
    document.documentElement.style.setProperty('--color-tema', modoActual === 'mayores' ? '#800020' : '#0077b6');
    
    document.getElementById('titulo-app').textContent = modoActual === 'mayores' ? 'Probabilidad FMV 2026' : 'Probabilidad FMIV 2026';
    document.getElementById('texto-corte').textContent = modoActual === 'mayores' ? 'Corte de Honor' : 'Corte de Honor Infantil';
    document.getElementById('titulo-fmv').textContent = modoActual === 'mayores' ? 'Fallera Mayor de Valencia' : 'Fallera Mayor Infantil de Valencia';

    // 4. Actualizar el estilo de los botones superiores
    document.getElementById('btn-mayores').classList.toggle('activo', modoActual === 'mayores');
    document.getElementById('btn-infantiles').classList.toggle('activo', modoActual === 'infantiles');

    // 5. Cargar los datos de memoria de la nueva categoría y redibujar
    cargarEstado();
    inicializarFiltros();
    
    // Limpiar el buscador para evitar filtros residuales
    document.getElementById('buscador').value = ''; 
    
    actualizarCuadroEleccion();
    renderizarTarjetas();
}


// ================= MOTOR DE LA APP ================= //
function inicializarFiltros() {
    const selector = document.getElementById('filtro-sector');
    selector.innerHTML = '<option value="todos">Todos los sectores</option>'; // Resetear
    
    const sectoresUnicos = [...new Set(candidatasActivas.map(c => c.sector))];
    sectoresUnicos.forEach(sector => {
        const opcion = document.createElement('option');
        opcion.value = sector;
        opcion.textContent = sector;
        selector.appendChild(opcion);
    });
}

function calcularPesos() {
    let pesoTotal = 0;
    candidatasActivas.forEach(c => {
        let peso = c.notaEntrevista;
        if (c.hablaValenciano) peso += 2.0; 
        c.pesoAsignado = peso;
        pesoTotal += peso;
    });

    candidatasActivas.forEach(c => {
        c.probabilidadFinal = (c.pesoAsignado / pesoTotal) * 100;
    });
}

function renderizarTarjetas() {
    calcularPesos();
    const contenedor = document.getElementById('grid-candidatas');
    const sectorSeleccionado = document.getElementById('filtro-sector').value;
    const textoBusqueda = document.getElementById('buscador').value.toLowerCase();
    
    contenedor.innerHTML = ''; 

    const filtradas = candidatasActivas.filter(c => {
        const coincideSector = sectorSeleccionado === 'todos' || c.sector === sectorSeleccionado;
        const coincideTexto = c.nombre.toLowerCase().includes(textoBusqueda) || 
                              c.falla.toLowerCase().includes(textoBusqueda);
        return coincideSector && coincideTexto;
    });

    if (filtradas.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; width:100%; color:#666;">No hay resultados.</p>';
        return;
    }

    filtradas.forEach(candidata => {
        const tarjeta = document.createElement('div');
        tarjeta.className = `candidata-card ${modoEleccion ? 'seleccionable' : ''}`;
        
        if (corteHonor.includes(candidata.id)) {
            tarjeta.classList.add('en-corte');
        }

        if (modoEleccion) {
            tarjeta.onclick = () => toggleCorte(candidata.id);
        }

        const etiquetaRango = modoActual === 'mayores' ? 'FMV' : 'FMIV';

        tarjeta.innerHTML = `
            <div class="imagen-container">
                <img src="${candidata.foto}" alt="${candidata.nombre}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23ccc\\'/></svg>'">
            </div>
            <div class="info-container">
                <h2 class="nombre-candidata">${candidata.nombre}</h2>
                <p class="falla-texto">${candidata.falla}</p>
                <p class="sector-texto">Sector: ${candidata.sector}</p>
                
                <div class="probabilidad-box">
                    <svg class="icono-bellota" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.686 2 6 4.686 6 8C6 8.58 6.082 9.141 6.234 9.672C5.503 10.378 5 11.365 5 12.5C5 14.985 7.015 17 9.5 17H14.5C16.985 17 19 14.985 19 12.5C19 11.365 18.497 10.378 17.766 9.672C17.918 9.141 18 8.58 18 8C18 4.686 15.314 2 12 2ZM12 4C14.209 4 16 5.791 16 8C16 8.173 15.986 8.343 15.961 8.508C15.65 8.188 15.281 7.925 14.863 7.734C14.004 7.342 13.033 7.125 12 7.125C10.967 7.125 9.996 7.342 9.137 7.734C8.719 7.925 8.35 8.188 8.039 8.508C8.014 8.343 8 8.173 8 8C8 5.791 9.791 4 12 4ZM9.5 15C8.119 15 7 13.881 7 12.5C7 11.554 7.525 10.732 8.324 10.301C9.406 10.748 10.655 11 12 11C13.345 11 14.594 10.748 15.676 10.301C16.475 10.732 17 11.554 17 12.5C17 13.881 15.881 15 14.5 15H9.5ZM11 18V21H13V18H11Z"/>
                    </svg>
                    <div class="porcentaje-wrapper">
                        <span class="numero-probabilidad">${candidata.probabilidadFinal.toFixed(1)}%</span>
                        <span class="label-probabilidad">Probabilidad ${etiquetaRango}</span>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// ================= MODO ELECCIÓN Y CACHÉ ================= //
function toggleModoEleccion() {
    modoEleccion = !modoEleccion;
    const btn = document.getElementById('btn-eleccion');
    const zona = document.getElementById('zona-eleccion');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    
    if (modoEleccion) {
        btn.textContent = "Desactivar Modo Elección";
        btn.classList.add('modo-activo');
        zona.classList.add('visible');
        if(btnReiniciar) btnReiniciar.style.display = "inline-block";
    } else {
        btn.textContent = "Activar Modo Elección";
        btn.classList.remove('modo-activo');
        zona.classList.remove('visible');
        if(btnReiniciar) btnReiniciar.style.display = "none";
    }
    renderizarTarjetas();
}

function toggleCorte(id) {
    const index = corteHonor.indexOf(id);
    if (index > -1) {
        corteHonor.splice(index, 1);
        if (elegidaFinal === id) elegidaFinal = null; 
    } else {
        if (corteHonor.length < 13) {
            corteHonor.push(id);
        } else {
            alert(`¡La Corte de Honor ya tiene a sus 13 candidatas!`);
            return;
        }
    }
    actualizarCuadroEleccion();
    renderizarTarjetas();
    guardarEstado();
}

function seleccionarFinal(id) {
    if (elegidaFinal === id) {
        elegidaFinal = null;
    } else {
        elegidaFinal = id;
    }
    actualizarCuadroEleccion();
    guardarEstado();
}

function eliminarDeCorte(evento, id) {
    evento.stopPropagation(); 
    toggleCorte(id); 
}

function actualizarCuadroEleccion() {
    document.getElementById('contador-corte').textContent = corteHonor.length;
    const gridCorte = document.getElementById('corte-grid');
    const spotFinal = document.getElementById('fmv-elegida');
    
    gridCorte.innerHTML = '';
    spotFinal.innerHTML = '<p style="color: #666;">Haz clic en una candidata de la Corte para elegirla</p>';

    corteHonor.forEach(id => {
        const c = candidatasActivas.find(cand => cand.id === id);
        if (!c) return;
        
        const div = document.createElement('div');
        div.className = 'miniatura-corte';
        div.onclick = () => seleccionarFinal(c.id);
        div.innerHTML = `
            <button class="btn-eliminar-corte" onclick="eliminarDeCorte(event, ${c.id})">✕</button>
            <img src="${c.foto}" alt="${c.nombre}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23ccc\\'/></svg>'">
            <p>${c.nombre.split(' ')[0]}</p>
        `;
        gridCorte.appendChild(div);

        if (elegidaFinal === id) {
            spotFinal.innerHTML = `
                <img src="${c.foto}" alt="${c.nombre}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23ccc\\'/></svg>'">
                <h3 style="color: var(--color-tema); margin: 10px 0 0 0;">${c.nombre}</h3>
                <p style="margin: 0; font-weight: bold;">${c.falla}</p>
            `;
        }
    });

    const divBotones = document.getElementById('botones-exportacion');
    divBotones.style.display = corteHonor.length > 0 ? 'flex' : 'none';
}

function guardarEstado() {
    const sufijo = modoActual === 'mayores' ? 'FMV' : 'FMIV';
    localStorage.setItem(`corteHonor_${sufijo}`, JSON.stringify(corteHonor));
    localStorage.setItem(`elegida_${sufijo}`, elegidaFinal ? elegidaFinal.toString() : 'null');
}

function cargarEstado() {
    const sufijo = modoActual === 'mayores' ? 'FMV' : 'FMIV';
    const guardadoCorte = localStorage.getItem(`corteHonor_${sufijo}`);
    const guardadaElegida = localStorage.getItem(`elegida_${sufijo}`);
    
    corteHonor = guardadoCorte ? JSON.parse(guardadoCorte) : [];
    elegidaFinal = (guardadaElegida && guardadaElegida !== 'null') ? parseInt(guardadaElegida) : null;
    
    if (corteHonor.length > 0 && !modoEleccion) {
        toggleModoEleccion();
    } else if (corteHonor.length === 0 && modoEleccion) {
        toggleModoEleccion(); // Se repliega si está vacía al cambiar de pestaña
    }
}

// ================= EXPORTACIÓN ================= //
function compartirWhatsApp() {
    if (corteHonor.length === 0) return;

    const etiquetaRango = modoActual === 'mayores' ? 'FMV' : 'FMIV';
    let texto = `👑 *Mi Quiniela para ${etiquetaRango} 2026* 👑\n\n*Corte de Honor:*\n`;
    
    corteHonor.forEach(id => {
        const c = candidatasActivas.find(cand => cand.id === id);
        if (c && elegidaFinal !== id) texto += `➖ ${c.nombre}\n`;
    });

    if (elegidaFinal) {
        const cFinal = candidatasActivas.find(cand => cand.id === elegidaFinal);
        const tituloGran = modoActual === 'mayores' ? 'FALLERA MAYOR DE VALENCIA' : 'FALLERA MAYOR INFANTIL DE VALENCIA';
        texto += `\n🔥 *${tituloGran}:*\n✨ ${cFinal.nombre} ✨\n`;
    }

    texto += `\n📍 #FallaMinistro #${etiquetaRango}2026`;
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
}

function descargarImagen() {
    if (corteHonor.length === 0) return;

    const zonaEleccion = document.getElementById('zona-eleccion');
    const botonesExportacion = document.getElementById('botones-exportacion');
    const btnEliminar = document.querySelectorAll('.btn-eliminar-corte');
    const etiquetaRango = modoActual === 'mayores' ? 'FMV' : 'FMIV';

    botonesExportacion.style.display = 'none';
    btnEliminar.forEach(btn => btn.style.display = 'none');

    html2canvas(zonaEleccion, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        const enlace = document.createElement('a');
        enlace.download = `Quiniela_${etiquetaRango}_2026.png`;
        enlace.href = canvas.toDataURL("image/png");
        enlace.click();

        botonesExportacion.style.display = 'flex';
        btnEliminar.forEach(btn => btn.style.display = 'flex');
    });
}

function reiniciarEleccion() {
    if(confirm("¿Estás seguro de que quieres borrar la selección actual?")) {
        corteHonor = [];
        elegidaFinal = null;
        guardarEstado();
        actualizarCuadroEleccion();
        renderizarTarjetas();
    }
}

// Inicialización de arranque
window.onload = async () => {
    await revisarSesion();
    inicializarFiltros();
    cargarEstado(); 
    actualizarCuadroEleccion();
    renderizarTarjetas();
};

// ================= SISTEMA DE CLASIFICACIÓN (RANKING) ================= //

// ¡OJO! Aquí pondrás los IDs reales la noche de la Fonteta. 
// Mientras estén vacíos, todos tendrán 0 puntos. Puedes probar a poner IDs de tu lista para ver cómo suma.
const resultadosOficiales = {
    mayores: {
        corte: [], 
        fmv: null  // El ID de la elegida
    },
    infantiles: {
        corte: [], // Pon aquí los 13 IDs de las infantiles
        fmv: null 
    }
};

let mostrandoRanking = false;

async function toggleClasificacion() {
    mostrandoRanking = !mostrandoRanking;
    
    const zonaRanking = document.getElementById('zona-clasificacion');
    const controles = document.querySelector('.controles-container');
    const zonaEleccion = document.getElementById('zona-eleccion');
    const gridCandidatas = document.getElementById('grid-candidatas');
    
    if (mostrandoRanking) {
        // Ocultar la app principal y mostrar ranking
        controles.style.display = 'none';
        zonaEleccion.style.display = 'none';
        gridCandidatas.style.display = 'none';
        zonaRanking.style.display = 'block';
        
        document.getElementById('ranking-modo-texto').textContent = modoActual === 'mayores' ? 'Mayores' : 'Infantiles';
        await cargarRanking();
    } else {
        // Volver a la app principal
        controles.style.display = 'flex';
        if (corteHonor.length > 0) zonaEleccion.style.display = 'block';
        gridCandidatas.style.display = 'grid';
        zonaRanking.style.display = 'none';
    }
}

async function cargarRanking() {
    const contenedorTabla = document.getElementById('tabla-ranking-container');
    contenedorTabla.innerHTML = '<p>Cargando datos de la Fonteta...</p>';

    // 1. Descargar todas las quinielas de la categoría actual desde Supabase
    const { data: quinielas, error } = await clienteSupabase
        .from('quinielas')
        .select('user_email, corte, elegida_final')
        .eq('tipo', modoActual);

    if (error) {
        contenedorTabla.innerHTML = `<p style="color:red;">Error al cargar: ${error.message}</p>`;
        return;
    }

    if (!quinielas || quinielas.length === 0) {
        contenedorTabla.innerHTML = '<p>Aún no hay quinielas registradas en esta categoría.</p>';
        return;
    }

    const oficial = resultadosOficiales[modoActual];

    // 2. Calcular puntos para cada usuario
    const ranking = quinielas.map(q => {
        let puntos = 0;
        
        // Sumar 1 punto por cada acierto en la Corte
        if (oficial.corte.length > 0) {
            q.corte.forEach(id => {
                if (oficial.corte.includes(id)) puntos += 1;
            });
        }
        
        // Sumar 5 puntos por acertar la FMV/FMIV
        if (oficial.fmv && q.elegida_final === oficial.fmv) {
            puntos += 5;
        }

        return {
            usuario: q.user_email.split('@')[0], // Mostrar solo la primera parte del email por privacidad
            puntos: puntos
        };
    });

    // 3. Ordenar de mayor a menor puntuación
    ranking.sort((a, b) => b.puntos - a.puntos);

    // 4. Construir la tabla HTML
    let htmlTabla = `
        <table class="tabla-ranking">
            <thead>
                <tr>
                    <th>Posición</th>
                    <th>Fallero/a</th>
                    <th>Puntuación</th>
                </tr>
            </thead>
            <tbody>
    `;

    ranking.forEach((r, index) => {
        let medalla = `${index + 1}º`;
        if (index === 0) medalla = '🥇';
        if (index === 1) medalla = '🥈';
        if (index === 2) medalla = '🥉';

        htmlTabla += `
            <tr>
                <td style="font-weight:bold; font-size:1.2rem;">${medalla}</td>
                <td>${r.usuario}</td>
                <td style="font-weight:bold; color:var(--color-tema);">${r.puntos} pts</td>
            </tr>
        `;
    });

    htmlTabla += `</tbody></table>`;
    contenedorTabla.innerHTML = htmlTabla;
}