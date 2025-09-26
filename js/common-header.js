// Common header with logo, navigation and language selector
(function initCommonHeader() {
    if (document.getElementById('rp-common-header')) return;

    const header = document.createElement('header');
    header.id = 'rp-common-header';
    header.className = 'header';
    header.style.cssText = `
        background: white;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        position: sticky;
        top: 0;
        z-index: 100;
    `;

    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.style.gap = '1rem';
    const logo = document.createElement('a');
    logo.href = '../';
    logo.className = 'logo';
    logo.textContent = '📅 ReservasPro';
    logo.style.textDecoration = 'none';
    logo.style.color = '#1e40af';
    logo.style.fontWeight = 'bold';
    left.appendChild(logo);

    const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.gap = '0.75rem';
    const links = [
        { href: 'index.html', key: 'nav.dashboard', text: 'Dashboard' },
        { href: 'calendar.html', key: 'nav.calendar', text: 'Calendario' },
        { href: 'analytics.html', key: 'nav.analytics', text: 'Analytics' },
        { href: 'payments.html', key: 'nav.payments', text: 'Pagos' },
        { href: 'notifications.html', key: 'nav.notifications', text: 'Notificaciones' }
    ];
    const currentPath = location.pathname.split('/').pop() || 'index.html';
    links.forEach(l => {
        const a = document.createElement('a');
        a.href = l.href;
        a.setAttribute('data-translate', l.key);
        a.textContent = l.text;
        a.style.cssText = 'color:#64748b;text-decoration:none;font-weight:600;';
        if (currentPath === l.href) {
            a.style.color = '#1e40af';
            a.style.borderBottom = '2px solid #1e40af';
            a.style.paddingBottom = '2px';
        }
        nav.appendChild(a);
    });
    left.appendChild(nav);

    const right = document.createElement('div');
    // If multilanguage is loaded, its selector will appear; keep area for future actions
    right.style.minWidth = '120px';

    header.appendChild(left);
    header.appendChild(right);

    const firstEl = document.body.firstElementChild;
    document.body.insertBefore(header, firstEl);
})();


