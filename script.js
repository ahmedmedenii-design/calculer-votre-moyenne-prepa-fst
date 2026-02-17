// ======================== DONNÉES DES MATIÈRES ========================
const matieresData = {
    mpi: {
        s1: [
            { nom: "Algèbre 1", coef: 2, code: "alg1" },
            { nom: "Analyse 1", coef: 2, code: "ana1" },
            { nom: "Algorithmique 1", coef: 1.5, code: "algo1" },
            { nom: "Programmation 1", coef: 1.5, code: "prog1" },
            { nom: "Français 1", coef: 1, code: "fr1" },
            { nom: "Anglais 1", coef: 1, code: "ang1" },
            { nom: "Mécanique", coef: 1.5, code: "mec" },
            { nom: "Circuit Électrique", coef: 1.5, code: "circuit" },
            { nom: "Électrostatique", coef: 1.5, code: "electro" },
            { nom: "Optique", coef: 1.5, code: "optique" }
        ],
        s2: [
            { nom: "Algèbre 2", coef: 2, code: "alg2" },
            { nom: "Analyse 2", coef: 2, code: "ana2" },
            { nom: "Algorithmique 2", coef: 1.5, code: "algo2" },
            { nom: "Programmation 2", coef: 1, code: "prog2" },
            { nom: "Français 2", coef: 1, code: "fr2" },
            { nom: "Anglais 2", coef: 1, code: "ang2" },
            { nom: "Culture & Comp. Num.", coef: 1, code: "ccn" },
            { nom: "Mécanique Quantique", coef: 1, code: "mec_quant" },
            { nom: "Électronique", coef: 1, code: "electronique" },
            { nom: "Magnétostatique", coef: 1.5, code: "magnetostatique" },
            { nom: "Système Logique", coef: 2, code: "sl" }
        ]
    },
    mi: {
        s3: [
            { nom: "Algèbre 3", coef: 1.5, code: "alg3" },
            { nom: "Analyse 3", coef: 1.5, code: "ana3" },
            { nom: "Traitement du signal", coef: 2, code: "signal" },
            { nom: "Architecture Ordinateurs", coef: 1.5, code: "archi" },
            { nom: "Systèmes d'exploitation 1", coef: 1.5, code: "se1" },
            { nom: "POO", coef: 1, code: "poo" },
            { nom: "Atelier C++", coef: 1.5, code: "cpp" },
            { nom: "Développement Web", coef: 1, code: "web" },
            { nom: "BDD Fondamentaux", coef: 1, code: "bdd1" },
            { nom: "Logique formelle", coef: 1, code: "logique" },
            { nom: "Anglais 3", coef: 1, code: "ang3" }
        ],
        s4: [
            { nom: "Probabilités & Stats", coef: 2, code: "proba" },
            { nom: "Théorie des langages", coef: 2, code: "langages" },
            { nom: "Atelier Java", coef: 1, code: "java" },
            { nom: "Programmation Python", coef: 1, code: "python" },
            { nom: "Ingénierie des BDD", coef: 1.5, code: "bdd2" },
            { nom: "Conception SI", coef: 1.5, code: "csi" },
            { nom: "Transmission données", coef: 1, code: "trans" },
            { nom: "Réseaux locaux", coef: 1.5, code: "reseau" },
            { nom: "Systèmes d'exploitation 2", coef: 1.5, code: "se2" },
            { nom: "Anglais 4", coef: 1, code: "ang4" },
            { nom: "Français 4", coef: 1, code: "fr4" }
        ]
    },
    pi: {
        s3: [
            { nom: "Algèbre 3", coef: 1.5, code: "alg3" },
            { nom: "Analyse 3", coef: 1.5, code: "ana3" },
            { nom: "Traitement du signal", coef: 2, code: "signal" },
            { nom: "Architecture Ordinateurs", coef: 1.5, code: "archi" },
            { nom: "Systèmes d'exploitation 1", coef: 1.5, code: "se1" },
            { nom: "POO", coef: 1, code: "poo" },
            { nom: "Atelier C++", coef: 1.5, code: "cpp" },
            { nom: "Électronique analogique", coef: 1.5, code: "elec_ana" },
            { nom: "Physique quantique 2", coef: 1.5, code: "phys_quant2" },
            { nom: "Anglais 3", coef: 1, code: "ang3" }
        ],
        s4: [
            { nom: "Probabilités & Stats", coef: 2, code: "proba" },
            { nom: "Théorie des langages", coef: 2, code: "langages" },
            { nom: "Atelier Java", coef: 1, code: "java" },
            { nom: "Programmation Python", coef: 1, code: "python" },
            { nom: "Électronique numérique", coef: 1.5, code: "elec_num" },
            { nom: "Systèmes embarqués", coef: 1.5, code: "embarque" },
            { nom: "Traitement d'images", coef: 1.5, code: "image" },
            { nom: "Réseaux", coef: 1.5, code: "reseau" },
            { nom: "Anglais 4", coef: 1, code: "ang4" },
            { nom: "Français 4", coef: 1, code: "fr4" }
        ]
    }
};

