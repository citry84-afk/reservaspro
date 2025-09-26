// Sistema Multi-idioma para ReservasPro
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
                'nav.settings': 'Configuración',
                'nav.notifications': 'Notificaciones',
                'nav.pwa': 'PWA',
                'nav.ai': 'IA Scheduler',
                
                // Botones
                'btn.save': 'Guardar',
                'btn.cancel': 'Cancelar',
                'btn.delete': 'Eliminar',
                'btn.edit': 'Editar',
                'btn.add': 'Agregar',
                'btn.close': 'Cerrar',
                'btn.confirm': 'Confirmar',
                'btn.export': 'Exportar',
                'btn.import': 'Importar',
                'btn.refresh': 'Actualizar',
                'btn.search': 'Buscar',
                'btn.filter': 'Filtrar',
                'btn.reset': 'Restablecer',
                'btn.start_onboarding': 'Iniciar Onboarding',
                'btn.take_tour': 'Tomar Tour',
                'btn.previous': 'Anterior',
                'btn.next': 'Siguiente',
                'btn.day_view': 'Día',
                'btn.week_view': 'Semana',
                'btn.month_view': 'Mes',
                'btn.advanced_mode': 'Modo Avanzado',
                'btn.simplified_mode': 'Modo Simplificado',
                
                // Estados
                'status.pending': 'Pendiente',
                'status.confirmed': 'Confirmada',
                'status.cancelled': 'Cancelada',
                'status.completed': 'Completada',
                'status.active': 'Activo',
                'status.inactive': 'Inactivo',
                'status.enabled': 'Habilitado',
                'status.disabled': 'Deshabilitado',
                
                // Servicios
                'service.cut': 'Corte',
                'service.color': 'Tinte',
                'service.highlights': 'Mechas',
                'service.treatment': 'Tratamiento',
                'service.other': 'Otro',
                
                // Días de la semana
                'day.monday': 'Lunes',
                'day.tuesday': 'Martes',
                'day.wednesday': 'Miércoles',
                'day.thursday': 'Jueves',
                'day.friday': 'Viernes',
                'day.saturday': 'Sábado',
                'day.sunday': 'Domingo',
                
                // Meses
                'month.january': 'Enero',
                'month.february': 'Febrero',
                'month.march': 'Marzo',
                'month.april': 'Abril',
                'month.may': 'Mayo',
                'month.june': 'Junio',
                'month.july': 'Julio',
                'month.august': 'Agosto',
                'month.september': 'Septiembre',
                'month.october': 'Octubre',
                'month.november': 'Noviembre',
                'month.december': 'Diciembre',
                
                // Mensajes
                'msg.success': 'Operación exitosa',
                'msg.error': 'Error en la operación',
                'msg.warning': 'Advertencia',
                'msg.info': 'Información',
                'msg.loading': 'Cargando...',
                'msg.saving': 'Guardando...',
                'msg.deleting': 'Eliminando...',
                'msg.confirm_delete': '¿Estás seguro de que quieres eliminar este elemento?',
                'msg.unsaved_changes': 'Tienes cambios sin guardar. ¿Quieres continuar?',
                
                // Formularios
                'form.client_name': 'Nombre del Cliente',
                'form.client_phone': 'Teléfono',
                'form.client_email': 'Email',
                'form.service': 'Servicio',
                'form.date': 'Fecha',
                'form.time': 'Hora',
                'form.duration': 'Duración',
                'form.notes': 'Notas',
                'form.required': 'Campo requerido',
                'form.invalid_email': 'Email inválido',
                'form.invalid_phone': 'Teléfono inválido',
                
                // Analytics
                'analytics.total_bookings': 'Reservas Totales',
                'analytics.total_revenue': 'Ingresos Totales',
                'analytics.conversion_rate': 'Tasa de Conversión',
                'analytics.unique_clients': 'Clientes Únicos',
                'analytics.avg_duration': 'Duración Promedio',
                'analytics.satisfaction': 'Satisfacción',
                
                // Pagos
                'payment.stripe': 'Stripe',
                'payment.paypal': 'PayPal',
                'payment.cash': 'Efectivo',
                'payment.card': 'Tarjeta',
                'payment.amount': 'Cantidad',
                'payment.status': 'Estado del Pago',
                'payment.method': 'Método de Pago',
                
                // IA
                'ai.analyze_patterns': 'Analizar Patrones',
                'ai.optimize_schedule': 'Optimizar Horarios',
                'ai.predict_demand': 'Predecir Demanda',
                'ai.optimize_pricing': 'Optimizar Precios',
                'ai.segment_clients': 'Segmentar Clientes',
                'ai.auto_scheduling': 'Auto-Programación',
                
                // PWA
                'pwa.install': 'Instalar App',
                'pwa.notifications': 'Notificaciones',
                'pwa.offline': 'Modo Offline',
                'pwa.sync': 'Sincronización',
                'pwa.shortcuts': 'Accesos Rápidos',
                'pwa.background_sync': 'Sincronización en Segundo Plano',
                'pwa.security': 'Seguridad',
                
                // Configuración
                'config.language': 'Idioma',
                'config.theme': 'Tema',
                'config.notifications': 'Notificaciones',
                'config.privacy': 'Privacidad',
                'config.backup': 'Respaldo',
                'config.export': 'Exportar',
                'config.import': 'Importar'
            },
            
            en: {
                // Navigation
                'nav.dashboard': 'Dashboard',
                'nav.calendar': 'Calendar',
                'nav.analytics': 'Analytics',
                'nav.payments': 'Payments',
                'nav.settings': 'Settings',
                'nav.notifications': 'Notifications',
                'nav.pwa': 'PWA',
                'nav.ai': 'AI Scheduler',
                
                // Buttons
                'btn.save': 'Save',
                'btn.cancel': 'Cancel',
                'btn.delete': 'Delete',
                'btn.edit': 'Edit',
                'btn.add': 'Add',
                'btn.close': 'Close',
                'btn.confirm': 'Confirm',
                'btn.export': 'Export',
                'btn.import': 'Import',
                'btn.refresh': 'Refresh',
                'btn.search': 'Search',
                'btn.filter': 'Filter',
                'btn.reset': 'Reset',
                'btn.start_onboarding': 'Start Onboarding',
                'btn.take_tour': 'Take Tour',
                'btn.previous': 'Previous',
                'btn.next': 'Next',
                'btn.day_view': 'Day',
                'btn.week_view': 'Week',
                'btn.month_view': 'Month',
                'btn.advanced_mode': 'Advanced Mode',
                'btn.simplified_mode': 'Simplified Mode',
                
                // States
                'status.pending': 'Pending',
                'status.confirmed': 'Confirmed',
                'status.cancelled': 'Cancelled',
                'status.completed': 'Completed',
                'status.active': 'Active',
                'status.inactive': 'Inactive',
                'status.enabled': 'Enabled',
                'status.disabled': 'Disabled',
                
                // Services
                'service.cut': 'Cut',
                'service.color': 'Color',
                'service.highlights': 'Highlights',
                'service.treatment': 'Treatment',
                'service.other': 'Other',
                
                // Days of the week
                'day.monday': 'Monday',
                'day.tuesday': 'Tuesday',
                'day.wednesday': 'Wednesday',
                'day.thursday': 'Thursday',
                'day.friday': 'Friday',
                'day.saturday': 'Saturday',
                'day.sunday': 'Sunday',
                
                // Months
                'month.january': 'January',
                'month.february': 'February',
                'month.march': 'March',
                'month.april': 'April',
                'month.may': 'May',
                'month.june': 'June',
                'month.july': 'July',
                'month.august': 'August',
                'month.september': 'September',
                'month.october': 'October',
                'month.november': 'November',
                'month.december': 'December',
                
                // Messages
                'msg.success': 'Operation successful',
                'msg.error': 'Operation error',
                'msg.warning': 'Warning',
                'msg.info': 'Information',
                'msg.loading': 'Loading...',
                'msg.saving': 'Saving...',
                'msg.deleting': 'Deleting...',
                'msg.confirm_delete': 'Are you sure you want to delete this item?',
                'msg.unsaved_changes': 'You have unsaved changes. Do you want to continue?',
                
                // Forms
                'form.client_name': 'Client Name',
                'form.client_phone': 'Phone',
                'form.client_email': 'Email',
                'form.service': 'Service',
                'form.date': 'Date',
                'form.time': 'Time',
                'form.duration': 'Duration',
                'form.notes': 'Notes',
                'form.required': 'Required field',
                'form.invalid_email': 'Invalid email',
                'form.invalid_phone': 'Invalid phone',
                
                // Analytics
                'analytics.total_bookings': 'Total Bookings',
                'analytics.total_revenue': 'Total Revenue',
                'analytics.conversion_rate': 'Conversion Rate',
                'analytics.unique_clients': 'Unique Clients',
                'analytics.avg_duration': 'Average Duration',
                'analytics.satisfaction': 'Satisfaction',
                
                // Payments
                'payment.stripe': 'Stripe',
                'payment.paypal': 'PayPal',
                'payment.cash': 'Cash',
                'payment.card': 'Card',
                'payment.amount': 'Amount',
                'payment.status': 'Payment Status',
                'payment.method': 'Payment Method',
                
                // AI
                'ai.analyze_patterns': 'Analyze Patterns',
                'ai.optimize_schedule': 'Optimize Schedule',
                'ai.predict_demand': 'Predict Demand',
                'ai.optimize_pricing': 'Optimize Pricing',
                'ai.segment_clients': 'Segment Clients',
                'ai.auto_scheduling': 'Auto Scheduling',
                
                // PWA
                'pwa.install': 'Install App',
                'pwa.notifications': 'Notifications',
                'pwa.offline': 'Offline Mode',
                'pwa.sync': 'Sync',
                'pwa.shortcuts': 'Shortcuts',
                'pwa.background_sync': 'Background Sync',
                'pwa.security': 'Security',
                
                // Configuration
                'config.language': 'Language',
                'config.theme': 'Theme',
                'config.notifications': 'Notifications',
                'config.privacy': 'Privacy',
                'config.backup': 'Backup',
                'config.export': 'Export',
                'config.import': 'Import'
            },
            
            fr: {
                // Navigation
                'nav.dashboard': 'Tableau de bord',
                'nav.calendar': 'Calendrier',
                'nav.analytics': 'Analytiques',
                'nav.payments': 'Paiements',
                'nav.settings': 'Paramètres',
                'nav.notifications': 'Notifications',
                'nav.pwa': 'PWA',
                'nav.ai': 'Planificateur IA',
                
                // Buttons
                'btn.save': 'Enregistrer',
                'btn.cancel': 'Annuler',
                'btn.delete': 'Supprimer',
                'btn.edit': 'Modifier',
                'btn.add': 'Ajouter',
                'btn.close': 'Fermer',
                'btn.confirm': 'Confirmer',
                'btn.export': 'Exporter',
                'btn.import': 'Importer',
                'btn.refresh': 'Actualiser',
                'btn.search': 'Rechercher',
                'btn.filter': 'Filtrer',
                'btn.reset': 'Réinitialiser',
                'btn.start_onboarding': 'Démarrer Onboarding',
                'btn.take_tour': 'Faire le Tour',
                'btn.previous': 'Précédent',
                'btn.next': 'Suivant',
                'btn.day_view': 'Jour',
                'btn.week_view': 'Semaine',
                'btn.month_view': 'Mois',
                'btn.advanced_mode': 'Mode Avancé',
                'btn.simplified_mode': 'Mode Simplifié',
                
                // States
                'status.pending': 'En attente',
                'status.confirmed': 'Confirmé',
                'status.cancelled': 'Annulé',
                'status.completed': 'Terminé',
                'status.active': 'Actif',
                'status.inactive': 'Inactif',
                'status.enabled': 'Activé',
                'status.disabled': 'Désactivé',
                
                // Services
                'service.cut': 'Coupe',
                'service.color': 'Couleur',
                'service.highlights': 'Mèches',
                'service.treatment': 'Traitement',
                'service.other': 'Autre',
                
                // Days of the week
                'day.monday': 'Lundi',
                'day.tuesday': 'Mardi',
                'day.wednesday': 'Mercredi',
                'day.thursday': 'Jeudi',
                'day.friday': 'Vendredi',
                'day.saturday': 'Samedi',
                'day.sunday': 'Dimanche',
                
                // Months
                'month.january': 'Janvier',
                'month.february': 'Février',
                'month.march': 'Mars',
                'month.april': 'Avril',
                'month.may': 'Mai',
                'month.june': 'Juin',
                'month.july': 'Juillet',
                'month.august': 'Août',
                'month.september': 'Septembre',
                'month.october': 'Octobre',
                'month.november': 'Novembre',
                'month.december': 'Décembre',
                
                // Messages
                'msg.success': 'Opération réussie',
                'msg.error': 'Erreur d\'opération',
                'msg.warning': 'Avertissement',
                'msg.info': 'Information',
                'msg.loading': 'Chargement...',
                'msg.saving': 'Enregistrement...',
                'msg.deleting': 'Suppression...',
                'msg.confirm_delete': 'Êtes-vous sûr de vouloir supprimer cet élément?',
                'msg.unsaved_changes': 'Vous avez des modifications non sauvegardées. Voulez-vous continuer?',
                
                // Forms
                'form.client_name': 'Nom du client',
                'form.client_phone': 'Téléphone',
                'form.client_email': 'Email',
                'form.service': 'Service',
                'form.date': 'Date',
                'form.time': 'Heure',
                'form.duration': 'Durée',
                'form.notes': 'Notes',
                'form.required': 'Champ requis',
                'form.invalid_email': 'Email invalide',
                'form.invalid_phone': 'Téléphone invalide',
                
                // Analytics
                'analytics.total_bookings': 'Réservations totales',
                'analytics.total_revenue': 'Revenus totaux',
                'analytics.conversion_rate': 'Taux de conversion',
                'analytics.unique_clients': 'Clients uniques',
                'analytics.avg_duration': 'Durée moyenne',
                'analytics.satisfaction': 'Satisfaction',
                
                // Payments
                'payment.stripe': 'Stripe',
                'payment.paypal': 'PayPal',
                'payment.cash': 'Espèces',
                'payment.card': 'Carte',
                'payment.amount': 'Montant',
                'payment.status': 'Statut du paiement',
                'payment.method': 'Méthode de paiement',
                
                // AI
                'ai.analyze_patterns': 'Analyser les modèles',
                'ai.optimize_schedule': 'Optimiser l\'horaire',
                'ai.predict_demand': 'Prédire la demande',
                'ai.optimize_pricing': 'Optimiser les prix',
                'ai.segment_clients': 'Segmenter les clients',
                'ai.auto_scheduling': 'Planification automatique',
                
                // PWA
                'pwa.install': 'Installer l\'app',
                'pwa.notifications': 'Notifications',
                'pwa.offline': 'Mode hors ligne',
                'pwa.sync': 'Synchronisation',
                'pwa.shortcuts': 'Raccourcis',
                'pwa.background_sync': 'Sync en arrière-plan',
                'pwa.security': 'Sécurité',
                
                // Configuration
                'config.language': 'Langue',
                'config.theme': 'Thème',
                'config.notifications': 'Notifications',
                'config.privacy': 'Confidentialité',
                'config.backup': 'Sauvegarde',
                'config.export': 'Exporter',
                'config.import': 'Importer'
            },
            
            it: {
                // Navigation
                'nav.dashboard': 'Dashboard',
                'nav.calendar': 'Calendario',
                'nav.analytics': 'Analytics',
                'nav.payments': 'Pagamenti',
                'nav.settings': 'Impostazioni',
                'nav.notifications': 'Notifiche',
                'nav.pwa': 'PWA',
                'nav.ai': 'Pianificatore IA',
                
                // Buttons
                'btn.save': 'Salva',
                'btn.cancel': 'Annulla',
                'btn.delete': 'Elimina',
                'btn.edit': 'Modifica',
                'btn.add': 'Aggiungi',
                'btn.close': 'Chiudi',
                'btn.confirm': 'Conferma',
                'btn.export': 'Esporta',
                'btn.import': 'Importa',
                'btn.refresh': 'Aggiorna',
                'btn.search': 'Cerca',
                'btn.filter': 'Filtra',
                'btn.reset': 'Ripristina',
                'btn.start_onboarding': 'Inizia Onboarding',
                'btn.take_tour': 'Fai il Tour',
                'btn.previous': 'Precedente',
                'btn.next': 'Successivo',
                'btn.day_view': 'Giorno',
                'btn.week_view': 'Settimana',
                'btn.month_view': 'Mese',
                'btn.advanced_mode': 'Modalità Avanzata',
                'btn.simplified_mode': 'Modalità Semplificata',
                
                // States
                'status.pending': 'In attesa',
                'status.confirmed': 'Confermato',
                'status.cancelled': 'Annullato',
                'status.completed': 'Completato',
                'status.active': 'Attivo',
                'status.inactive': 'Inattivo',
                'status.enabled': 'Abilitato',
                'status.disabled': 'Disabilitato',
                
                // Services
                'service.cut': 'Taglio',
                'service.color': 'Colore',
                'service.highlights': 'Mechas',
                'service.treatment': 'Trattamento',
                'service.other': 'Altro',
                
                // Days of the week
                'day.monday': 'Lunedì',
                'day.tuesday': 'Martedì',
                'day.wednesday': 'Mercoledì',
                'day.thursday': 'Giovedì',
                'day.friday': 'Venerdì',
                'day.saturday': 'Sabato',
                'day.sunday': 'Domenica',
                
                // Months
                'month.january': 'Gennaio',
                'month.february': 'Febbraio',
                'month.march': 'Marzo',
                'month.april': 'Aprile',
                'month.may': 'Maggio',
                'month.june': 'Giugno',
                'month.july': 'Luglio',
                'month.august': 'Agosto',
                'month.september': 'Settembre',
                'month.october': 'Ottobre',
                'month.november': 'Novembre',
                'month.december': 'Dicembre',
                
                // Messages
                'msg.success': 'Operazione riuscita',
                'msg.error': 'Errore nell\'operazione',
                'msg.warning': 'Avviso',
                'msg.info': 'Informazione',
                'msg.loading': 'Caricamento...',
                'msg.saving': 'Salvataggio...',
                'msg.deleting': 'Eliminazione...',
                'msg.confirm_delete': 'Sei sicuro di voler eliminare questo elemento?',
                'msg.unsaved_changes': 'Hai modifiche non salvate. Vuoi continuare?',
                
                // Forms
                'form.client_name': 'Nome del cliente',
                'form.client_phone': 'Telefono',
                'form.client_email': 'Email',
                'form.service': 'Servizio',
                'form.date': 'Data',
                'form.time': 'Ora',
                'form.duration': 'Durata',
                'form.notes': 'Note',
                'form.required': 'Campo richiesto',
                'form.invalid_email': 'Email non valida',
                'form.invalid_phone': 'Telefono non valido',
                
                // Analytics
                'analytics.total_bookings': 'Prenotazioni totali',
                'analytics.total_revenue': 'Ricavi totali',
                'analytics.conversion_rate': 'Tasso di conversione',
                'analytics.unique_clients': 'Clienti unici',
                'analytics.avg_duration': 'Durata media',
                'analytics.satisfaction': 'Soddisfazione',
                
                // Payments
                'payment.stripe': 'Stripe',
                'payment.paypal': 'PayPal',
                'payment.cash': 'Contanti',
                'payment.card': 'Carta',
                'payment.amount': 'Importo',
                'payment.status': 'Stato del pagamento',
                'payment.method': 'Metodo di pagamento',
                
                // AI
                'ai.analyze_patterns': 'Analizza modelli',
                'ai.optimize_schedule': 'Ottimizza orario',
                'ai.predict_demand': 'Prevedi domanda',
                'ai.optimize_pricing': 'Ottimizza prezzi',
                'ai.segment_clients': 'Segmenta clienti',
                'ai.auto_scheduling': 'Pianificazione automatica',
                
                // PWA
                'pwa.install': 'Installa app',
                'pwa.notifications': 'Notifiche',
                'pwa.offline': 'Modalità offline',
                'pwa.sync': 'Sincronizzazione',
                'pwa.shortcuts': 'Scorciatoie',
                'pwa.background_sync': 'Sync in background',
                'pwa.security': 'Sicurezza',
                
                // Configuration
                'config.language': 'Lingua',
                'config.theme': 'Tema',
                'config.notifications': 'Notifiche',
                'config.privacy': 'Privacy',
                'config.backup': 'Backup',
                'config.export': 'Esporta',
                'config.import': 'Importa'
            }
        };
        
        this.init();
    }
    
    init() {
        this.loadLanguage();
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupLanguageSelector();
                this.translatePage();
            });
        } else {
            this.setupLanguageSelector();
            this.translatePage();
        }
    }
    
    loadLanguage() {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else {
            // Detectar idioma del navegador
            const browserLanguage = navigator.language.split('-')[0];
            if (this.translations[browserLanguage]) {
                this.currentLanguage = browserLanguage;
            }
        }
    }
    
    setupLanguageSelector() {
        // Crear selector de idioma si no existe
        if (!document.getElementById('languageSelector')) {
            const selector = document.createElement('select');
            selector.id = 'languageSelector';
            selector.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.9);
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 5px 10px;
                font-size: 14px;
            `;
            
            const languages = [
                { code: 'es', name: 'Español', flag: '🇪🇸' },
                { code: 'en', name: 'English', flag: '🇺🇸' },
                { code: 'fr', name: 'Français', flag: '🇫🇷' },
                { code: 'it', name: 'Italiano', flag: '🇮🇹' }
            ];
            
            languages.forEach(lang => {
                const option = document.createElement('option');
                option.value = lang.code;
                option.textContent = `${lang.flag} ${lang.name}`;
                if (lang.code === this.currentLanguage) {
                    option.selected = true;
                }
                selector.appendChild(option);
            });
            
            selector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
            
            document.body.appendChild(selector);
        }
    }
    
    setLanguage(languageCode) {
        if (this.translations[languageCode]) {
            this.currentLanguage = languageCode;
            localStorage.setItem('language', languageCode);
            this.translatePage();
            
            // Notificar cambio de idioma
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: languageCode }
            }));
        }
    }
    
    translatePage() {
        // Traducir elementos con atributo data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Traducir placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.getTranslation(key);
            if (translation) {
                element.placeholder = translation;
            }
        });
        
        // Traducir títulos
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            const translation = this.getTranslation(key);
            if (translation) {
                element.title = translation;
            }
        });
        
        // Traducir atributos alt
        document.querySelectorAll('[data-translate-alt]').forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            const translation = this.getTranslation(key);
            if (translation) {
                element.alt = translation;
            }
        });
    }
    
    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
    
    translate(key, params = {}) {
        let translation = this.getTranslation(key);
        
        // Reemplazar parámetros
        Object.keys(params).forEach(param => {
            translation = translation.replace(`{${param}}`, params[param]);
        });
        
        return translation;
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }
    
    addTranslation(language, key, value) {
        if (!this.translations[language]) {
            this.translations[language] = {};
        }
        this.translations[language][key] = value;
    }
    
    exportTranslations() {
        return JSON.stringify(this.translations, null, 2);
    }
    
    importTranslations(translationsJson) {
        try {
            const translations = JSON.parse(translationsJson);
            this.translations = { ...this.translations, ...translations };
            this.translatePage();
            return true;
        } catch (error) {
            console.error('Error importing translations:', error);
            return false;
        }
    }
}

// Inicializar sistema multi-idioma
window.multiLanguage = new MultiLanguage();

// Función helper para traducir
function t(key, params = {}) {
    return window.multiLanguage.translate(key, params);
}

// Función helper para cambiar idioma
function setLanguage(languageCode) {
    window.multiLanguage.setLanguage(languageCode);
}

// Función helper para obtener idioma actual
function getCurrentLanguage() {
    return window.multiLanguage.getCurrentLanguage();
}
