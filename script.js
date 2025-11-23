// ---------------------------------------------------------------------------
// DATA: brand metadata + revenue (billions) for 2015, 2020, 2025
// ---------------------------------------------------------------------------
const BRAND_DATA = [
  {
    brand: 'Adidas',
    segment: 'Mass Premium',
    minimalism: 2,
    logo: 'assets/adidas.png',
    byYear: {
      2015: { revenue: 16.84 },
      2020: { revenue: 21.17 },
      2025: { revenue: 25.51 },
    },
  },
  {
    brand: 'Balenciaga',
    segment: 'Luxury',
    minimalism: 3,
    logo: 'assets/balenciaga.png',
    byYear: {
      2015: { revenue: 1.52 },
      2020: { revenue: 1.91 },
      2025: { revenue: 2.3 },
    },
  },
  {
    brand: 'Bottega Veneta',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/bottega-veneta.png',
    byYear: {
      2015: { revenue: 1.12 },
      2020: { revenue: 1.41 },
      2025: { revenue: 1.7 },
    },
  },
  {
    brand: 'Burberry',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/burberry.png',
    byYear: {
      2015: { revenue: 2.09 },
      2020: { revenue: 2.63 },
      2025: { revenue: 3.17 },
    },
  },
  {
    brand: 'Celine',
    segment: 'Luxury',
    minimalism: 5,
    logo: 'assets/celine.png',
    byYear: {
      2015: { revenue: 0.99 },
      2020: { revenue: 1.25 },
      2025: { revenue: 1.5 },
    },
  },
  {
    brand: 'Chanel',
    segment: 'Ultra-luxury',
    minimalism: 5,
    logo: 'assets/chanel.png',
    byYear: {
      2015: { revenue: 12.34 },
      2020: { revenue: 15.52 },
      2025: { revenue: 18.7 },
    },
  },
  {
    brand: 'Dior',
    segment: 'Ultra-luxury',
    minimalism: 4,
    logo: 'assets/dior.png',
    byYear: {
      2015: { revenue: 6.34 },
      2020: { revenue: 7.97 },
      2025: { revenue: 9.6 },
    },
  },
  {
    brand: 'Fendi',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/fendi.png',
    byYear: {
      2015: { revenue: 0.99 },
      2020: { revenue: 1.25 },
      2025: { revenue: 1.5 },
    },
  },
  {
    brand: 'Givenchy',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/givenchy.png',
    byYear: {
      2015: { revenue: 0.53 },
      2020: { revenue: 0.66 },
      2025: { revenue: 0.8 },
    },
  },
  {
    brand: 'Gucci',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/gucci.png',
    byYear: {
      2015: { revenue: 5.08 },
      2020: { revenue: 6.39 },
      2025: { revenue: 7.7 },
    },
  },
  {
    brand: 'Hermès',
    segment: 'Ultra-luxury',
    minimalism: 5,
    logo: 'assets/hermes.png',
    byYear: {
      2015: { revenue: 10.03 },
      2020: { revenue: 12.62 },
      2025: { revenue: 15.2 },
    },
  },
  {
    brand: 'H&M',
    segment: 'Fast Fashion',
    minimalism: 3,
    logo: 'assets/hm.png',
    byYear: {
      2015: { revenue: 14.52 },
      2020: { revenue: 18.26 },
      2025: { revenue: 22.0 },
    },
  },
  {
    brand: 'Louis Vuitton',
    segment: 'Ultra-luxury',
    minimalism: 4,
    logo: 'assets/louis-vuitton.png',
    byYear: {
      2015: { revenue: 14.26 },
      2020: { revenue: 17.93 },
      2025: { revenue: 21.6 },
    },
  },
  {
    brand: 'Lululemon',
    segment: 'Premium',
    minimalism: 3,
    logo: 'assets/lululemon.png',
    byYear: {
      2015: { revenue: 6.98 },
      2020: { revenue: 8.78 },
      2025: { revenue: 10.58 },
    },
  },
  {
    brand: 'Moncler',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/moncler.png',
    byYear: {
      2015: { revenue: 1.98 },
      2020: { revenue: 2.49 },
      2025: { revenue: 3.0 },
    },
  },
  {
    brand: 'Nike',
    segment: 'Mass Premium',
    minimalism: 2,
    logo: 'assets/nike.png',
    byYear: {
      2015: { revenue: 33.9 },
      2020: { revenue: 42.63 },
      2025: { revenue: 51.36 },
    },
  },
  {
    brand: 'Prada',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/prada.png',
    byYear: {
      2015: { revenue: 3.1 },
      2020: { revenue: 3.9 },
      2025: { revenue: 4.7 },
    },
  },
  {
    brand: 'Saint Laurent',
    segment: 'Luxury',
    minimalism: 4,
    logo: 'assets/saint-laurent.png',
    byYear: {
      2015: { revenue: 1.91 },
      2020: { revenue: 2.41 },
      2025: { revenue: 2.9 },
    },
  },
  {
    brand: 'Sephora',
    segment: 'Beauty Retail',
    minimalism: 3,
    logo: 'assets/sephora.png',
    byYear: {
      2015: { revenue: 6.6 },
      2020: { revenue: 8.3 },
      2025: { revenue: 10.0 },
    },
  },
  {
    brand: 'Shein',
    segment: 'Fast Fashion',
    minimalism: 1,
    logo: 'assets/shein.png',
    byYear: {
      2015: { revenue: 19.8 },
      2020: { revenue: 24.9 },
      2025: { revenue: 30.0 },
    },
  },
  {
    brand: 'Uniqlo',
    segment: 'Premium',
    minimalism: 3,
    logo: 'assets/uniqlo.png',
    byYear: {
      2015: { revenue: 13.64 },
      2020: { revenue: 17.15 },
      2025: { revenue: 20.66 },
    },
  },
  {
    brand: 'Valentino',
    segment: 'Luxury',
    minimalism: 3,
    logo: 'assets/valentino.png',
    byYear: {
      2015: { revenue: 0.79 },
      2020: { revenue: 1.0 },
      2025: { revenue: 1.2 },
    },
  },
  {
    brand: 'Versace',
    segment: 'Luxury',
    minimalism: 3,
    logo: 'assets/versace.png',
    byYear: {
      2015: { revenue: 0.73 },
      2020: { revenue: 0.91 },
      2025: { revenue: 1.1 },
    },
  },
  {
    brand: 'Zara',
    segment: 'Fast Fashion',
    minimalism: 4,
    logo: 'assets/zara.png',
    byYear: {
      2015: { revenue: 21.78 },
      2020: { revenue: 27.39 },
      2025: { revenue: 33.0 },
    },
  },
];

