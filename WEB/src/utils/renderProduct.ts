// Generadores de HTML para la ficha de producto (/packs/[id]).
// Se usan tanto en build time (Astro, para pintar el estado inicial en el HTML
// estático) como en el cliente (mismo módulo, importado por el script de la
// página) para que el re-render tras interactuar sea idéntico al SSR — cero
// duplicación de plantillas, cero riesgo de que diverjan.

import type { Pack, SizeGuide, SizeGuideData } from '../data/packs';

export function buildGuideTableHtml(guideData: SizeGuideData): string {
  const noteHtml = guideData.note ? `<p class="size-guide-note">${guideData.note}</p>` : '';
  const thead = guideData.cols.map(c => `<th>${c}</th>`).join('');
  const tbody = guideData.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  return `${noteHtml}<table class="size-guide-table"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table><p class="size-guide-disclaimer">*Las medidas pueden variar ±1-2cm</p>`;
}

export function getFitOptionsForUnit(pack: Pack, fits: string[], ui: number): string[] {
  if (pack.unitFits) return pack.unitFits[ui] || [];
  return fits || [];
}

export function getSwatchesForFit(pack: Pack, fit: string | null) {
  if (pack.swatchesByFit && fit && pack.swatchesByFit[fit]) return pack.swatchesByFit[fit];
  return pack.colors || pack.swatches || null;
}

export function getSizesForFit(guide: SizeGuide | null, fit: string | null): string[] {
  if (guide && guide.byFit) {
    const fitGuide = (fit && guide.byFit[fit]) || Object.values(guide.byFit)[0];
    return fitGuide.rows.map(r => r[0]);
  }
  if (guide && guide.rows) return guide.rows.map(r => r[0]);
  return ['S', 'M', 'L', 'XL'];
}

export function getUnitLabels(pack: Pack): string[] {
  return pack.unitLabels ||
    Array.from({ length: pack.unitCount || 1 }, (_, i) => `${pack.unitType || 'Prenda'} ${i + 1}`);
}

export function buildInfoHtml(pack: Pack, fits: string[], disabledFits: string[], guide: SizeGuide | null): string {
  const tagLine = `Pack ${pack.num}`;
  const badgeHtml = pack.badge ? `<span class="info-badge">${pack.badge}</span>` : '';

  const fitOptions = getFitOptionsForUnit(pack, fits, 0);
  const colorItems = getSwatchesForFit(pack, fitOptions[0] || null);
  const sizeRows = getSizesForFit(guide, fitOptions[0] || null);
  const labels = getUnitLabels(pack);

  let unitsSection = '';
  labels.forEach((label, ui) => {
    let rowHtml = `<div class="unit-row" data-unit="${ui}">`;
    rowHtml += `<p class="unit-row-label">${label}</p>`;
    if (colorItems) {
      const unitInitColors = getSwatchesForFit(pack, fitOptions[0] || null)!;
      rowHtml += `<div class="unit-colors-row" id="unit-colors-row-${ui}">`;
      unitInitColors.forEach((c, ci) => {
        rowHtml += `<button class="unit-color-dot${ci === 0 ? ' active' : ''}" style="background:${c.hex}" data-unit="${ui}" data-color="${ci}" aria-label="${c.name}" title="${c.name}"></button>`;
      });
      rowHtml += `</div><span class="unit-color-name" id="unit-color-name-${ui}">${unitInitColors[0].name}</span>`;
    }
    const uFitOptions = getFitOptionsForUnit(pack, fits, ui);
    if (uFitOptions.length > 0) {
      rowHtml += `<div class="unit-fit-row">`;
      uFitOptions.forEach((f, fi) => {
        const dis = disabledFits.includes(f);
        rowHtml += `<button class="unit-fit-btn${fi === 0 ? ' active' : ''}" data-unit="${ui}" data-fit="${f}"${dis ? ' disabled title="Próximamente"' : ''}>${f}</button>`;
      });
      rowHtml += `</div>`;
    }
    rowHtml += `<div class="unit-size-row">`;
    sizeRows.forEach((s, si) => {
      rowHtml += `<button class="unit-size-btn${si === 0 ? ' active' : ''}" data-unit="${ui}" data-size="${s}">${s}</button>`;
    });
    rowHtml += `</div></div>`;
    unitsSection += rowHtml;
  });

  if (pack.colorsNote) {
    unitsSection = `<p class="info-colors-note">${pack.colorsNote}</p>` + unitsSection;
  }

  let guideHtml = '';
  if (guide) {
    const initialData = guide.byFit
      ? (guide.byFit[fitOptions[0]] || Object.values(guide.byFit)[0])
      : (guide as SizeGuideData);
    guideHtml = `
        <div class="size-guide-wrap">
          <p class="size-guide-question">¿No sabes qué talla te quedará mejor?</p>
          <button class="size-guide-toggle" id="size-guide-toggle">Consulta aquí <span class="size-guide-toggle-arrow">▾</span></button>
          <div class="size-guide-panel" id="size-guide-panel">
            <div class="size-guide-inner" id="size-guide-inner">${buildGuideTableHtml(initialData)}</div>
          </div>
        </div>`;
  }

  return `
      <p class="info-tag">${tagLine}</p>
      ${badgeHtml}
      <h1 class="info-title">${pack.name}</h1>
      <div class="info-price-row">
        <span class="info-price">${pack.price}</span>
        <span class="info-qty">${pack.qty}</span>
      </div>
      <div class="units-section">${unitsSection}</div>
      ${guideHtml}
      <div class="info-divider"></div>
      <p class="info-desc">${pack.desc}</p>
      <div class="info-spacer"></div>
      <button id="btn-add-cart">Agregar al carrito</button>`;
}

