const candidatas = [
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

// Estado de la aplicación
let modoEleccion = false;
let corteHonor = []; // Array de IDs
let fmv = null; // ID de la FMV

function inicializarFiltros() {
    const selector = document.getElementById('filtro-sector');
    const sectoresUnicos = [...new Set(candidatas.map(c => c.sector))];
    
    sectoresUnicos.forEach(sector => {
        const opcion = document.createElement('option');
        opcion.value = sector;
        opcion.textContent = sector;
        selector.appendChild(opcion);
    });
}

function calcularPesos() {
    let pesoTotal = 0;
    candidatas.forEach(c => {
        let peso = c.notaEntrevista;
        if (c.hablaValenciano) peso += 2.0; 
        c.pesoAsignado = peso;
        pesoTotal += peso;
    });

    candidatas.forEach(c => {
        c.probabilidadFMV = (c.pesoAsignado / pesoTotal) * 100;
    });
}

function renderizarTarjetas() {
    calcularPesos();
    const contenedor = document.getElementById('grid-candidatas');
    
    const sectorSeleccionado = document.getElementById('filtro-sector').value;
    const textoBusqueda = document.getElementById('buscador').value.toLowerCase();
    
    contenedor.innerHTML = ''; 

    const candidatasFiltradas = candidatas.filter(c => {
        const coincideSector = sectorSeleccionado === 'todos' || c.sector === sectorSeleccionado;
        const coincideTexto = c.nombre.toLowerCase().includes(textoBusqueda) || 
                              c.falla.toLowerCase().includes(textoBusqueda);
        return coincideSector && coincideTexto;
    });

    if (candidatasFiltradas.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; width:100%; color:#666;">No se han encontrado candidatas con esa búsqueda.</p>';
        return;
    }

    candidatasFiltradas.forEach(candidata => {
        const tarjeta = document.createElement('div');
        tarjeta.className = `candidata-card ${modoEleccion ? 'seleccionable' : ''}`;
        
        if (corteHonor.includes(candidata.id)) {
            tarjeta.classList.add('en-corte');
        }

        if (modoEleccion) {
            tarjeta.onclick = () => toggleCorte(candidata.id);
        }

        const svgBellota = `
            <svg class="icono-bellota" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.686 2 6 4.686 6 8C6 8.58 6.082 9.141 6.234 9.672C5.503 10.378 5 11.365 5 12.5C5 14.985 7.015 17 9.5 17H14.5C16.985 17 19 14.985 19 12.5C19 11.365 18.497 10.378 17.766 9.672C17.918 9.141 18 8.58 18 8C18 4.686 15.314 2 12 2ZM12 4C14.209 4 16 5.791 16 8C16 8.173 15.986 8.343 15.961 8.508C15.65 8.188 15.281 7.925 14.863 7.734C14.004 7.342 13.033 7.125 12 7.125C10.967 7.125 9.996 7.342 9.137 7.734C8.719 7.925 8.35 8.188 8.039 8.508C8.014 8.343 8 8.173 8 8C8 5.791 9.791 4 12 4ZM9.5 15C8.119 15 7 13.881 7 12.5C7 11.554 7.525 10.732 8.324 10.301C9.406 10.748 10.655 11 12 11C13.345 11 14.594 10.748 15.676 10.301C16.475 10.732 17 11.554 17 12.5C17 13.881 15.881 15 14.5 15H9.5ZM11 18V21H13V18H11Z"/>
            </svg>
        `;

        tarjeta.innerHTML = `
            <div class="imagen-container">
                <img src="${candidata.foto}" alt="Retrato de ${candidata.nombre}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23ccc\\'/></svg>'">
            </div>
            <div class="info-container">
                <h2 class="nombre-candidata">${candidata.nombre}</h2>
                <p class="falla-texto">${candidata.falla}</p>
                <p class="sector-texto">Sector: ${candidata.sector}</p>
                
                <div class="probabilidad-box">
                    ${svgBellota}
                    <div class="porcentaje-wrapper">
                        <span class="numero-probabilidad">${candidata.probabilidadFMV.toFixed(1)}%</span>
                        <span class="label-probabilidad">Probabilidad FMV</span>
                    </div>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

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
        if (fmv === id) fmv = null; 
    } else {
        if (corteHonor.length < 13) {
            corteHonor.push(id);
        } else {
            alert("¡La Corte de Honor ya tiene a sus 13 candidatas!");
            return;
        }
    }
    actualizarCuadroEleccion();
    renderizarTarjetas();
    guardarEstado();
}

function seleccionarFMV(id) {
    if (fmv === id) {
        fmv = null;
    } else {
        fmv = id;
    }
    actualizarCuadroEleccion();
    guardarEstado();
}

function actualizarCuadroEleccion() {
    document.getElementById('contador-corte').textContent = corteHonor.length;
    const gridCorte = document.getElementById('corte-grid');
    const spotFmv = document.getElementById('fmv-elegida');
    
    gridCorte.innerHTML = '';
    spotFmv.innerHTML = '<p style="color: #666;">Haz clic en una candidata de la Corte para elegirla FMV</p>';

    corteHonor.forEach(id => {
        const c = candidatas.find(cand => cand.id === id);
        if (!c) return;
        
        const div = document.createElement('div');
        div.className = 'miniatura-corte';
        
        div.onclick = () => seleccionarFMV(c.id);
        
        div.innerHTML = `
            <button class="btn-eliminar-corte" onclick="eliminarDeCorte(event, ${c.id})">✕</button>
            <img src="${c.foto}" alt="${c.nombre}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23ccc\\'/></svg>'">
            <p>${c.nombre.split(' ')[0]}</p>
        `;
        gridCorte.appendChild(div);

        if (fmv === id) {
            spotFmv.innerHTML = `
                <img src="${c.foto}" alt="${c.nombre}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23ccc\\'/></svg>'">
                <h3 style="color: var(--granate); margin: 10px 0 0 0;">${c.nombre}</h3>
                <p style="margin: 0; font-weight: bold;">${c.falla}</p>
            `;
        }
    });

    const divBotones = document.getElementById('botones-exportacion');
    if (corteHonor.length > 0) {
        divBotones.style.display = 'flex';
    } else {
        divBotones.style.display = 'none';
    }
}

function eliminarDeCorte(evento, id) {
    evento.stopPropagation(); 
    toggleCorte(id); 
}

function guardarEstado() {
    localStorage.setItem('corteHonor_FMV', JSON.stringify(corteHonor));
    localStorage.setItem('fmv_seleccionada', fmv ? fmv.toString() : 'null');
}

function cargarEstado() {
    const guardadoCorte = localStorage.getItem('corteHonor_FMV');
    const guardadoFmv = localStorage.getItem('fmv_seleccionada');
    
    if (guardadoCorte) {
        corteHonor = JSON.parse(guardadoCorte);
    }
    if (guardadoFmv && guardadoFmv !== 'null') {
        fmv = parseInt(guardadoFmv);
    }
    
    if (corteHonor.length > 0 && !modoEleccion) {
        toggleModoEleccion();
    }
}

function compartirWhatsApp() {
    if (corteHonor.length === 0) {
        alert("Selecciona al menos a una candidata para tu quiniela.");
        return;
    }

    let texto = "👑 *Mi Quiniela para FMV 2026* 👑\n\n*Corte de Honor:*\n";
    
    corteHonor.forEach(id => {
        const c = candidatas.find(cand => cand.id === id);
        if (c && fmv !== id) {
            texto += `➖ ${c.nombre}\n`;
        }
    });

    if (fmv) {
        const cFmv = candidatas.find(cand => cand.id === fmv);
        texto += `\n🔥 *FALLERA MAYOR DE VALENCIA:*\n✨ ${cFmv.nombre} ✨\n`;
    }

    texto += "\n📍 #FallaMinistro #FMV2026\n_Calculado con la App de Probabilidad FMV_";

    const urlFormateada = encodeURIComponent(texto);
    window.open(`https://wa.me/?text=${urlFormateada}`, '_blank');
}

function descargarImagen() {
    if (corteHonor.length === 0) {
        alert("Añade candidatas a la corte antes de descargar.");
        return;
    }

    const zonaEleccion = document.getElementById('zona-eleccion');
    const botonesExportacion = document.getElementById('botones-exportacion');
    const btnEliminar = document.querySelectorAll('.btn-eliminar-corte');

    botonesExportacion.style.display = 'none';
    btnEliminar.forEach(btn => btn.style.display = 'none');

    html2canvas(zonaEleccion, {
        backgroundColor: "#ffffff",
        scale: 2 
    }).then(canvas => {
        const enlace = document.createElement('a');
        enlace.download = 'Quiniela_FMV_2026.png';
        enlace.href = canvas.toDataURL("image/png");
        enlace.click();

        botonesExportacion.style.display = 'flex';
        btnEliminar.forEach(btn => btn.style.display = 'flex');
    });
}

function reiniciarEleccion() {
    if(confirm("¿Estás seguro de que quieres borrar la selección actual?")) {
        corteHonor = [];
        fmv = null;
        guardarEstado();
        actualizarCuadroEleccion();
        renderizarTarjetas();
    }
}

window.onload = () => {
    inicializarFiltros();
    cargarEstado(); 
    actualizarCuadroEleccion();
    renderizarTarjetas();
};