const ICONS = {
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20.5s-7.5-4.6-10-9.3C.5 8 2 4.5 5.5 4c2.2-.3 4 .8 6.5 3.4C14.5 4.8 16.3 3.7 18.5 4c3.5.5 5 4 3.5 7.2-2.5 4.7-10 9.3-10 9.3z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`
};

const WISHLIST_KEY = "nontox_wishlist_v1";
const AUTH_KEY = "nontox_auth_v1";

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function setWishlist(ids) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
}
function isWished(id) {
  return getWishlist().includes(id);
}
function toggleWished(id) {
  const list = getWishlist();
  const idx = list.indexOf(id);
  if (idx > -1) list.splice(idx, 1);
  else list.push(id);
  setWishlist(list);
  return list.includes(id);
}
function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === "1";
}
function setLoggedIn(v) {
  localStorage.setItem(AUTH_KEY, v ? "1" : "0");
}

function productCardHTML(product, variant) {
  const wished = isWished(product.id);
  const url = `product.html?id=${encodeURIComponent(product.id)}`;
  const freeFromPills = product.freeFrom
    .slice(0, 3)
    .map((f) => `<span class="pill pill-green">Free from ${f}</span>`)
    .join("");

  const favControl =
    variant === "wishlist"
      ? `<button class="remove-btn" type="button" data-remove-id="${product.id}" aria-label="Remove ${product.brand} ${product.name} from wishlist">${ICONS.x}</button>`
      : `<button class="fav-btn${wished ? " is-active" : ""}" type="button" data-fav-id="${product.id}" aria-pressed="${wished}" aria-label="${wished ? "Remove from" : "Save to"} wishlist: ${product.brand} ${product.name}">${ICONS.heart}</button>`;

  const footer = `<div class="price-row"><span class="price">$${product.price}</span><a class="btn btn-outline btn-sm" href="${url}">View product</a></div>`;

  const metaLine =
    variant === "scroll"
      ? `<div class="meta-row"><span class="pill pill-green pill-dot">NonTox listed</span><span>&middot;</span><span>${formatListedDate(product.listedDate)}</span></div><p class="why">${product.why}</p>`
      : `<div class="tags">${freeFromPills}</div>`;

  const listedBadge = variant === "scroll" ? "" : `<span class="pill pill-green pill-dot thumb-badge">NonTox listed</span>`;

  return `<article class="product-card" data-id="${product.id}" data-subcategory="${product.subcategory}" data-category="${product.category}" data-price="${product.price}" data-date="${product.listedDate}" data-free-from="${product.freeFrom.join("|").toLowerCase()}" data-search="${(product.brand + " " + product.name + " " + product.categoryLabel).toLowerCase()}">
    <div class="thumb">
      ${productArtSVG(product, product.id)}
      ${listedBadge}
      ${favControl}
    </div>
    <div class="body">
      <a href="${url}" class="brand">${product.brand}</a>
      <a href="${url}" class="name">${product.name}</a>
      ${metaLine}
      ${variant !== "scroll" ? footer : `<div class="price-row"><span class="pill pill-green pill-dot">NonTox listed</span><span class="price">$${product.price}</span></div>`}
    </div>
  </article>`;
}

function mountProductGrid(container, products, variant) {
  if (!container) return;
  container.innerHTML = products.map((p) => productCardHTML(p, variant)).join("");
  bindFavButtons(container);
  bindRemoveButtons(container);
}

function bindFavButtons(scope) {
  (scope || document).querySelectorAll("[data-fav-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-fav-id");
      const nowWished = toggleWished(id);
      btn.classList.toggle("is-active", nowWished);
      btn.setAttribute("aria-pressed", String(nowWished));
    });
  });
}

function bindRemoveButtons(scope) {
  (scope || document).querySelectorAll("[data-remove-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-remove-id");
      const list = getWishlist().filter((x) => x !== id);
      setWishlist(list);
      const card = btn.closest(".product-card");
      if (card) {
        card.style.transition = "opacity 180ms ease, transform 180ms ease";
        card.style.opacity = "0";
        card.style.transform = "scale(0.96)";
        setTimeout(() => {
          card.remove();
          document.dispatchEvent(new CustomEvent("wishlist:changed"));
        }, 180);
      }
    });
  });
}

function initSearchForms() {
  document.querySelectorAll(".js-search-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type=search], input[type=text]");
      const q = input ? input.value.trim() : "";
      window.location.href = "search.html" + (q ? `?q=${encodeURIComponent(q)}` : "");
    });
  });
}

function initPillFilters(root) {
  const group = (root || document).querySelector("[data-pill-group]");
  if (!group) return;
  group.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-btn");
    if (!btn || btn.classList.contains("is-disabled")) return;
    group.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    document.dispatchEvent(new CustomEvent("filters:changed"));
  });
}

function initCheckboxFilters(root) {
  (root || document).querySelectorAll(".filter-sidebar input[type=checkbox]").forEach((cb) => {
    cb.addEventListener("change", () => document.dispatchEvent(new CustomEvent("filters:changed")));
  });
}

function applyGridFilters(gridEl, opts) {
  opts = opts || {};
  const activePill = document.querySelector("[data-pill-group] .pill-btn.is-active");
  const subcat = activePill ? activePill.getAttribute("data-subcategory") : null;
  const checkedFreeFrom = Array.from(document.querySelectorAll(".filter-sidebar input[data-filter='free-from']:checked")).map((c) => c.value.toLowerCase());
  const cards = gridEl.querySelectorAll(".product-card");
  let visible = 0;
  cards.forEach((card) => {
    let show = true;
    if (subcat && subcat !== "all") show = show && card.getAttribute("data-subcategory") === subcat;
    if (checkedFreeFrom.length) {
      const cardFree = card.getAttribute("data-free-from") || "";
      show = show && checkedFreeFrom.every((f) => cardFree.includes(f));
    }
    if (opts.query) {
      show = show && (card.getAttribute("data-search") || "").includes(opts.query.toLowerCase());
    }
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });
  const countEl = document.querySelector("[data-result-count]");
  if (countEl) countEl.textContent = String(visible);
  return visible;
}

function initShareTooltip() {
  document.querySelectorAll("[data-share-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrap = btn.closest(".share-tooltip");
      const toast = wrap ? wrap.querySelector(".toast") : null;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.origin + window.location.pathname + "?list=shared-demo").catch(() => {});
      }
      if (toast) {
        toast.classList.add("is-visible");
        toast.textContent = "Read-only link copied";
        setTimeout(() => toast.classList.remove("is-visible"), 2200);
      }
    });
  });
}

function initSortSelect(gridEl) {
  const select = document.querySelector("[data-sort-select]");
  if (!select || !gridEl) return;
  select.addEventListener("change", () => {
    const cards = Array.from(gridEl.querySelectorAll(".product-card"));
    const mode = select.value;
    cards.sort((a, b) => {
      if (mode === "price-asc") return Number(a.dataset.price) - Number(b.dataset.price);
      if (mode === "price-desc") return Number(b.dataset.price) - Number(a.dataset.price);
      if (mode === "newest") return new Date(b.dataset.date) - new Date(a.dataset.date);
      return 0;
    });
    cards.forEach((c) => gridEl.appendChild(c));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSearchForms();
});