const YEARS = [2015, 2020, 2025];

// pre-compute global revenue range for charts
const ALL_REVENUES = [];
BRAND_DATA.forEach(b => {
  YEARS.forEach(y => {
    if (b.byYear[y]) ALL_REVENUES.push(b.byYear[y].revenue);
  });
});
const GLOBAL_MIN_REV = Math.min(...ALL_REVENUES);
const GLOBAL_MAX_REV = Math.max(...ALL_REVENUES);

// average revenue across all brands for each year (for the line chart)
const AVG_REVENUE_BY_YEAR = YEARS.reduce((acc, year) => {
  let sum = 0;
  let count = 0;
  BRAND_DATA.forEach(b => {
    if (b.byYear[year]) {
      sum += b.byYear[year].revenue;
      count++;
    }
  });
  acc[year] = sum / Math.max(count, 1);
  return acc;
}, {});

// ----------------------------------------------------------------------------
// STATE
// ----------------------------------------------------------------------------
let currentYear = 2025;
let selectedBrandName = 'Chanel';

// ----------------------------------------------------------------------------
// UTILITIES
// ----------------------------------------------------------------------------
function $(selector, root = document) {
  return root.querySelector(selector);
}
function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}
function getBrand(brandName) {
  return BRAND_DATA.find(b => b.brand === brandName);
}

