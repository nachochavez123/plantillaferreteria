// Ferretería Industrial Santa Cruz - Core Application State & Logic

const PRODUCTS = [
  {
    id: 1,
    name: "Taladro Percutor 13mm 710W Industrial",
    category: "Herramientas",
    priceRetail: 72500,
    priceWholesale: 61625,
    oldPrice: 85000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWqKXt-V9nS4dcviI2DdcR_yF6nbvOpcj5uyUrEOrPj_7Sa_LlM2HqxwE3HmOq3jG-XBDpfiECUBrr66f_LtMNhNEOw3XCyKmdnw9gxEbryDjbHTOQ2IiOOSgqbNHAFaLilKr79CP4I3iCOK0SoImwJRPLHZmeHV0nShRBnY0Gj1I1QuA3ZEmWDh118IJoPz_y15yEQoKxxeOq5aGMx9DTvZMlZR2zfUqUFx7ElHUYB0Z7RamZLfEU",
    inStock: true,
    stockCount: 18,
    branchStock: { "Río Gallegos": 12, "El Calafate": 6 },
    specs: "Motor 710W Reforzado, Mandril de 13mm metálico de ajuste rápido, Mandril con selector percutor/rotativo, Cable de 3 metros resistente a aceites."
  },
  {
    id: 2,
    name: "Juego de Llaves Combinadas 12 Piezas (6 a 22mm)",
    category: "Herramientas",
    priceRetail: 45900,
    priceWholesale: 39015,
    oldPrice: 52000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCccuN6R5yOr4MFhNa4JtIVljLyxHRJJoDnBI9gv--md0c62sNxcx4vRxqjTC9Im4UCBwlgMEkKbEDUmrgmMIv4oaIiVj8bFWT1HSrSgvJE9Qt4zvJU1UQTI5CCViyjSF0N6VhoSMk7JKbWRSSUuotd9OKrClrt5LqMqOl9eeQFTS3zFhHf6s6jpEUZZg9YE7kfjJciV3nR-FTqvQ--p3w0l_-go3SGbbWnZ48toy9ZoIghLEj8qCZK",
    inStock: true,
    stockCount: 25,
    branchStock: { "Río Gallegos": 20, "El Calafate": 5 },
    specs: "Acero Cromo Vanadio forjado en caliente, terminación satinada antideslizante, estuche organizador plástico de alta densidad."
  },
  {
    id: 3,
    name: "Cemento Avellaneda CPC40 (Bolsa 50kg)",
    category: "Materiales",
    priceRetail: 8900,
    priceWholesale: 7200,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    stockCount: 450,
    branchStock: { "Río Gallegos": 300, "El Calafate": 150 },
    specs: "Cemento Portland con Puzolana CPC40, resistencia mecánica inicial rápida, ideal para hormigón armado y estructuras pesadas."
  },
  {
    id: 4,
    name: "Amoladora Angular 4-1/2\" 850W Profesional",
    category: "Herramientas",
    priceRetail: 64000,
    priceWholesale: 54400,
    oldPrice: 71000,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    stockCount: 14,
    branchStock: { "Río Gallegos": 10, "El Calafate": 4 },
    specs: "11.000 RPM, disco de 115mm, protección anti-reinicio de seguridad y empuñadura auxiliar antivibración de 2 posiciones."
  },
  {
    id: 5,
    name: "Cable Unipolar Prysmian 2.5mm² (Rollo 100m)",
    category: "Electricidad",
    priceRetail: 38500,
    priceWholesale: 31900,
    oldPrice: 43000,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    stockCount: 30,
    branchStock: { "Río Gallegos": 20, "El Calafate": 10 },
    specs: "Cobre 100% puro electrolítico, aislación antillama PVC ecológica tipo BWF, norma IRAM NM 247-3."
  },
  {
    id: 6,
    name: "Hidrolavadora Industrial 180 Bar 2200W",
    category: "Herramientas",
    priceRetail: 289000,
    priceWholesale: 245000,
    oldPrice: 320000,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    stockCount: 8,
    branchStock: { "Río Gallegos": 5, "El Calafate": 3 },
    specs: "Bomba de latón con pistones de cerámica, manguera con malla de acero de 8m, lanza regulable y depósito de detergente."
  },
  {
    id: 7,
    name: "Casco de Seguridad Industrial MSA V-Gard",
    category: "Seguridad",
    priceRetail: 14200,
    priceWholesale: 11500,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    stockCount: 60,
    branchStock: { "Río Gallegos": 40, "El Calafate": 20 },
    specs: "Polietileno de alta densidad (HDPE) inyectado, suspensión con cremallera Fast-Trac III, ranuras laterales para accesorios."
  },
  {
    id: 8,
    name: "Guantes de Cuero Descarne Reforzados (Par)",
    category: "Seguridad",
    priceRetail: 4800,
    priceWholesale: 3800,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    inStock: true,
    stockCount: 120,
    branchStock: { "Río Gallegos": 80, "El Calafate": 40 },
    specs: "Cuero descarne vacuno seleccionado, costura reforzada en hilo de Kevlar, palma y pulgar con refuerzo doble."
  }
];

