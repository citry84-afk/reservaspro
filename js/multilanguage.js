// Simple MultiLanguage class
class MultiLanguage {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'es';
        this.translations = {
            es: {
                'nav.dashboard': 'Dashboard',
                'nav.calendar': 'Calendario',
                'nav.analytics': 'Analytics',
                'nav.payments': 'Pagos',
                'nav.notifications': 'Notificaciones',
                'btn.start_onboarding': 'Iniciar Onboarding',
                'btn.take_tour': 'Tomar Tour',
                'btn.previous': 'Anterior',
                'btn.next': 'Siguiente',
                'btn.day_view': 'Vista Día',
                'btn.week_view': 'Vista Semana',
                'btn.month_view': 'Vista Mes',
                'btn.advanced_mode': 'Modo Avanzado',
                'btn.simplified_mode': 'Modo Simplificado',
                'analytics.total_bookings': 'Reservas Totales',
                'analytics.total_revenue': 'Ingresos Totales',
                'analytics.unique_clients': 'Clientes Únicos'
            },
            en: {
                'nav.dashboard': 'Dashboard',
                'nav.calendar': 'Calendar',
                'nav.analytics': 'Analytics',
                'nav.payments': 'Payments',
                'nav.notifications': 'Notifications',
                'btn.start_onboarding': 'Start Onboarding',
                'btn.take_tour': 'Take Tour',
                'btn.previous': 'Previous',
                'btn.next': 'Next',
                'btn.day_view': 'Day View',
                'btn.week_view': 'Week View',
                'btn.month_view': 'Month View',
                'btn.advanced_mode': 'Advanced Mode',
                'btn.simplified_mode': 'Simplified Mode',
                'analytics.total_bookings': 'Total Bookings',
                'analytics.total_revenue': 'Total Revenue',
                'analytics.unique_clients': 'Unique Clients'
            }
        };
        
        this.init();
    }

    init() {
        // Wait a bit for DOM to be ready
        setTimeout(() => {
            this.setupLanguageSelector();
            this.translatePage();
        }, 100);
    }

    translate(key, params = {}) {
        let text = this.translations[this.currentLanguage][key] || key;
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
        if (!document.body) return;
        
        // Check if already exists
        if (document.getElementById('language-selector')) return;

        const selector = document.createElement('div');
        selector.id = 'language-selector';
        selector.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 1000;
            background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px);
            border-radius: 8px; padding: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `;

        const select = document.createElement('select');
        select.style.cssText = `border: none; background: transparent; font-size: 14px; cursor: pointer; outline: none;`;

        const languages = [
            { code: 'es', name: '🇪🇸 ES' },
            { code: 'en', name: '🇬🇧 EN' }
        ];

        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.code;
            option.textContent = lang.name;
            if (lang.code === this.currentLanguage) option.selected = true;
            select.appendChild(option);
        });

        select.addEventListener('change', (e) => this.setLanguage(e.target.value));
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

// Initialize when DOM is ready
function initMultiLanguage() {
    window.multiLanguage = new MultiLanguage();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMultiLanguage);
} else {
    initMultiLanguage();
}

// Helper function
function t(key, params = {}) {
    return window.multiLanguage ? window.multiLanguage.translate(key, params) : key;
}