// ----------------------------------------------------------------------------
// SCROLL PROGRESS + NAV
// ----------------------------------------------------------------------------
(function initScrollAndNav() {
  const bar = $('.scroll-progress__bar');
  if (!bar) return;

  const onScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.transform = `scaleX(${progress})`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll for nav + buttons
  const navLinks = [
    ...$all('.site-nav__link'),
    ...$all('[data-jump]')
  ];

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href') || link.dataset.jump;
      if (!targetId || !targetId.startsWith('#')) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// ----------------------------------------------------------------------------
// PAGE REVEAL (intersection observer)
// ----------------------------------------------------------------------------
(function initPageReveal() {
  const pages = $all('.page');
  if (!('IntersectionObserver' in window) || pages.length === 0) {
    pages.forEach(p => p.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  pages.forEach(p => observer.observe(p));
})();

// ----------------------------------------------------------------------------
// BRAND GALLERY
// ----------------------------------------------------------------------------
function initBrandGallery() {
  const cards = $all('.brand-card');
  const selectionText = $('.brand-selection');

  // stagger animation delays via CSS custom property
  cards.forEach((card, index) => {
    card.style.setProperty('--brand-delay', `${index * 40}ms`);
  });

  function updateSelectionText(brandName) {
    const b = getBrand(brandName);
    if (!b || !selectionText) return;
    selectionText.innerHTML = `
      Showing <strong>${b.brand}</strong> – ${b.segment},
      minimalism score <strong>${b.minimalism}/5</strong>.
      It made <strong>${b.byYear[currentYear].revenue.toFixed(2)} Bn</strong> in
      ${currentYear}.
    `;
  }

  function selectBrand(brandName, fromClick = false) {
    selectedBrandName = brandName;
    cards.forEach(card => {
      card.classList.toggle(
        'brand-card--selected',
        card.dataset.brand === brandName
      );
    });
    updateSelectionText(brandName);
    updateScatter();
    updateBarChart(false);
    updateLineChart();

    if (fromClick) {
      const lineSelect = $('#lineBrandSelect');
      if (lineSelect && lineSelect.value !== brandName) {
        lineSelect.value = brandName;
      }
    }
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const brandName = card.dataset.brand;
      if (brandName) selectBrand(brandName, true);
    });
  });

  // expose for other modules
  window._selectBrandFromCharts = selectBrand;

  // initial selection
  if (getBrand(selectedBrandName)) {
    selectBrand(selectedBrandName);
  } else if (cards[0]) {
    selectBrand(cards[0].dataset.brand);
  }
}

// ----------------------------------------------------------------------------
// YEAR DROPDOWN
// ----------------------------------------------------------------------------
function initYearDropdown() {
  const select = $('#yearSelect');
  if (!select) return;
  select.innerHTML = YEARS.map(y => `<option value="${y}">${y}</option>`).join('');
  select.value = String(currentYear);

  select.addEventListener('change', () => {
    currentYear = Number(select.value);
    $('#scatterYearLabel').textContent = currentYear;
    $('#barYearLabel').textContent = currentYear;
    updateScatter();
    updateBarChart(true);
    // line chart uses all years, so no need to change
    const selectionText = $('.brand-selection');
    if (selectionText && selectedBrandName) {
      const b = getBrand(selectedBrandName);
      if (b && b.byYear[currentYear]) {
        selectionText.innerHTML = `
          Showing <strong>${b.brand}</strong> – ${b.segment},
          minimalism score <strong>${b.minimalism}/5</strong>.
          It made <strong>${b.byYear[currentYear].revenue.toFixed(2)} Bn</strong> in
          ${currentYear}.
        `;
      }
    }
  });

  // set initial labels
  $('#scatterYearLabel').textContent = currentYear;
  $('#barYearLabel').textContent = currentYear;
}

// ----------------------------------------------------------------------------
// SCATTER PLOT
// ----------------------------------------------------------------------------
function updateScatter() {
  const plot = $('#scatterPlot');
  if (!plot) return;

  // remove existing points but keep axes / grid
  $all('.scatter-point', plot).forEach(p => p.remove());

  const data = BRAND_DATA
    .map(b => {
      const entry = b.byYear[currentYear];
      if (!entry) return null;
      return {
        brand: b.brand,
        segment: b.segment,
        minimalism: b.minimalism,
        revenue: entry.revenue,
        logo: b.logo,
      };
    })
    .filter(Boolean);

  if (data.length === 0) return;

  const minMin = Math.min(...data.map(d => d.minimalism));
  const maxMin = Math.max(...data.map(d => d.minimalism));
  const minRev = Math.min(...data.map(d => d.revenue));
  const maxRev = Math.max(...data.map(d => d.revenue));

  data.forEach((d, index) => {
    const xRatio =
      maxMin === minMin ? 0.5 : (d.minimalism - minMin) / (maxMin - minMin);
    const yRatio =
      maxRev === minRev ? 0.5 : (d.revenue - minRev) / (maxRev - minRev);

    // keep some padding inside the plot
    const xPercent = 14 + xRatio * 72; // 14% → 86%
    const yPercent = 80 - yRatio * 56; // 80% → 24%

    const point = document.createElement('button');
    point.className = 'scatter-point';
    if (d.brand === selectedBrandName) {
      point.classList.add('scatter-point--selected');
    }

    point.style.setProperty('--x', `${xPercent}%`);
    point.style.setProperty('--y', `${yPercent}%`);
    point.style.setProperty('--delay', `${index * 25}ms`);

    point.title = `${d.brand} – ${d.revenue.toFixed(2)} Bn`;

    const img = document.createElement('img');
    img.src = d.logo;
    img.alt = `${d.brand} logo`;

    const label = document.createElement('span');
    label.className = 'scatter-point__label';
    label.textContent = d.brand;

    point.appendChild(img);
    point.appendChild(label);

    point.addEventListener('click', () => {
      window._selectBrandFromCharts && window._selectBrandFromCharts(d.brand, true);
    });

    plot.appendChild(point);
  });
}

// ----------------------------------------------------------------------------
// BAR CHART
// ----------------------------------------------------------------------------
function updateBarChart(animate = true) {
  const container = $('#barChart');
  if (!container) return;

  container.innerHTML = '';

  const data = BRAND_DATA
    .map(b => {
      const entry = b.byYear[currentYear];
      if (!entry) return null;
      return {
        brand: b.brand,
        segment: b.segment,
        revenue: entry.revenue,
        logo: b.logo,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.revenue - a.revenue);

  if (data.length === 0) return;

  const maxRev = Math.max(...data.map(d => d.revenue));

  data.forEach((d, index) => {
    const item = document.createElement('button');
    item.className = 'bar-chart__item';
    item.title = `${d.brand} – ${d.revenue.toFixed(2)} Bn`;
    item.dataset.brand = d.brand;

    const bar = document.createElement('div');
    bar.className = 'bar-chart__bar';
    if (d.brand === selectedBrandName) {
      bar.classList.add('bar-chart__bar--selected');
    }

    const heightPercent = (d.revenue / maxRev) * 100;
    bar.style.setProperty('--bar-height', `${heightPercent}%`);
    if (animate) {
      bar.style.setProperty('--bar-delay', `${index * 20}ms`);
    }

    const logoWrap = document.createElement('div');
    logoWrap.className = 'bar-chart__logo';
    const img = document.createElement('img');
    img.src = d.logo;
    img.alt = `${d.brand} logo`;
    logoWrap.appendChild(img);

    const label = document.createElement('span');
    label.className = 'bar-chart__label';
    label.textContent = d.brand;

    const value = document.createElement('span');
    value.className = 'bar-chart__value';
    value.textContent = d.revenue.toFixed(2);

    item.appendChild(bar);
    item.appendChild(logoWrap);
    item.appendChild(label);
    item.appendChild(value);

    item.addEventListener('click', () => {
      window._selectBrandFromCharts && window._selectBrandFromCharts(d.brand, true);
      const lineSelect = $('#lineBrandSelect');
      if (lineSelect) lineSelect.value = d.brand;
    });

    container.appendChild(item);
  });
}

// ----------------------------------------------------------------------------
// LINE CHART
// ----------------------------------------------------------------------------
function initLineBrandSelect() {
  const select = $('#lineBrandSelect');
  if (!select) return;

  select.innerHTML = BRAND_DATA.map(
    b => `<option value="${b.brand}">${b.brand}</option>`
  ).join('');

  if (getBrand(selectedBrandName)) {
    select.value = selectedBrandName;
  }

  select.addEventListener('change', () => {
    selectedBrandName = select.value;
    updateLineChart();
    updateBarChart(false);
    updateScatter();
  });
}

function updateLineChart() {
  const svg = $('#lineChartSvg');
  if (!svg) return;

  const brand = getBrand(selectedBrandName) || BRAND_DATA[0];
  const points = YEARS.map(year => ({
    year,
    revenue: brand.byYear[year].revenue,
    avg: AVG_REVENUE_BY_YEAR[year],
  }));

  svg.innerHTML = '';

  const marginX = 10;
  const minRev = GLOBAL_MIN_REV * 0.9;
  const maxRev = GLOBAL_MAX_REV * 1.05;

  const xForYear = year => {
    const index = YEARS.indexOf(year);
    const step = (100 - marginX * 2) / (YEARS.length - 1);
    return marginX + step * index;
  };

  const yForRev = rev => {
    if (maxRev === minRev) return 50;
    const ratio = (rev - minRev) / (maxRev - minRev);
    return 52 - ratio * 32; // 20..52
  };

  const brandPoints = points.map(p => `${xForYear(p.year)},${yForRev(p.revenue)}`).join(' ');
  const avgPoints = points.map(p => `${xForYear(p.year)},${yForRev(p.avg)}`).join(' ');

  // grid line (x-axis)
  const axis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axis.setAttribute('x1', String(marginX));
  axis.setAttribute('x2', String(100 - marginX));
  axis.setAttribute('y1', '52');
  axis.setAttribute('y2', '52');
  axis.setAttribute('class', 'line-chart__axis');
  svg.appendChild(axis);

  // average polyline
  const avgLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  avgLine.setAttribute('points', avgPoints);
  avgLine.setAttribute('class', 'line-chart__line line-chart__line--avg');
  svg.appendChild(avgLine);

  // brand polyline
  const brandLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  brandLine.setAttribute('points', brandPoints);
  brandLine.setAttribute('class', 'line-chart__line line-chart__line--brand');
  svg.appendChild(brandLine);

  // year ticks + labels
  points.forEach(p => {
    const x = xForYear(p.year);
    const yBrand = yForRev(p.revenue);

    const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    tick.setAttribute('x1', String(x));
    tick.setAttribute('x2', String(x));
    tick.setAttribute('y1', '52');
    tick.setAttribute('y2', '55');
    tick.setAttribute('class', 'line-chart__tick');
    svg.appendChild(tick);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', String(x));
    label.setAttribute('y', '59');
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('class', 'line-chart__year-label');
    label.textContent = String(p.year);
    svg.appendChild(label);

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', String(x));
    dot.setAttribute('cy', String(yBrand));
    dot.setAttribute('r', '1.5');
    dot.setAttribute('class', 'line-chart__dot');
    svg.appendChild(dot);

    const valueLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    valueLabel.setAttribute('x', String(x));
    valueLabel.setAttribute('y', String(yBrand - 2.3));
    valueLabel.setAttribute('text-anchor', 'middle');
    valueLabel.setAttribute('class', 'line-chart__value-label');
    valueLabel.textContent = p.revenue.toFixed(1);
    svg.appendChild(valueLabel);
  });
}

// ----------------------------------------------------------------------------
// INIT
// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initBrandGallery();
  initYearDropdown();
  initLineBrandSelect();

  updateScatter();
  updateBarChart(true);
  updateLineChart();
});