// App State
let appState = {
  currentView: 'inicio',
  tariffMode: 'retail', // 'retail' | 'wholesale'
  theme: 'light',       // 'light' | 'dark'
  cart: [],
  appliedCoupon: null,
  activeCategoryFilter: 'TODOS',
  searchQuery: ''
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderHomeFeatured();
  renderCatalog();
  updateCartBadge();
});

// Navigation Engine
function navigateTo(viewId) {
  appState.currentView = viewId;
  
  // Hide all view sections
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
  
  // Show target section
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update active state on Nav Buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('bg-[#f97316]/10', 'text-[#f97316]', 'font-bold');
    btn.classList.add('text-gray-700', 'dark:text-gray-300');
  });

  const activeBtn = document.getElementById(`nav-link-${viewId}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-[#f97316]/10', 'text-[#f97316]', 'font-bold');
  }

  // Update Mobile Bottom Nav
  ['inicio', 'catalogo', 'carrito', 'cuenta'].forEach(mId => {
    const mBtn = document.getElementById(`m-nav-${mId}`);
    if (mBtn) {
      if (mId === viewId) {
        mBtn.className = "flex flex-col items-center gap-1 text-xs text-[#f97316] font-bold";
      } else {
        mBtn.className = "flex flex-col items-center gap-1 text-xs text-gray-500 dark:text-gray-400";
      }
    }
  });

  if (viewId === 'carrito') {
    renderCart();
  }
}

// Dark / Light Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    appState.theme = 'light';
    showToast('Modo Claro (Patagonia Light) activado');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    appState.theme = 'dark';
    showToast('Modo Oscuro (Patagonia Dark) activado');
  }
}

// Tariff Mode Switcher (Minorista vs Mayorista)
function setTariffMode(mode) {
  appState.tariffMode = mode;
  
  const btnRetail = document.getElementById('btnSideRetail');
  const btnWholesale = document.getElementById('btnSideWholesale');
  const headerBadge = document.getElementById('wholesaleHeaderBadge');
  const badgeText = document.getElementById('headerBadgeText');

  if (mode === 'wholesale') {
    btnWholesale.className = "py-1.5 px-2 rounded-lg text-xs font-bold transition-all bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm";
    btnRetail.className = "py-1.5 px-2 rounded-lg text-xs font-semibold transition-all text-gray-600 dark:text-gray-400 hover:text-slate-900";
    
    headerBadge.classList.remove('hidden');
    badgeText.innerText = "Mayorista (15% Desc)";
    showToast('Tarifa Mayorista aplicada a todo el catálogo');
  } else {
    btnRetail.className = "py-1.5 px-2 rounded-lg text-xs font-bold transition-all bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm";
    btnWholesale.className = "py-1.5 px-2 rounded-lg text-xs font-semibold transition-all text-gray-600 dark:text-gray-400 hover:text-slate-900";
    
    badgeText.innerText = "Minorista";
    showToast('Tarifa Consumidor Final activada');
  }

  // Re-render price displays
  renderHomeFeatured();
  renderCatalog();
  if (appState.currentView === 'carrito') renderCart();
}

// Get Active Price for a Product
function getProductPrice(prod) {
  return appState.tariffMode === 'wholesale' ? prod.priceWholesale : prod.priceRetail;
}

// Format Currency CLP/ARS
function formatMoney(amount) {
  return `$ ${amount.toLocaleString('es-AR')}`;
}

// Render Featured Products on Home
function renderHomeFeatured() {
  const container = document.getElementById('homeFeaturedGrid');
  if (!container) return;

  const featured = PRODUCTS.slice(0, 4);
  container.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
}

// Render Catalog Grid
function renderCatalog() {
  const container = document.getElementById('catalogGrid');
  if (!container) return;

  let filtered = PRODUCTS;

  if (appState.activeCategoryFilter !== 'TODOS') {
    filtered = filtered.filter(p => p.category === appState.activeCategoryFilter);
  }

  if (appState.searchQuery.trim() !== '') {
    const q = appState.searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  const stockOnly = document.getElementById('catalogInStockOnly');
  if (stockOnly && stockOnly.checked) {
    filtered = filtered.filter(p => p.inStock);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-gray-500 space-y-2">
        <span class="material-symbols-outlined text-4xl text-gray-400">search_off</span>
        <p class="font-bold">No se encontraron productos</p>
        <p class="text-xs">Probá con otro término de búsqueda o categoría</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
}

// Create Product Card HTML
function createProductCardHTML(p) {
  const price = getProductPrice(p);
  const isWholesale = appState.tariffMode === 'wholesale';

  return `
    <div class="bg-white dark:bg-[#0d1c2e] rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#f97316] transition-all group">
      <div class="relative h-44 bg-gray-50 dark:bg-slate-900/60 p-4 flex items-center justify-center overflow-hidden">
        
        <!-- Stock Tag -->
        <span class="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold ${p.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
          ${p.inStock ? 'Stock Inmediato' : 'Consultar Stock'}
        </span>

        <img src="${p.image}" alt="${p.name}" class="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300">
      </div>

      <div class="p-4 flex flex-col flex-1 justify-between space-y-3">
        <div>
          <span class="text-[10px] font-mono text-gray-400 uppercase tracking-wider">${p.category}</span>
          <h4 onclick="showProductDetail(${p.id})" class="font-bold text-sm leading-snug hover:text-[#f97316] cursor-pointer transition-colors line-clamp-2 mt-1">
            ${p.name}
          </h4>
        </div>

        <div class="pt-2 border-t border-gray-100 dark:border-slate-800">
          ${p.oldPrice && !isWholesale ? `<span class="text-[11px] text-gray-400 line-through">${formatMoney(p.oldPrice)}</span>` : ''}
          <div class="flex items-baseline justify-between">
            <span class="text-lg font-extrabold text-slate-900 dark:text-white">${formatMoney(price)}</span>
            <span class="text-[10px] font-mono font-bold ${isWholesale ? 'text-[#f97316]' : 'text-gray-400'} uppercase">
              ${isWholesale ? 'Mayorista' : 'Minorista'}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-2 pt-1">
          <button onclick="showProductDetail(${p.id})" class="col-span-1 p-2 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300" title="Ver Ficha Técnica">
            <span class="material-symbols-outlined text-sm">visibility</span>
          </button>
          <button onclick="addToCart(${p.id})" class="col-span-3 bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95">
            <span class="material-symbols-outlined text-sm">add_shopping_cart</span>
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Category Filter Helper
function filterCategoryAndNavigate(catName) {
  appState.activeCategoryFilter = catName;
  const select = document.getElementById('catalogCategorySelect');
  if (select) select.value = catName;
  navigateTo('catalogo');
  renderCatalog();
}

function applyFilters() {
  const select = document.getElementById('catalogCategorySelect');
  if (select) appState.activeCategoryFilter = select.value;
  renderCatalog();
}

function handleHeaderSearch(query) {
  appState.searchQuery = query;
  if (appState.currentView !== 'catalogo' && query.trim() !== '') {
    navigateTo('catalogo');
  }
  renderCatalog();
}

// Product Details View
function showProductDetail(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const price = getProductPrice(prod);
  const isWholesale = appState.tariffMode === 'wholesale';

  const container = document.getElementById('productDetailContainer');
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-gray-50 dark:bg-slate-900/60 p-6 rounded-xl flex items-center justify-center border border-gray-100 dark:border-slate-800">
        <img src="${prod.image}" alt="${prod.name}" class="max-h-80 object-contain">
      </div>

      <div class="space-y-5">
        <div>
          <span class="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-xs font-mono font-bold rounded-full uppercase text-gray-500">${prod.category}</span>
          <h2 class="text-2xl font-bold mt-2">${prod.name}</h2>
          <p class="text-xs text-gray-400 font-mono mt-1">SKU: FSC-00${prod.id} • IRAM ISO 9001</p>
        </div>

        <div class="p-4 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 space-y-1">
          <p class="text-xs text-gray-400 uppercase font-mono">Precio Unitario (${isWholesale ? 'Mayorista' : 'Minorista'})</p>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-extrabold text-[#f97316]">${formatMoney(price)}</span>
            ${prod.oldPrice ? `<span class="text-sm text-gray-400 line-through">${formatMoney(prod.oldPrice)}</span>` : ''}
          </div>
          <p class="text-[11px] text-gray-500">Impuestos incluidos (IVA 21%). Descuentos aplicables por pallet en el checkout.</p>
        </div>

        <div>
          <h4 class="font-bold text-xs uppercase font-mono text-gray-400 mb-2">Especificaciones Técnicas</h4>
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-slate-900 p-3 rounded-lg border border-gray-100 dark:border-slate-800">
            ${prod.specs}
          </p>
        </div>

        <div>
          <h4 class="font-bold text-xs uppercase font-mono text-gray-400 mb-2">Disponibilidad en Depósitos</h4>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2 rounded bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 flex justify-between">
              <span>Depósito Río Gallegos</span>
              <span class="font-bold">${prod.branchStock["Río Gallegos"]} un.</span>
            </div>
            <div class="p-2 rounded bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 flex justify-between">
              <span>Depósito El Calafate</span>
              <span class="font-bold">${prod.branchStock["El Calafate"]} un.</span>
            </div>
          </div>
        </div>

        <div class="pt-4 flex gap-3">
          <button onclick="addToCart(${prod.id}); navigateTo('carrito');" class="flex-1 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-4 rounded-xl text-sm shadow-lg flex items-center justify-center gap-2">
            <span class="material-symbols-outlined">shopping_cart</span>
            <span>Comprar Ahora</span>
          </button>
          <button onclick="openQuoteModal()" class="bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl text-xs hover:bg-slate-900">
            Pedir Presupuesto
          </button>
        </div>
      </div>
    </div>
  `;

  navigateTo('detalle');
}

// Quick View Modal
function showQuickModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="flex items-center gap-4">
      <img src="${prod.image}" class="w-24 h-24 object-contain rounded-lg bg-gray-50 p-2">
      <div>
        <h3 class="font-bold text-base">${prod.name}</h3>
        <p class="text-sm font-extrabold text-[#f97316] mt-1">${formatMoney(getProductPrice(prod))}</p>
        <p class="text-xs text-gray-500 mt-1">${prod.specs}</p>
      </div>
    </div>
    <button onclick="addToCart(${prod.id}); closeProductModal();" class="w-full mt-4 bg-[#f97316] text-white py-2 rounded-lg font-bold text-xs">
      Agregar al Carrito
    </button>
  `;
  document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
}

// Cart Engine
function addToCart(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = appState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    appState.cart.push({ id: prod.id, name: prod.name, priceRetail: prod.priceRetail, priceWholesale: prod.priceWholesale, image: prod.image, quantity: 1 });
  }

  updateCartBadge();
  showToast(`"${prod.name}" agregado al carrito`);
}

function updateCartQuantity(productId, delta) {
  const item = appState.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    appState.cart = appState.cart.filter(i => i.id !== productId);
  }
  updateCartBadge();
  renderCart();
}