// ======================== ÉTAT GLOBAL ========================
let notes = {
    mpi: { s1: {}, s2: {} },
    mi: { s3: {}, s4: {} },
    pi: { s3: {}, s4: {} }
};
let moyennes = {
    mpi: { s1: 0, s2: 0, annuelle: 0 },
    mi: { s3: 0, s4: 0, annuelle: 0 },
    pi: { s3: 0, s4: 0, annuelle: 0 }
};
let moyennesMatieres = {
    mpi: {}, mi: {}, pi: {}
};

// Variable pour stocker la moyenne de 1A saisie manuellement
let moyenne1AManuelle = null;

// ======================== FONCTIONS UTILITAIRES ========================
function nettoyerNoteTP(valeur) {
    if (valeur === '' || valeur === null) return '';
    return valeur.toString().replace(',', '.');
}

function validerNote(valeur, type) {
    if (type === 'tp' && (valeur === '' || valeur === null)) return { valide: true, nettoyee: '' };
    let val = (type === 'tp') ? parseFloat(nettoyerNoteTP(valeur)) : parseFloat(valeur);
    if (isNaN(val) && type === 'tp') return { valide: true, nettoyee: '' };
    if (isNaN(val) || val < 0 || val > 20) return { valide: false };
    return { valide: true, nettoyee: val };
}

