(function () {
  'use strict';

  var KEY = 'blankstate_cart';
  var WSP = '51942418379';

  function get() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch (e) { return []; }
  }

  function save(cart) { localStorage.setItem(KEY, JSON.stringify(cart)); }

  function updateBadge() {
    var badge = document.getElementById('cart-badge');
    if (!badge) return;
    var n = get().length;
    badge.textContent = n;
    badge.style.display = n > 0 ? 'flex' : 'none';
  }

  function removeItem(idx) {
    var cart = get();
    cart.splice(idx, 1);
    save(cart);
    updateBadge();
    renderItems();
  }

  function buildMessage(cart) {
    var lines = ['Hola! Quiero hacer este pedido de Blankstate\n'];
    var total = 0;
    cart.forEach(function (item, i) {
      lines.push((i + 1) + '. ' + item.packName + ' (' + item.qty + ') — ' + item.price);
      if (item.units && item.units.length) {
        item.units.forEach(function (u) {
          var parts = [u.color, u.fit, u.size ? 'Talla ' + u.size : null].filter(Boolean);
          lines.push('   • ' + u.label + ': ' + parts.join(', '));
        });
      } else {
        var det = [item.color, item.fit, item.size ? 'Talla ' + item.size : null]
          .filter(Boolean).join(' · ');
        if (det) lines.push('   ' + det);
      }
      total += item.priceNum || 0;
    });
    lines.push('\nTotal: S/ ' + total);
    lines.push('\n¿Tienen disponibilidad?');
    return lines.join('\n');
  }

  function renderItems() {
    var body = document.getElementById('cart-drawer-body');
    var footer = document.getElementById('cart-drawer-footer');
    if (!body || !footer) return;

    var cart = get();

    if (!cart.length) {
      body.innerHTML =
        '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px;padding:60px 0;color:#A0A0A0;text-align:center">' +
        '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>' +
        '<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>' +
        '</svg>' +
        '<p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase">Tu carrito está vacío</p>' +
        '</div>';
      footer.innerHTML = '';
      return;
    }

    var total = 0;
    var html = '';
    cart.forEach(function (item, i) {
      total += item.priceNum || 0;
      var detailsHtml = '';
      if (item.units && item.units.length) {
        detailsHtml = item.units.map(function (u) {
          var parts = [u.color, u.fit, u.size ? 'T. ' + u.size : null].filter(Boolean);
          return '<p style="font-size:11px;color:#A0A0A0;letter-spacing:0.04em;margin-bottom:2px">' +
            u.label + ': ' + parts.join(' · ') + '</p>';
        }).join('');
      } else {
        var det = [item.color, item.fit, item.size ? 'T. ' + item.size : null]
          .filter(Boolean).join(' · ');
        if (det) detailsHtml = '<p style="font-size:11px;color:#A0A0A0;letter-spacing:0.04em;margin-bottom:3px">' + det + '</p>';
      }
      html +=
        '<div style="display:flex;align-items:flex-start;gap:12px;padding:16px 0;border-bottom:1px solid #EBEBEB">' +
        '<div style="flex:1;min-width:0">' +
        '<p style="font-size:13px;font-weight:500;color:#080808;margin-bottom:4px">' + item.packName + '</p>' +
        detailsHtml +
        '<p style="font-size:13px;color:#505050;margin-top:4px">' + item.price + '</p>' +
        '</div>' +
        '<button data-remove="' + i + '" style="background:none;border:none;cursor:pointer;color:#A0A0A0;font-size:20px;font-weight:300;line-height:1;padding:2px 6px;font-family:inherit;flex-shrink:0;transition:color 0.2s" aria-label="Eliminar">×</button>' +
        '</div>';
    });
    body.innerHTML = html;

    body.querySelectorAll('[data-remove]').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () { this.style.color = '#080808'; });
      btn.addEventListener('mouseleave', function () { this.style.color = '#A0A0A0'; });
      btn.addEventListener('click', function () { removeItem(parseInt(this.dataset.remove)); });
    });

    footer.innerHTML =
      '<div style="border-top:1px solid #D0D0D0;padding-top:16px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:baseline">' +
      '<span style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#A0A0A0">Total estimado</span>' +
      '<span style="font-size:22px;font-weight:500;letter-spacing:0.02em;font-family:inherit">S/ ' + total + '</span>' +
      '</div>' +
      '<button id="cart-checkout-btn" style="width:100%;background:#080808;color:#F6F6F6;border:none;padding:18px 24px;font-family:inherit;font-size:12px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:background 0.2s">' +
      'Enviar pedido por WhatsApp' +
      '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 1.41.37 2.74 1.01 3.89L0 16l4.28-1.12A7.96 7.96 0 008 16c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.93 11.07c-.17.48-.98.93-1.36.99-.35.05-.79.07-1.27-.08a11.5 11.5 0 01-1.15-.43C6.64 10.8 5.5 9.4 5.41 9.29c-.09-.11-.73-.97-.73-1.85 0-.88.46-1.31.62-1.49.17-.18.37-.22.49-.22h.35c.11 0 .27-.04.42.32l.54 1.35c.05.11.08.24.02.38l-.2.39-.3.31c-.1.1-.2.21-.09.41.11.2.5.82 1.07 1.33.73.65 1.35.85 1.54.94.19.09.3.08.41-.05l.49-.58c.14-.18.28-.15.47-.09l1.33.63c.19.09.31.14.36.22.04.08.04.46-.13.93z"/></svg>' +
      '</button>';

    var checkoutBtn = document.getElementById('cart-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('mouseenter', function () { this.style.background = '#1E1E1E'; });
      checkoutBtn.addEventListener('mouseleave', function () { this.style.background = '#080808'; });
      checkoutBtn.addEventListener('click', function () {
        var msg = buildMessage(get());
        window.open('https://wa.me/' + WSP + '?text=' + encodeURIComponent(msg), '_blank');
      });
    }
  }

  function openDrawer() {
    var overlay = document.getElementById('cart-overlay');
    var drawer = document.getElementById('cart-drawer');
    if (!overlay || !drawer) return;
    renderItems();
    overlay.style.display = 'block';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.style.opacity = '1';
        drawer.style.transform = 'translateX(0)';
      });
    });
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    var overlay = document.getElementById('cart-overlay');
    var drawer = document.getElementById('cart-drawer');
    if (!overlay || !drawer) return;
    overlay.style.opacity = '0';
    drawer.style.transform = 'translateX(100%)';
    setTimeout(function () {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 350);
  }

  window.cartAdd = function (item) {
    var cart = get();
    cart.push(item);
    save(cart);
    updateBadge();

    var btn = document.getElementById('btn-add-cart');
    if (btn) {
      btn.textContent = 'Agregado ✓';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Agregar al carrito';
        btn.disabled = false;
      }, 2000);
    }
  };

  function inject() {
    var style = document.createElement('style');
    style.textContent = [
      '#cart-float{position:fixed;bottom:24px;right:24px;z-index:490;width:56px;height:56px;background:#080808;color:#F6F6F6;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.35);transition:transform .25s cubic-bezier(.16,1,.3,1),background .2s;padding:0;}',
      '#cart-float:hover{transform:scale(1.08);background:#1E1E1E;}',
      '#cart-badge{position:absolute;top:-4px;right:-4px;width:20px;height:20px;background:#F6F6F6;color:#080808;border-radius:50%;font-size:11px;font-weight:600;display:none;align-items:center;justify-content:center;font-family:inherit;line-height:1;border:2px solid #F6F6F6;}',
      '@media(max-width:900px){#cart-float{bottom:90px;right:24px;}}',
      '#cart-overlay{display:none;position:fixed;inset:0;background:rgba(8,8,8,.5);z-index:600;opacity:0;transition:opacity .3s ease;}',
      '#cart-drawer{position:fixed;top:0;right:0;width:min(420px,100vw);height:100vh;height:100dvh;background:#F6F6F6;z-index:601;display:flex;flex-direction:column;overflow:hidden;transform:translateX(100%);transition:transform .35s cubic-bezier(.16,1,.3,1);}',
      '#cart-drawer *{font-family:"Space Grotesk",-apple-system,sans-serif;}',
      '#cart-drawer-header{display:flex;align-items:center;justify-content:space-between;padding:24px 28px;border-bottom:1px solid #EBEBEB;flex-shrink:0;}',
      '#cart-drawer-title{font-size:12px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#080808;}',
      '#cart-drawer-close{background:none;border:none;cursor:pointer;color:#A0A0A0;font-size:22px;font-weight:300;line-height:1;padding:4px 8px;transition:color .2s;}',
      '#cart-drawer-close:hover{color:#080808;}',
      '#cart-drawer-body{flex:1;overflow-y:auto;padding:0 28px;}',
      '#cart-drawer-footer{flex-shrink:0;padding:16px 28px 32px;}',
      '#btn-add-cart{display:flex;align-items:center;justify-content:center;gap:8px;background:#080808;color:#F6F6F6;border:none;padding:20px 32px;font-family:"Space Grotesk",-apple-system,sans-serif;font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;width:100%;margin-top:10px;transition:background .2s,transform .3s cubic-bezier(.16,1,.3,1);}',
      '#btn-add-cart:hover:not(:disabled){background:#1E1E1E;transform:translateY(-2px);}',
      '#btn-add-cart:disabled{opacity:.55;cursor:default;transform:none;}'
    ].join('');
    document.head.appendChild(style);

    var floatBtn = document.createElement('button');
    floatBtn.id = 'cart-float';
    floatBtn.setAttribute('aria-label', 'Ver carrito');
    floatBtn.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>' +
      '<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>' +
      '</svg>' +
      '<span id="cart-badge"></span>';
    floatBtn.addEventListener('click', openDrawer);
    document.body.appendChild(floatBtn);

    var overlay = document.createElement('div');
    overlay.id = 'cart-overlay';
    overlay.addEventListener('click', closeDrawer);

    var drawer = document.createElement('div');
    drawer.id = 'cart-drawer';
    drawer.innerHTML =
      '<div id="cart-drawer-header">' +
        '<span id="cart-drawer-title">Tu pedido</span>' +
        '<button id="cart-drawer-close" aria-label="Cerrar">✕</button>' +
      '</div>' +
      '<div id="cart-drawer-body"></div>' +
      '<div id="cart-drawer-footer"></div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    document.getElementById('cart-drawer-close').addEventListener('click', closeDrawer);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });

    updateBadge();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