export function buildVisualColorHtml(pack: Pack): string {
  const first = pack.swatches![0];
  return `<div class="visual-color-bg" id="visual-bg" style="background:${first.hex}"><span class="visual-pack-num">${pack.num}</span></div>`;
}

export interface FlatColorPhoto { ci: number; pi: number; src: string; }

export function flattenColorPhotos(pack: Pack): FlatColorPhoto[] {
  const flatPhotos: FlatColorPhoto[] = [];
  pack.colors!.forEach((color, ci) => {
    color.photos.forEach((src, pi) => flatPhotos.push({ ci, pi, src }));
  });
  return flatPhotos;
}

export function buildVisualGalleryHtml(pack: Pack): string {
  const flatPhotos = flattenColorPhotos(pack);
  let html = '<div class="visual-gallery" id="visual-gallery">';
  flatPhotos.forEach((p, fi) => {
    html += `<img class="gallery-img${fi === 0 ? ' active' : ''}" src="${p.src}" alt="Pack ${pack.num} ${pack.colors![p.ci].name} ${p.pi + 1}" data-fi="${fi}" />`;
  });
  html += '</div>';
  html += `<button class="gallery-nav-btn gallery-nav-prev" id="gallery-prev" aria-label="Anterior">&#8249;</button><button class="gallery-nav-btn gallery-nav-next" id="gallery-next" aria-label="Siguiente">&#8250;</button>`;
  html += `<span class="gallery-counter-pill" id="gallery-counter-pill"></span>`;
  return html;
}

export interface FlatFitPhoto { colorName: string; src: string; }

export function flattenFitPhotos(photosByColor: Record<string, string[]>): FlatFitPhoto[] {
  const flatPhotos: FlatFitPhoto[] = [];
  Object.entries(photosByColor).forEach(([colorName, photos]) => {
    photos.forEach(src => flatPhotos.push({ colorName, src }));
  });
  return flatPhotos;
}

export function buildVisualFitPhotosHtml(pack: Pack, fit: string, photosByColor: Record<string, string[]>): string {
  const flatPhotos = flattenFitPhotos(photosByColor);
  if (!flatPhotos.length) return buildVisualColorHtml(pack);

  let html = '<div class="visual-gallery" id="visual-gallery">';
  flatPhotos.forEach((p, fi) => {
    html += `<img class="gallery-img${fi === 0 ? ' active' : ''}" src="${p.src}" alt="Pack ${pack.num} ${fit} ${p.colorName}" data-fi="${fi}" />`;
  });
  html += '</div>';
  if (flatPhotos.length > 1) {
    html += `<button class="gallery-nav-btn gallery-nav-prev" id="gallery-prev" aria-label="Anterior">&#8249;</button><button class="gallery-nav-btn gallery-nav-next" id="gallery-next" aria-label="Siguiente">&#8250;</button>`;
  }
  html += `<span class="gallery-counter-pill" id="gallery-counter-pill"></span>`;
  return html;
}

// Replica la decisión de "MAIN RENDER" del script cliente — misma prioridad:
// fotos por color > fotos por fit > fondo de color plano.
export function getInitialVisualHtml(pack: Pack, fits: string[], fitPhotos: Record<string, Record<string, string[]>>): string {
  if (pack.colors) return buildVisualGalleryHtml(pack);
  if (fitPhotos && Object.keys(fitPhotos).length) {
    const fit0 = fits[0] || null;
    const fitEntry = fit0 ? fitPhotos[fit0] : null;
    if (fitEntry && Object.keys(fitEntry).length > 0) return buildVisualFitPhotosHtml(pack, fit0!, fitEntry);
    return buildVisualColorHtml(pack);
  }
  return buildVisualColorHtml(pack);
}