// ======================== AFFICHAGE DES MATIÈRES ========================
function afficherMatieres(filiere, semestre) {
    const containerId = `${filiere}-matieres-${semestre}`;
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Conteneur ${containerId} introuvable`);
        return;
    }
    if (container.children.length > 0) return;

    const matieres = matieresData[filiere][semestre];
    if (!matieres) {
        console.error(`Pas de données pour ${filiere} ${semestre}`);
        return;
    }

    container.innerHTML = '';
    matieres.forEach((matiere, idx) => {
        if (!notes[filiere][semestre][idx]) {
            notes[filiere][semestre][idx] = { ds: 0, tp: '', ex: 0 };
        }
        const card = document.createElement('div');
        card.className = 'matiere-card';
        card.innerHTML = `
            <div class="matiere-header">
                <span class="matiere-name">${matiere.nom}</span>
                <span class="coefficient">Coef ${matiere.coef}</span>
            </div>
            <div class="input-group">
                <div class="input-field">
                    <label>DS</label>
                    <input type="number" min="0" max="20" step="0.1" class="ds-input" data-filiere="${filiere}" data-semestre="${semestre}" data-index="${idx}" value="${notes[filiere][semestre][idx].ds}">
                </div>
                <div class="input-field">
                    <label>TP</label>
                    <input type="text" class="tp-input" data-filiere="${filiere}" data-semestre="${semestre}" data-index="${idx}" placeholder="vide si pas TP" value="${notes[filiere][semestre][idx].tp}">
                    <div class="tp-hint">Optionnel</div>
                </div>
                <div class="input-field">
                    <label>Examen</label>
                    <input type="number" min="0" max="20" step="0.1" class="ex-input" data-filiere="${filiere}" data-semestre="${semestre}" data-index="${idx}" value="${notes[filiere][semestre][idx].ex}">
                </div>
            </div>
            <div class="matiere-result">
                Moyenne : <span class="matiere-moyenne" id="moy-${filiere}-${semestre}-${idx}">0.00</span>
            </div>
        `;
        container.appendChild(card);
    });

    container.querySelectorAll('.ds-input, .tp-input, .ex-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const fil = e.target.dataset.filiere;
            const sem = e.target.dataset.semestre;
            const idx = e.target.dataset.index;
            const type = e.target.classList.contains('ds-input') ? 'ds' : (e.target.classList.contains('tp-input') ? 'tp' : 'ex');
            let val = e.target.value;
            const validation = validerNote(val, type);
            if (!validation.valide) {
                e.target.classList.add('invalid');
            } else {
                e.target.classList.remove('invalid');
                if (type === 'tp') {
                    notes[fil][sem][idx][type] = val;
                } else {
                    notes[fil][sem][idx][type] = validation.nettoyee;
                }
                calculerMoyenneMatiere(fil, sem, idx);
            }
        });
    });

    matieres.forEach((_, idx) => calculerMoyenneMatiere(filiere, semestre, idx));
    console.log(`Matières affichées pour ${filiere} ${semestre}`);
}

function calculerMoyenneMatiere(filiere, semestre, index) {
    const matiere = matieresData[filiere][semestre][index];
    const note = notes[filiere][semestre][index];
    let tpValue = 0;
    if (note.tp && note.tp.toString().trim() !== '') {
        tpValue = parseFloat(nettoyerNoteTP(note.tp)) || 0;
    }
    let moyenne;
    if (note.tp && note.tp.toString().trim() !== '') {
        moyenne = (note.ds * 0.25) + (tpValue * 0.25) + (note.ex * 0.5);
    } else {
        moyenne = (note.ds * 0.3) + (note.ex * 0.7);
    }
    const el = document.getElementById(`moy-${filiere}-${semestre}-${index}`);
    if (el) el.textContent = moyenne.toFixed(2);
    if (!moyennesMatieres[filiere]) moyennesMatieres[filiere] = {};
    moyennesMatieres[filiere][matiere.code] = moyenne;
    return moyenne;
}

function verifierNotesSemestre(filiere, semestre) {
    const matieres = matieresData[filiere][semestre];
    for (let i = 0; i < matieres.length; i++) {
        const note = notes[filiere][semestre][i];
        if (!note) continue;
        if (note.ds < 0 || note.ds > 20) return { valide: false, message: `DS de ${matieres[i].nom} invalide` };
        if (note.ex < 0 || note.ex > 20) return { valide: false, message: `Examen de ${matieres[i].nom} invalide` };
        if (note.tp && note.tp.toString().trim() !== '') {
            const tpVal = parseFloat(nettoyerNoteTP(note.tp));
            if (isNaN(tpVal) || tpVal < 0 || tpVal > 20) return { valide: false, message: `TP de ${matieres[i].nom} invalide` };
        }
    }
    return { valide: true };
}

function calculerMoyenneSemestre(filiere, semestre) {
    const validation = verifierNotesSemestre(filiere, semestre);
    const msgDiv = document.getElementById(`${filiere}-validation-${semestre}`);
    if (!validation.valide) {
        if (msgDiv) {
            msgDiv.textContent = validation.message;
            msgDiv.className = 'validation-message error';
        }
        return false;
    }
    if (msgDiv) msgDiv.style.display = 'none';

    const matieres = matieresData[filiere][semestre];
    let sommePond = 0, sommeCoef = 0;
    for (let i = 0; i < matieres.length; i++) {
        const moy = calculerMoyenneMatiere(filiere, semestre, i);
        sommePond += moy * matieres[i].coef;
        sommeCoef += matieres[i].coef;
    }
    const moyenne = sommePond / sommeCoef;
    moyennes[filiere][semestre] = moyenne;
    document.getElementById(`${filiere}-moyenne-${semestre}`).textContent = moyenne.toFixed(2);
    if (msgDiv) {
        msgDiv.textContent = 'Moyenne calculée avec succès';
        msgDiv.className = 'validation-message success';
    }
    return true;
}

function reinitialiserSemestre(filiere, semestre) {
    const matieres = matieresData[filiere][semestre];
    matieres.forEach((_, idx) => {
        notes[filiere][semestre][idx] = { ds: 0, tp: '', ex: 0 };
        const dsInput = document.querySelector(`[data-filiere="${filiere}"][data-semestre="${semestre}"][data-index="${idx}"].ds-input`);
        const tpInput = document.querySelector(`[data-filiere="${filiere}"][data-semestre="${semestre}"][data-index="${idx}"].tp-input`);
        const exInput = document.querySelector(`[data-filiere="${filiere}"][data-semestre="${semestre}"][data-index="${idx}"].ex-input`);
        if (dsInput) dsInput.value = 0;
        if (tpInput) tpInput.value = '';
        if (exInput) exInput.value = 0;
        document.getElementById(`moy-${filiere}-${semestre}-${idx}`).textContent = '0.00';
    });
    moyennes[filiere][semestre] = 0;
    document.getElementById(`${filiere}-moyenne-${semestre}`).textContent = '0.00';
    const msgDiv = document.getElementById(`${filiere}-validation-${semestre}`);
    if (msgDiv) msgDiv.style.display = 'none';
}

// Fonction pour obtenir la moyenne de 1A (priorité à la saisie manuelle)
function getMoyenne1A() {
    if (moyenne1AManuelle !== null) {
        return moyenne1AManuelle;
    }
    return moyennes.mpi.annuelle;
}

// Mettre à jour l'affichage de la moyenne 1A
function updateMoyenne1ADisplay() {
    const moy1A = getMoyenne1A();
    const source = moyenne1AManuelle !== null ? 'manuelle' : 'calculée automatiquement';
    
    document.getElementById('currentMoyenne1ADisplay').textContent = moy1A.toFixed(2);
    document.getElementById('manualGradeInfo1A').innerHTML = 
        `Moyenne actuelle: <span style="font-weight:600;">${moy1A.toFixed(2)}</span> (${source})`;
    
    document.getElementById('currentMoyenne1ADisplay-PI').textContent = moy1A.toFixed(2);
    document.getElementById('manualGradeInfo1A-PI').innerHTML = 
        `Moyenne actuelle: <span style="font-weight:600;">${moy1A.toFixed(2)}</span> (${source})`;
}

// ======================== INITIALISATION ========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chargement initial...');
    afficherMatieres('mpi', 's1');
    afficherMatieres('mpi', 's2');
    afficherMatieres('mi', 's3');
    afficherMatieres('mi', 's4');
    afficherMatieres('pi', 's3');
    afficherMatieres('pi', 's4');

    // Initialiser l'affichage de la moyenne 1A
    updateMoyenne1ADisplay();

    // Navigation filières
    document.querySelectorAll('.filiere-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filiere-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filiere = tab.dataset.filiere;
            document.querySelectorAll('.filiere-content').forEach(c => c.classList.remove('active'));
            document.getElementById(`${filiere}-content`).classList.add('active');
            const semActif = document.querySelector(`#${filiere}-content .semester-tab.active`)?.dataset.semester || 's1';
            const containerId = `${filiere}-matieres-${semActif}`;
            if (document.getElementById(containerId)?.children.length === 0) {
                afficherMatieres(filiere, semActif);
            }
            updateMoyenne1ADisplay();
        });
    });

    // Navigation semestres
    document.querySelectorAll('.semester-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const parent = tab.closest('.filiere-content');
            if (!parent) return;
            parent.querySelectorAll('.semester-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const sem = tab.dataset.semester;
            const filiere = parent.id.replace('-content', '');
            parent.querySelectorAll('.semester-content').forEach(c => c.classList.remove('active'));
            const target = document.getElementById(`${filiere}-${sem}`);
            if (target) {
                target.classList.add('active');
                if (sem.startsWith('s')) {
                    const containerId = `${filiere}-matieres-${sem}`;
                    if (document.getElementById(containerId)?.children.length === 0) {
                        afficherMatieres(filiere, sem);
                    }
                }
            }
        });
    });

    // Boutons calculer
    document.querySelectorAll('.calculate-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filiere = e.target.dataset.filiere;
            const semestre = e.target.dataset.semestre;
            calculerMoyenneSemestre(filiere, semestre);
            if (filiere === 'mpi' && (semestre === 's1' || semestre === 's2')) {
                // Si on calcule un semestre MPI, on réinitialise la moyenne manuelle
                moyenne1AManuelle = null;
                updateMoyenne1ADisplay();
            }
        });
    });

    // Boutons reset
    document.querySelectorAll('.reset-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filiere = e.target.dataset.filiere;
            const semestre = e.target.dataset.semestre;
            reinitialiserSemestre(filiere, semestre);
        });
    });

    // Calcul annuel MPI
    document.getElementById('mpi-calc-annuel').addEventListener('click', () => {
        const msg = document.getElementById('mpi-validation-annuel');
        if (moyennes.mpi.s1 === 0 || moyennes.mpi.s2 === 0) {
            msg.textContent = 'Calculez d’abord les deux semestres.';
            msg.className = 'validation-message error';
            return;
        }
        moyennes.mpi.annuelle = (moyennes.mpi.s1 + moyennes.mpi.s2) / 2;
        document.getElementById('mpi-moyenne-annuelle').textContent = moyennes.mpi.annuelle.toFixed(2);
        msg.textContent = 'Moyenne annuelle calculée.';
        msg.className = 'validation-message success';
        
        // Réinitialiser la moyenne manuelle car on a une nouvelle moyenne calculée
        moyenne1AManuelle = null;
        updateMoyenne1ADisplay();
    });

    // Calcul scores MPI
    document.getElementById('mpi-calc-scores').addEventListener('click', () => {
        const msg = document.getElementById('mpi-validation-scores');
        if (moyennes.mpi.annuelle === 0) {
            msg.textContent = 'Calculez d’abord la moyenne annuelle.';
            msg.className = 'validation-message error';
            return;
        }
        const bonus = document.getElementById('mpi-bonus').checked ? 0.5 : 0;
        const moyMaths = ( (moyennesMatieres.mpi.alg1||0) + (moyennesMatieres.mpi.ana1||0) + (moyennesMatieres.mpi.alg2||0) + (moyennesMatieres.mpi.ana2||0) ) / 4;
        const moyInfo = ( (moyennesMatieres.mpi.algo1||0) + (moyennesMatieres.mpi.prog1||0) + (moyennesMatieres.mpi.algo2||0) + (moyennesMatieres.mpi.prog2||0) ) / 4;
        const moyPh = ( (moyennesMatieres.mpi.optique||0) + (moyennesMatieres.mpi.mec||0) + (moyennesMatieres.mpi.electro||0) + (moyennesMatieres.mpi.circuit||0) + (moyennesMatieres.mpi.magnetostatique||0) + (moyennesMatieres.mpi.mec_quant||0) + (moyennesMatieres.mpi.electronique||0) + (moyennesMatieres.mpi.sl||0) ) / 8;
        const moyLangues = ( (moyennesMatieres.mpi.fr1||0) + (moyennesMatieres.mpi.ang1||0) + (moyennesMatieres.mpi.fr2||0) + (moyennesMatieres.mpi.ang2||0) ) / 4;
        const scoreMI = 4 * (moyennes.mpi.annuelle + bonus) + 2 * moyMaths + 2 * moyInfo + moyLangues;
        const scorePI = 4 * moyennes.mpi.annuelle + 2 * moyPh + 2 * moyInfo + moyLangues;
        document.getElementById('mpi-score-mi').textContent = scoreMI.toFixed(2);
        document.getElementById('mpi-score-pi').textContent = scorePI.toFixed(2);
        document.getElementById('mpi-detail-mi').innerHTML = `MG: ${moyennes.mpi.annuelle.toFixed(2)} | Maths: ${moyMaths.toFixed(2)} | Info: ${moyInfo.toFixed(2)} | Langues: ${moyLangues.toFixed(2)} | Bonus: ${bonus}`;
        document.getElementById('mpi-detail-pi').innerHTML = `MG: ${moyennes.mpi.annuelle.toFixed(2)} | Physique: ${moyPh.toFixed(2)} | Info: ${moyInfo.toFixed(2)} | Langues: ${moyLangues.toFixed(2)}`;
        msg.textContent = 'Scores calculés.';
        msg.className = 'validation-message success';
    });

    // Application de la moyenne manuelle pour MI
    document.getElementById('applyManualMoyenne1A').addEventListener('click', () => {
        const input = document.getElementById('manualMoyenne1A');
        const valeur = parseFloat(input.value);
        if (isNaN(valeur) || valeur < 0 || valeur > 20) {
            alert('Veuillez entrer une valeur valide entre 0 et 20');
            return;
        }
        moyenne1AManuelle = valeur;
        updateMoyenne1ADisplay();
        input.value = '';
    });

    // Application de la moyenne manuelle pour PI
    document.getElementById('applyManualMoyenne1A-PI').addEventListener('click', () => {
        const input = document.getElementById('manualMoyenne1A-PI');
        const valeur = parseFloat(input.value);
        if (isNaN(valeur) || valeur < 0 || valeur > 20) {
            alert('Veuillez entrer une valeur valide entre 0 et 20');
            return;
        }
        moyenne1AManuelle = valeur;
        updateMoyenne1ADisplay();
        input.value = '';
    });

    // Calcul annuel MI
    document.getElementById('mi-calc-annuel').addEventListener('click', () => {
        const msg = document.getElementById('mi-validation-annuel');
        if (moyennes.mi.s3 === 0 || moyennes.mi.s4 === 0) {
            msg.textContent = 'Calculez d’abord S3 et S4.';
            msg.className = 'validation-message error';
            return;
        }
        moyennes.mi.annuelle = (moyennes.mi.s3 + moyennes.mi.s4) / 2;
        document.getElementById('mi-moyenne-2a').textContent = moyennes.mi.annuelle.toFixed(2);
        msg.textContent = 'Moyenne 2A calculée.';
        msg.className = 'validation-message success';
    });

    // Calcul scores MI
    document.getElementById('mi-calc-scores').addEventListener('click', () => {
        const msg = document.getElementById('mi-validation-scores');
        const moy1A = getMoyenne1A();
        if (moyennes.mi.annuelle === 0) {
            msg.textContent = 'Calculez d’abord la moyenne 2A.';
            msg.className = 'validation-message error';
            return;
        }
        if (moy1A === 0 && moyenne1AManuelle === null) {
            msg.textContent = 'Veuillez calculer la moyenne 1A ou la saisir manuellement.';
            msg.className = 'validation-message error';
            return;
        }
        const bonus = document.getElementById('mi-bonus').checked ? 0.5 : 0;
        const malus = document.getElementById('mi-malus').checked ? -1 : 0;
        const scoreCI = (2 * (moyennes.mi.annuelle + bonus) + moy1A + bonus) / 3 + malus;
        
        // Calculs simplifiés pour l'exemple
        document.getElementById('mi-score-glsi').textContent = (scoreCI * 4).toFixed(2);
        document.getElementById('mi-score-ds').textContent = (scoreCI * 3.8).toFixed(2);
        document.getElementById('mi-score-isi').textContent = (scoreCI * 3.9).toFixed(2);
        msg.textContent = `Scores MI calculés (moyenne 1A: ${moy1A.toFixed(2)})`;
        msg.className = 'validation-message success';
    });

    // Calcul annuel PI
    document.getElementById('pi-calc-annuel').addEventListener('click', () => {
        const msg = document.getElementById('pi-validation-annuel');
        if (moyennes.pi.s3 === 0 || moyennes.pi.s4 === 0) {
            msg.textContent = 'Calculez d’abord S3 et S4.';
            msg.className = 'validation-message error';
            return;
        }
        moyennes.pi.annuelle = (moyennes.pi.s3 + moyennes.pi.s4) / 2;
        document.getElementById('pi-moyenne-2a').textContent = moyennes.pi.annuelle.toFixed(2);
        msg.textContent = 'Moyenne 2A calculée.';
        msg.className = 'validation-message success';
    });

    // Calcul scores PI
    document.getElementById('pi-calc-scores').addEventListener('click', () => {
        const msg = document.getElementById('pi-validation-scores');
        const moy1A = getMoyenne1A();
        if (moyennes.pi.annuelle === 0) {
            msg.textContent = 'Calculez d’abord la moyenne 2A.';
            msg.className = 'validation-message error';
            return;
        }
        if (moy1A === 0 && moyenne1AManuelle === null) {
            msg.textContent = 'Veuillez calculer la moyenne 1A ou la saisir manuellement.';
            msg.className = 'validation-message error';
            return;
        }
        const bonus = document.getElementById('pi-bonus').checked ? 0.5 : 0;
        const malus = document.getElementById('pi-malus').checked ? -1 : 0;
        const scoreCI = (2 * (moyennes.pi.annuelle + bonus) + moy1A + bonus) / 3 + malus;
        
        document.getElementById('pi-score-ee').textContent = (scoreCI * 4.2).toFixed(2);
        document.getElementById('pi-score-gpmn').textContent = (scoreCI * 4.0).toFixed(2);
        msg.textContent = `Scores PI calculés (moyenne 1A: ${moy1A.toFixed(2)})`;
        msg.className = 'validation-message success';
    });

    // Mode sombre
    const themeToggle = document.getElementById('themeToggle');
    const themeText = document.getElementById('themeText');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span id="themeText">Mode clair</span>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span id="themeText">Mode sombre</span>';
        }
    });
});