function removeFromCart(productId) {
  appState.cart = appState.cart.filter(i => i.id !== productId);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const totalCount = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartBadgeCount');
  if (badge) badge.innerText = totalCount;
}

function toggleCartDrawer() {
  navigateTo('carrito');
}

function renderCart() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-gray-500 space-y-2">
        <span class="material-symbols-outlined text-5xl text-gray-300">shopping_bag</span>
        <p class="font-bold text-base">Tu carrito está vacío</p>
        <p class="text-xs">Explorá el catálogo y agregá productos de alta calidad</p>
        <button onclick="navigateTo('catalogo')" class="mt-2 inline-block bg-[#f97316] text-white text-xs font-bold px-4 py-2 rounded-lg">
          Ir al Catálogo
        </button>
      </div>
    `;
    updateCartTotals(0);
    return;
  }

  const isWholesale = appState.tariffMode === 'wholesale';

  container.innerHTML = appState.cart.map(item => {
    const itemPrice = isWholesale ? item.priceWholesale : item.priceRetail;
    const itemTotal = itemPrice * item.quantity;

    return `
      <div class="py-4 flex items-center justify-between gap-4">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2 shrink-0">
        
        <div class="flex-1 space-y-1">
          <h4 class="font-bold text-xs md:text-sm leading-tight">${item.name}</h4>
          <p class="text-xs text-[#f97316] font-extrabold">${formatMoney(itemPrice)} un.</p>
        </div>

        <div class="flex items-center gap-2 border border-gray-200 dark:border-slate-700 rounded-lg p-1">
          <button onclick="updateCartQuantity(${item.id}, -1)" class="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-800 text-xs font-bold">-</button>
          <span class="text-xs font-bold w-6 text-center">${item.quantity}</span>
          <button onclick="updateCartQuantity(${item.id}, 1)" class="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-800 text-xs font-bold">+</button>
        </div>

        <div class="text-right shrink-0">
          <p class="font-extrabold text-sm">${formatMoney(itemTotal)}</p>
          <button onclick="removeFromCart(${item.id})" class="text-[10px] text-red-500 hover:underline">Eliminar</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = appState.cart.reduce((sum, item) => {
    const p = isWholesale ? item.priceWholesale : item.priceRetail;
    return sum + (p * item.quantity);
  }, 0);

  updateCartTotals(subtotal);
}

