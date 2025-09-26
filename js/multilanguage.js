class MultiLanguage {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'es';
        this.translations = {
            es: {
                // Navegación
                'nav.dashboard': 'Dashboard',
                'nav.calendar': 'Calendario',
                'nav.analytics': 'Analytics',
                'nav.payments': 'Pagos',
                'nav.notifications': 'Notificaciones',
                'nav.settings': 'Configuración',
                
                // Botones
                'btn.start_onboarding': 'Iniciar Onboarding',
                'btn.take_tour': 'Tomar Tour',
                'btn.previous': 'Anterior',
                'btn.next': 'Siguiente',
                'btn.day_view': 'Vista Día',
                'btn.week_view': 'Vista Semana',
                'btn.month_view': 'Vista Mes',
                'btn.advanced_mode': 'Modo Avanzado',
                'btn.simplified_mode': 'Modo Simplificado',
                
                // Onboarding
                'onboarding.title': 'Configuración Inicial',
                'onboarding.step1.title': 'Servicios base',
                'onboarding.step2.title': 'Horario y slots',
                'onboarding.step3.title': 'Recordatorios SMS',
                'onboarding.service1': 'Servicio 1',
                'onboarding.service2': 'Servicio 2',
                'onboarding.opening': 'Apertura',
                'onboarding.closing': 'Cierre',
                'onboarding.interval': 'Intervalo',
                'onboarding.template24h': 'Plantilla 24h',
                'onboarding.template2h': 'Plantilla 2h',
                'onboarding.finish': 'Finalizar ✓',
                
                // Tour
                'tour.step1.title': 'Calendario',
                'tour.step1.desc': 'Aquí puedes ver todas tus citas',
                'tour.step2.title': 'Configuración',
                'tour.step2.desc': 'Ajusta horarios y servicios',
                'tour.step3.title': 'Notificaciones',
                'tour.step3.desc': 'Configura recordatorios SMS',
                'tour.step4.title': 'Onboarding',
                'tour.step4.desc': 'Configuración inicial paso a paso',
                'tour.step5.title': 'Modo Avanzado',
                'tour.step5.desc': 'Activa funciones avanzadas',
                'tour.next': 'Siguiente',
                'tour.previous': 'Anterior',
                'tour.finish': 'Finalizar',
                'tour.skip': 'Saltar'
            },
            en: {
                'nav.dashboard': 'Dashboard',
                'nav.calendar': 'Calendar',
                'nav.analytics': 'Analytics',
                'nav.payments': 'Payments',
                'nav.notifications': 'Notifications',
                'nav.settings': 'Settings',
                
                'btn.start_onboarding': 'Start Onboarding',
                'btn.take_tour': 'Take Tour',
                'btn.previous': 'Previous',
                'btn.next': 'Next',
                'btn.day_view': 'Day View',
                'btn.week_view': 'Week View',
                'btn.month_view': 'Month View',
                'btn.advanced_mode': 'Advanced Mode',
                'btn.simplified_mode': 'Simplified Mode',
                
                'onboarding.title': 'Initial Setup',
                'onboarding.step1.title': 'Base services',
                'onboarding.step2.title': 'Schedule and slots',
                'onboarding.step3.title': 'SMS reminders',
                'onboarding.service1': 'Service 1',
                'onboarding.service2': 'Service 2',
                'onboarding.opening': 'Opening',
                'onboarding.closing': 'Closing',
                'onboarding.interval': 'Interval',
                'onboarding.template24h': '24h Template',
                'onboarding.template2h': '2h Template',
                'onboarding.finish': 'Finish ✓',
                
                'tour.step1.title': 'Calendar',
                'tour.step1.desc': 'View all your appointments here',
                'tour.step2.title': 'Settings',
                'tour.step2.desc': 'Adjust schedules and services',
                'tour.step3.title': 'Notifications',
                'tour.step3.desc': 'Configure SMS reminders',
                'tour.step4.title': 'Onboarding',
                'tour.step4.desc': 'Step-by-step initial setup',
                'tour.step5.title': 'Advanced Mode',
                'tour.step5.desc': 'Enable advanced features',
                'tour.next': 'Next',
                'tour.previous': 'Previous',
                'tour.finish': 'Finish',
                'tour.skip': 'Skip'
            },
            fr: {
                'nav.dashboard': 'Tableau de bord',
                'nav.calendar': 'Calendrier',
                'nav.analytics': 'Analytiques',
                'nav.payments': 'Paiements',
                'nav.notifications': 'Notifications',
                'nav.settings': 'Paramètres',
                
                'btn.start_onboarding': 'Commencer',
                'btn.take_tour': 'Faire le tour',
                'btn.previous': 'Précédent',
                'btn.next': 'Suivant',
                'btn.day_view': 'Vue Jour',
                'btn.week_view': 'Vue Semaine',
                'btn.month_view': 'Vue Mois',
                'btn.advanced_mode': 'Mode Avancé',
                'btn.simplified_mode': 'Mode Simplifié',
                
                'onboarding.title': 'Configuration Initiale',
                'onboarding.step1.title': 'Services de base',
                'onboarding.step2.title': 'Horaires et créneaux',
                'onboarding.step3.title': 'Rappels SMS',
                'onboarding.service1': 'Service 1',
                'onboarding.service2': 'Service 2',
                'onboarding.opening': 'Ouverture',
                'onboarding.closing': 'Fermeture',
                'onboarding.interval': 'Intervalle',
                'onboarding.template24h': 'Modèle 24h',
                'onboarding.template2h': 'Modèle 2h',
                'onboarding.finish': 'Terminer ✓',
                
                'tour.step1.title': 'Calendrier',
                'tour.step1.desc': 'Voir tous vos rendez-vous ici',
                'tour.step2.title': 'Paramètres',
                'tour.step2.desc': 'Ajuster horaires et services',
                'tour.step3.title': 'Notifications',
                'tour.step3.desc': 'Configurer rappels SMS',
                'tour.step4.title': 'Configuration',
                'tour.step4.desc': 'Configuration initiale étape par étape',
                'tour.step5.title': 'Mode Avancé',
                'tour.step5.desc': 'Activer fonctions avancées',
                'tour.next': 'Suivant',
                'tour.previous': 'Précédent',
                'tour.finish': 'Terminer',
                'tour.skip': 'Passer'
            },
            it: {
                'nav.dashboard': 'Dashboard',
                'nav.calendar': 'Calendario',
                'nav.analytics': 'Analisi',
                'nav.payments': 'Pagamenti',
                'nav.notifications': 'Notifiche',
                'nav.settings': 'Impostazioni',
                
                'btn.start_onboarding': 'Inizia',
                'btn.take_tour': 'Fai il tour',
                'btn.previous': 'Precedente',
                'btn.next': 'Successivo',
                'btn.day_view': 'Vista Giorno',
                'btn.week_view': 'Vista Settimana',
                'btn.month_view': 'Vista Mese',
                'btn.advanced_mode': 'Modalità Avanzata',
                'btn.simplified_mode': 'Modalità Semplificata',
                
                'onboarding.title': 'Configurazione Iniziale',
                'onboarding.step1.title': 'Servizi base',
                'onboarding.step2.title': 'Orari e slot',
                'onboarding.step3.title': 'Promemoria SMS',
                'onboarding.service1': 'Servizio 1',
                'onboarding.service2': 'Servizio 2',
                'onboarding.opening': 'Apertura',
                'onboarding.closing': 'Chiusura',
                'onboarding.interval': 'Intervallo',
                'onboarding.template24h': 'Modello 24h',
                'onboarding.template2h': 'Modello 2h',
                'onboarding.finish': 'Termina ✓',
                
                'tour.step1.title': 'Calendario',
                'tour.step1.desc': 'Vedi tutti i tuoi appuntamenti qui',
                'tour.step2.title': 'Impostazioni',
                'tour.step2.desc': 'Regola orari e servizi',
                'tour.step3.title': 'Notifiche',
                'tour.step3.desc': 'Configura promemoria SMS',
                'tour.step4.title': 'Configurazione',
                'tour.step4.desc': 'Configurazione iniziale passo dopo passo',
                'tour.step5.title': 'Modalità Avanzata',
                'tour.step5.desc': 'Attiva funzioni avanzate',
                'tour.next': 'Successivo',
                'tour.previous': 'Precedente',
                'tour.finish': 'Termina',
                'tour.skip': 'Salta'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupLanguageSelector();
        this.translatePage();
    }
    
    translate(key, params = {}) {
        let text = this.translations[this.currentLanguage][key] || key;
        
        // Replace parameters
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
        
        return text;
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.translatePage();
    }
    
    setupLanguageSelector() {
        // Wait for DOM to be ready
        if (!document.body) {
            setTimeout(() => this.setupLanguageSelector(), 100);
            return;
        }

        // Check if selector already exists
        if (document.getElementById('language-selector')) {
            return;
        }

        const selector = document.createElement('div');
        selector.id = 'language-selector';
            selector.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 8px;
            padding: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `;

        const select = document.createElement('select');
        select.style.cssText = `
            border: none;
            background: transparent;
                font-size: 14px;
            cursor: pointer;
            outline: none;
            `;
            
            const languages = [
            { code: 'es', name: '🇪🇸 ES' },
            { code: 'en', name: '🇬🇧 EN' },
            { code: 'fr', name: '🇫🇷 FR' },
            { code: 'it', name: '🇮🇹 IT' }
            ];
            
            languages.forEach(lang => {
                const option = document.createElement('option');
                option.value = lang.code;
            option.textContent = lang.name;
                if (lang.code === this.currentLanguage) {
                    option.selected = true;
                }
            select.appendChild(option);
            });
            
        select.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
            
        selector.appendChild(select);
            document.body.appendChild(selector);
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const text = this.translate(key);
            
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = text;
            } else if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });
    }
}

// Wait for DOM to be completely ready
function initMultiLanguage() {
    if (document.readyState === 'complete' && document.body) {
        window.multiLanguage = new MultiLanguage();
    } else {
        setTimeout(initMultiLanguage, 100);
    }
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMultiLanguage);
} else {
    initMultiLanguage();
}

// Fallback timeout
setTimeout(() => {
    if (!window.multiLanguage) {
        initMultiLanguage();
    }
}, 2000);

// Helper function for translations
function t(key, params = {}) {
    return window.multiLanguage ? window.multiLanguage.translate(key, params) : key;
}