function updateCartTotals(subtotal) {
  let discount = 0;
  if (appState.appliedCoupon === 'MAYORISTA2026') {
    discount = subtotal * 0.15;
  }

  const tax = (subtotal - discount) * 0.21;
  const total = (subtotal - discount) + tax;

  document.getElementById('cartSubtotal').innerText = formatMoney(subtotal);
  document.getElementById('cartTax').innerText = formatMoney(tax);
  document.getElementById('cartTotal').innerText = formatMoney(total);

  const discountRow = document.getElementById('wholesaleDiscountRow');
  const discountVal = document.getElementById('cartWholesaleDiscount');
  if (discount > 0) {
    discountRow.classList.remove('hidden');
    discountVal.innerText = `-${formatMoney(discount)}`;
  } else {
    discountRow.classList.add('hidden');
  }
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  if (code === 'MAYORISTA2026') {
    appState.appliedCoupon = code;
    showToast('¡Descuento del 15% aplicado correctamente!');
    renderCart();
  } else {
    showToast('Código no válido. Usá "MAYORISTA2026"');
  }
}

function openCheckoutModal() {
  if (appState.cart.length === 0) {
    showToast('Agregá productos al carrito antes de finalizar');
    return;
  }
  document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() {
  appState.cart = [];
  updateCartBadge();
  document.getElementById('checkoutModal').classList.add('hidden');
  navigateTo('inicio');
  showToast('¡Gracias por tu compra!');
}

function openQuoteModal() {
  showToast('Formulario de Presupuesto Express enviado a asesor comercial');
}

function downloadPriceList(type) {
  showToast(`Descargando Lista de Precios Ferretería Santa Cruz (${type})...`);
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = "bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-slate-700 transition-all duration-300 transform translate-y-2 opacity-0";
  toast.innerHTML = `<span class="material-symbols-outlined text-[#f97316] text-sm">info</span><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
