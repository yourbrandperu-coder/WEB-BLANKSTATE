# SESION_FOTOS — Cola de generación Blankstate

Archivo de seguimiento para la generación de fotos con Higgsfield MCP.
**Marcar cada ítem al aprobar + anotar ruta del archivo.**

**Flujo:** un shot a la vez → generar → revisar → aprobar → marcar y avanzar al siguiente.

Ruta base: `PRODUCTOS/[POOL]/[COLOR]/1.webp … 4.webp`

**Orden fijo de shots (validado en generaciones aprobadas):**
| Archivo | Shot |
|---------|------|
| `1.webp` | Portada — Plano americano (muslos a cabeza, modelo completo) |
| `2.webp` | Galería 1 — Plano lateral (waist up, perfil) |
| `3.webp` | Galería 2 — Plano medio frontal (waist up, frontal) |
| `4.webp` | Galería 3 — Ghost mannequin (solo prenda, sin modelo) |

---

### ⏸ En STAND BY — se hacen manualmente

| Ítem | Motivo |
|------|--------|
| Pack 01 G2 — Segunda variante del plano medio Boxy frontal (todos los colores) | Se hace manualmente — G2 = versión alternativa de pose, no reemplaza la G1 |

---

## Configuración fija de generación

| Parámetro | Valor | Flag CLI |
|---|---|---|
| Modelo | GPT Image 2 | `gpt_image_2` |
| Ratio | 3:4 | `--aspect_ratio 3:4` |
| Quality | Medium | `--quality medium` |
| Resolution | 1K | `--resolution 1k` |

```bash
higgsfield generate create gpt_image_2 --prompt "..." --aspect_ratio 3:4 --quality medium --resolution 1k --wait
```

---

## Modelo de referencia activo

> Subir `MODELO 1.png` al inicio de cada sesión. El upload_id cambia por sesión.

**Archivo fuente:** `MARCA\modelos\MODELO 1.png`

| Sesión | Fecha | Upload ID | Notas |
|--------|-------|-----------|-------|
| 1 | 2026-06-08 | 9cee2529-4a81-43cd-bffd-3bcc33d54351 | MODELO 1.png |

---

## Correcciones de color y silueta — aplica a TODOS los fits

> Leer antes de generar cualquier color marcado abajo. Estas correcciones surgieron de comparar generaciones contra muestras físicas.

### Colores con tono corregido

| Color | HEX original | Problema detectado | Descripción correcta para prompt |
|-------|-------------|-------------------|----------------------------------|
| Plomo Plata | `#9FAAB5` | El HEX genera un gris azulado frío/metálico. En físico es gris claro jaspeado/heather con subtono ligeramente cálido | `light heather gray, subtle warm undertone, slight melange fabric texture, soft mid-light gray` |
| Plomo Escolar | `#6b7280` | Por confirmar con física — referencia enviada muestra gris oscuro sólido, mediano-oscuro, sin jaspeado | `medium-dark slate gray, solid uniform color, no heather, no texture` |

### Silueta Ghost Mannequin BOXY

- **Problema:** "hip level" genera polo demasiado largo — pierde la silueta cuadrada característica del Boxy.
- **Corrección activa:** usar `hem falling at natural waist level` + `garment width equal to body length creating perfect square silhouette`.
- **Referencia aprobada:** polo negro primera sesión — ancho ≈ largo, termina en cintura.

---

## OVERSIZE · Packs 01 · 08 · 09

Carpeta: `PRODUCTOS/OVERSIZE/`
Template: **Camiseta Oversized Fit** (ver foto-estudio.md)
Tela por pack: 20/1 200g (P01) · 15/1 280g (P08) · 11/1 320g (P09)
Inferior (modelo): `basic black slightly oversized jeans`
Shots: Portada · Ghost mannequin · Plano medio · Plano lateral

### Negro `#1a1a1a`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/NEGRO/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/NEGRO/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/NEGRO/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/NEGRO/4.webp`

### Blanco `#f5f5f5`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/BLANCO/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/BLANCO/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/BLANCO/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/BLANCO/4.webp`

### Acero `#2E3F5C`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/ACERO/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/ACERO/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/ACERO/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/ACERO/4.webp`

### Guinda `#7c1d2e`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/GUINDA/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/GUINDA/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/GUINDA/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/GUINDA/4.webp`

### PPT `#EDE5D8`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/PPT/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/PPT/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/PPT/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/PPT/4.webp`

### Beige `#d4c5a9`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige/4.webp`

### Beige Claro `#DDD0B3`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige Claro/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige Claro/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige Claro/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Beige Claro/4.webp`

### Plomo Plata `#9FAAB5`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Plata/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Plata/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Plata/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Plata/4.webp`

### Plomo Escolar `#3f4660` _(hex corregido de muestra física — slate oscuro con subtono azul-índigo)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Escolar/1.webp`
  - src: `hf_20260616_183133_7605c9fb-110d-422b-a602-6a5237c13377.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Escolar/2.webp`
  - src: `hf_20260616_183138_7969488e-e8bf-4602-9b6a-8ea1ba2238a9.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Escolar/3.webp`
  - src: `hf_20260616_183143_85727cf2-ced7-45d4-92cd-266b11f4ae76.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Plomo Escolar/4.webp`
  - src: `hf_20260616_183150_3ccc2ded-7f0c-456c-a294-36f0dcea0e91.png`

### Marrón `#795548`
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Marron/1.webp`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Marron/2.webp`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Marron/3.webp`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Marron/4.webp`

### English Blue `#4472C4` _(ITP-010-AZU-217 — French blue medio)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/English Blue/1.webp`
  - src: `hf_20260617_153818_46762064-2420-434d-8813-6b47ba0073a9.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/English Blue/2.webp`
  - src: `hf_20260617_153824_553b200b-de3c-44b3-bfda-0886ede63c91.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/English Blue/3.webp`
  - src: `hf_20260617_153830_b05e6f9f-7bc1-4fa6-947a-9c6512003597.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/English Blue/4.webp`
  - src: `hf_20260617_153834_a172855a-b2ef-4f89-825d-40ea419e5977.png`

### Mauve `#CCA8B4` _(ITP-01M-MOR-083 — rosa pastel chalky, desaturado, corregido final)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Mauve/1.webp`
  - src: `hf_20260617_161634_918df4ca-f056-4de1-8a93-37ffab3f5556.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Mauve/2.webp`
  - src: `hf_20260617_161642_8559c8c6-60d7-4784-9741-10be2b307300.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Mauve/3.webp`
  - src: `hf_20260617_161649_b8427b10-0ebd-4174-bf5c-e9b5704127d1.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Mauve/4.webp`
  - src: `hf_20260617_161700_a6201d15-8109-462a-b828-05b1387da7a2.png`

### Verde Manzana `#A8BB9E` _(etiq. "Mamarreo" — sage pálido/celadón)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Manzana/1.webp`
  - src: `hf_20260617_154223_0dff8d36-9a14-46d1-b7a2-9ffabdad947d.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Manzana/2.webp`
  - src: `hf_20260617_154230_d89e5097-28bc-4ecb-8f01-f9412dae7f65.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Manzana/3.webp`
  - src: `hf_20260617_154234_074d7e80-f6bb-4857-82a9-0a9b89bd1a7e.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Manzana/4.webp`
  - src: `hf_20260617_154242_055ca263-536a-4ab4-8eac-3f28103063ae.png`

### Cocoa `#C4A070` _(camel/tan cálido)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Cocoa/1.webp`
  - src: `hf_20260617_154433_bff36be9-00a0-4445-b47a-289a9f20802b.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Cocoa/2.webp`
  - src: `hf_20260617_154439_6233fa91-a7de-4f3c-85b8-eba6a3301326.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Cocoa/3.webp`
  - src: `hf_20260617_154444_eb9c6972-7834-480c-9c5e-e10ff0ad4676.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Cocoa/4.webp`
  - src: `hf_20260617_154453_e488556f-e11e-4b29-91d9-0f1d89518ca2.png`

### Verde Militar `#8B9E7A` _(ITP-010-VER-307 — sage pálido/caqui suave, corregido contra muestra física)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Militar/1.webp`
  - src: `hf_20260617_160800_f0e0ab94-34d8-43c3-ab5e-63f38d90a967.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Militar/2.webp`
  - src: `hf_20260617_160808_a89a6213-1d05-41e8-b82b-f760cebbb64b.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Militar/3.webp`
  - src: `hf_20260617_160814_d5d376d2-289b-46d7-be35-aa456f965c33.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Militar/4.webp`
  - src: `hf_20260617_160821_b80d8893-0eb5-4d7e-9a5f-cf6648f2d0c9.png`

### Verde Botella `#1f4a2e` _(V.Botella 757 — verde bosque muy oscuro)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Botella/1.webp`
  - src: `hf_20260617_154843_6457f6fe-55ea-4dd3-bb94-00671f4599da.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Botella/2.webp`
  - src: `hf_20260617_154851_5679ac47-b42b-47da-9d4f-0bb3085128f1.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Botella/3.webp`
  - src: `hf_20260617_154856_cbb0f049-e2a8-413c-a02a-eaf2308d5550.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Verde Botella/4.webp`
  - src: `hf_20260617_154858_087f09df-cd1c-4b35-b2c4-2a64d1f44189.png`

### Celeste `#C4D4DC` _(ITP-02C CEL-002 — azul pálido neblinoso chalky, casi blanco con toque azul-gris, corregido final)_
- [x] Portada — Plano americano Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Celeste/1.webp`
  - src: `hf_20260617_161705_4ac3d3fb-7150-4fef-bc76-6aee55689046.png`
- [x] Galería 1 — Plano lateral Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Celeste/2.webp`
  - src: `hf_20260617_161711_ed668577-8129-4d31-afb6-133e5b17f5fb.png`
- [x] Galería 2 — Plano medio frontal Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Celeste/3.webp`
  - src: `hf_20260617_161718_a6cbd1cd-7ae7-4674-bca9-394e066150bc.png`
- [x] Galería 3 — Ghost mannequin Oversize
  - ruta: `PRODUCTOS/OVERSIZE/Celeste/4.webp`
  - src: `hf_20260617_161721_6558b5df-78f4-4afb-896c-cbc2bb4137be.png`

---

## BOXY · Packs 01 · 08 · 09

Carpeta: `PRODUCTOS/BOXY/`
Template: **Camiseta Boxy Fit** (ver foto-estudio.md)
Inferior (modelo): `basic black slightly oversized jeans`
Shots: Portada · Ghost mannequin · Plano medio · Plano lateral

### Negro `#1a1a1a`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Negro/1.webp`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Negro/2.webp`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Negro/3.webp`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Negro/4.webp`

### Blanco `#f5f5f5`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Blanco/1.webp`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Blanco/2.webp`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Blanco/3.webp`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Blanco/4.webp`

### PPT `#EDE5D8`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/PPT/1.webp`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/PPT/2.webp`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/PPT/3.webp`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/PPT/4.webp`

### Beige `#d4c5a9`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Beige/1.webp`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Beige/2.webp`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Beige/3.webp`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Beige/4.webp`

### Beige Claro `#DDD0B3`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Beige Claro/1.webp`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Beige Claro/2.webp`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Beige Claro/3.webp`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Beige Claro/4.webp`

### Plomo Plata `#9FAAB5`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Plata/1.webp`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Plata/2.webp`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Plata/3.webp`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Plata/4.webp`

### Plomo Escolar `#6b7280`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Escolar/1.webp`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Escolar/2.webp`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Escolar/3.webp`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Plomo Escolar/4.webp`

### Marrón `#795548`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Marron/1.webp`
  - src: `hf_20260618_175346_e0262d25-7d42-4713-9274-c813322182af.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Marron/2.webp`
  - src: `hf_20260618_175352_ea9049e4-6eff-484d-be47-6f413ed4461c.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Marron/3.webp`
  - src: `hf_20260618_175358_461abf87-9682-45b5-a22f-40f9d792489a.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Marron/4.webp`
  - src: `hf_20260618_175407_1253620b-26c9-4e31-94c6-0aa30ece3bc6.png`

### English Blue `#4472C4` _(French blue medio — corregido desde #1e3a5f)_
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/English Blue/1.webp`
  - src: `hf_20260618_175658_d824be75-f9e4-452b-ba23-05e6d3434c12.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/English Blue/2.webp`
  - src: `hf_20260618_175706_dda8b0c8-ba72-4a34-be17-2e3aea0467ca.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/English Blue/3.webp`
  - src: `hf_20260618_175711_83362776-5924-41e5-96b9-6449db7dcfed.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/English Blue/4.webp`
  - src: `hf_20260618_175719_a80a6d65-0c94-492a-ad42-4c3f67021834.png`

### Mauve `#C4849A` _(corregido desde #c8a0a0 — rosa dusty cálido)_
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Mauve/1.webp`
  - src: `hf_20260618_175904_6c5d1c06-e3a5-4f60-a509-a80dcd333df6.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Mauve/2.webp`
  - src: `hf_20260618_175912_bcae15ab-22ab-44e4-b156-376fe4c28930.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Mauve/3.webp`
  - src: `hf_20260618_175917_16d59589-ed3d-498a-b8bd-95debde379b1.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Mauve/4.webp`
  - src: `hf_20260618_175925_d269fa38-b196-4eb8-bd86-868b9d8da33d.png`

### Guinda `#7c1d2e`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Guinda/1.webp`
  - src: `hf_20260618_180142_cfb1ffdb-970d-43bf-8a99-328167f55762.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Guinda/2.webp`
  - src: `hf_20260618_180149_a154c0cc-395f-44d8-80f0-0ef877a7f79b.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Guinda/3.webp`
  - src: `hf_20260618_180155_ccb762ab-363b-435e-92e5-dacec20b1890.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Guinda/4.webp`
  - src: `hf_20260618_180202_2081bda0-7dbe-49d8-8d94-7d434f77f753.png`

### Verde Botella `#1f4a2e`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Botella/1.webp`
  - src: `hf_20260618_181558_780ff9fc-9a92-41b0-82c6-3a2b95a9e406.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Botella/2.webp`
  - src: `hf_20260618_181609_17e28552-0508-487a-8651-f276b182b2d5.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Botella/3.webp`
  - src: `hf_20260618_181619_ac2ec443-128a-4150-ab83-fddb7c454ae6.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Botella/4.webp`
  - src: `hf_20260618_181631_cdc119d2-81b3-4a5e-b34e-409fc530080e.png`

### Verde Militar `#4a5038`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Militar/1.webp`
  - src: `hf_20260618_181644_6636fcd2-1883-4b5d-92be-d9aceeefb37f.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Militar/2.webp`
  - src: `hf_20260618_181653_7f07e1ec-37df-4066-aa0e-1fd9da368c69.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Militar/3.webp`
  - src: `hf_20260618_181704_87fef242-427a-4c05-86c2-a1bbe53b683f.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Verde Militar/4.webp`
  - src: `hf_20260618_182427_49951644-abee-4575-833b-9140f015eceb.png`

### Celeste `#A8C4CF`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Celeste/1.webp`
  - src: `hf_20260618_183621_01291c45-2aa3-45c4-b57b-99faa537db78.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Celeste/2.webp`
  - src: `hf_20260618_183630_cea55948-b47f-463e-9660-c918c4dfa7b1.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Celeste/3.webp`
  - src: `hf_20260618_183640_3646477a-3924-4279-b513-92ebb98bd3c6.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Celeste/4.webp`
  - src: `hf_20260618_183650_8ff241b7-7b61-43b3-8122-98ee1993bfc8.png`

### Acero `#2E3F5C`
- [x] Portada — Plano americano Boxy
  - ruta: `PRODUCTOS/BOXY/Acero/1.webp`
  - src: `hf_20260618_183702_d27255e5-db41-4366-a106-12b99ae3bacf.png`
- [x] Galería 1 — Plano lateral Boxy
  - ruta: `PRODUCTOS/BOXY/Acero/2.webp`
  - src: `hf_20260618_183713_3ddaab23-0145-4214-99c7-fb3e2c9b66f1.png`
- [x] Galería 2 — Plano medio frontal Boxy
  - ruta: `PRODUCTOS/BOXY/Acero/3.webp`
  - src: `hf_20260618_183857_f3b8deca-db27-4374-97f5-eb67b1750c43.png`
- [x] Galería 3 — Ghost mannequin Boxy
  - ruta: `PRODUCTOS/BOXY/Acero/4.webp`
  - src: `hf_20260618_183733_e8a76085-69ad-461b-a7cd-fdee266f37fd.png`

---

## BOXY LARGO · Pack 01

Carpeta: `PRODUCTOS/BOXY-LARGO/`
Template: **Camiseta Boxy Fit largo** (ver foto-estudio.md)
Inferior (modelo): `basic black slightly oversized jeans`
Shots: Portada · Ghost mannequin · Plano medio · Plano lateral

### Negro `#1a1a1a`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Blanco `#f5f5f5`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### PPT `#EDE5D8`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Beige `#d4c5a9`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Plomo Plata `#9FAAB5`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Plomo Escolar `#6b7280`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Marrón `#795548`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### English Blue `#1e3a5f`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Mauve `#c8a0a0`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Verde Militar `#4a5c3c`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Verde Botella `#1f4a2e`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Celeste `#88C0D0`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

### Acero `#2E3F5C`
- [ ] Portada — Plano americano Boxy Largo
  - ruta:
- [ ] Galería 1 — Plano lateral Boxy Largo
  - ruta:
- [ ] Galería 2 — Plano medio frontal Boxy Largo
  - ruta:
- [ ] Galería 3 — Ghost mannequin Boxy Largo
  - ruta:

---

## REGULAR · Packs 01 · 08

Carpeta: `PRODUCTOS/REGULAR/`
Template: **Regular Fit** (ver foto-estudio.md)
Inferior (modelo): `basic black slightly oversized jeans`
Shots: Portada · Ghost mannequin · Plano medio · Plano lateral

### Negro `#1a1a1a`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Blanco `#f5f5f5`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### PPT `#EDE5D8`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Beige `#d4c5a9`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Beige Claro `#DDD0B3`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Plomo Plata `#9FAAB5`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Plomo Escolar `#6b7280`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Marrón `#795548`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### English Blue `#1e3a5f`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Guinda `#7c1d2e`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Mauve `#c8a0a0`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Verde Manzana `#7DB868`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Cocoa `#8C6448`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Verde Militar `#4a5c3c`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Verde Botella `#1f4a2e`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Celeste `#88C0D0`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

### Acero `#2E3F5C`
- [ ] Portada — Plano americano Regular
  - ruta:
- [ ] Galería 1 — Plano lateral Regular
  - ruta:
- [ ] Galería 2 — Plano medio frontal Regular
  - ruta:
- [ ] Galería 3 — Ghost mannequin Regular
  - ruta:

---

## DAMA · Pack 02

Carpeta: `PRODUCTOS/DAMA/`
Template: **Corte Dama** (ver foto-estudio.md)
Modelo: **femenino** — diferente al resto de pools
Inferior (modelo): `basic black slim jeans`
Shots: Portada · Ghost mannequin · Plano medio · Plano lateral

### Negro `#1a1a1a`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Blanco `#f5f5f5`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### PPT `#EDE5D8`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Beige Claro `#d4c5a9`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Mauve `#c8a0a0`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Plomo Escolar `#6b7280`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### English Blue `#1e3a5f`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Guinda `#7c1d2e`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Celeste `#88C0D0`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Verde Manzana `#7DB868`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

### Rosado `#f9a8d4`
- [ ] Portada — Plano americano Dama
  - ruta:
- [ ] Galería 1 — Plano lateral Dama
  - ruta:
- [ ] Galería 2 — Plano medio frontal Dama
  - ruta:
- [ ] Galería 3 — Ghost mannequin Dama
  - ruta:

---

## ACID WASH · Pack 03

Carpeta: `PRODUCTOS/ACID-WASH/`
Template: **Acid Wash Boxy** (ver foto-estudio.md)
Tela: Jersey 20/1 220g con tratamiento acid wash
Inferior (modelo): `basic black slightly oversized jeans`
⚠ Galería 3: Luz B raking lateral — resaltar textura acid wash en brazo
Shots: Portada · Ghost mannequin (luz B, textura visible) · Plano medio · Plano lateral (luz B)

### Negro `#1a1a1a`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Guinda `#7c1d2e`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Rojo `#C0392B`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Morado `#7c3aed`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Marrón `#7c5c3e`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Plomo Plata `#9FAAB5`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Chicle `#f48fb1`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Gris `#9ca3af`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Acero `#6B8599`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Verde `#4A7C59`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

### Turquesa `#00897B`
- [ ] Portada — Plano americano Boxy acid wash
  - ruta:
- [ ] Galería 1 — Plano lateral (textura acid wash visible en brazo · Luz B)
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin (luz B raking, textura visible)
  - ruta:

---

## SLIM FIT PIMA · Pack 07 ✅ Completo

Carpeta: `PRODUCTOS/PIMA SLIM FIT/`
Template: **Slim Fit Pima** (ver foto-estudio.md)
Tela: 100% algodón Pima peruano
Inferior (modelo): `dark charcoal wide-leg pleated trousers with generous oversized silhouette and clean drape, black leather belt`

### Azul `#1a3a6e` ✅
- [x] Portada — Plano americano Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/AZUL/1.webp`
- [x] Galería 1 — Plano lateral Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/AZUL/2.webp`
- [x] Galería 2 — Plano medio frontal Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/AZUL/3.webp`
- [x] Galería 3 — Ghost mannequin Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/AZUL/4.webp`

### Negro `#111111` ✅
- [x] Portada — Plano americano Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/NEGRO/1.webp`
- [x] Galería 1 — Plano lateral Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/NEGRO/2.webp`
- [x] Galería 2 — Plano medio frontal Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/NEGRO/3.webp`
- [x] Galería 3 — Ghost mannequin Slim Fit
  - ruta: `PRODUCTOS/PIMA SLIM FIT/NEGRO/4.webp`

---

## HOODIE BOXY · Pack 06

Carpeta: `PRODUCTOS/HOODIE-BOXY/`
Template: **Hoodie Boxy Fit Franela** (ver foto-estudio.md)
Tela: Franela 24/1 320g
Inferior (modelo): `wide-leg raw denim jeans, heavy dark indigo unwashed raw denim, wide straight leg with clean natural drape`
Shots: Portada · Ghost mannequin · Plano medio · Plano lateral

### Negro `#1a1a1a`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Plomo Escolar `#6b7280`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Plomo Plata `#9FAAB5`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Marrón `#795548`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Verde Botella `#1f4a2e`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Acero `#2E3F5C`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### PPT `#EDE5D8`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Lila 69 `#C9B1D9`
- [ ] Portada — Plano americano Hoodie Boxy
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Boxy
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

---

## HOODIE OVERSIZE · Packs 06 · 10

Carpeta: `PRODUCTOS/HOODIE-OVERSIZE/`
Template: **Hoodie Oversize Franela** (ver foto-estudio.md)
Tela: Franela 24/1 320g
Inferior (modelo): `wide-leg raw denim jeans, heavy dark indigo unwashed raw denim, wide straight leg with clean natural drape`
Shots: Portada · Ghost mannequin · Plano medio · Plano lateral

### Negro `#1a1a1a`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Plomo Escolar `#6b7280`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Plomo Plata `#9FAAB5`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Marrón `#795548`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Verde Botella `#1f4a2e`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Verde Militar `#4a5c3c`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### PPT `#EDE5D8`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Beige `#d4c5a9`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Acero `#2E3F5C`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Celeste `#88C0D0`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Denim `#5B7FA6`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Azul `#2B7FD4`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Lila 69 `#C9B1D9`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Lila Oscuro `#8A6BA8`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

### Mauve `#c8a0a0`
- [ ] Portada — Plano americano Hoodie Oversize
  - ruta:
- [ ] Galería 1 — Plano lateral Hoodie Oversize
  - ruta:
- [ ] Galería 2 — Plano medio frontal
  - ruta:
- [ ] Galería 3 — Ghost mannequin
  - ruta:

---

## PANTALÓN FRANELA · Pack 10

Carpeta: `PRODUCTOS/PANTS-FRANELA/`
Template: **Pantalón Franela corte recto** (ver foto-estudio.md)
Tela: Franela 24/1 350g, corte recto
Shots: Outfit completo · Detalle pantalón · Plano lateral · Pose abierta

### Negro `#1a1a1a`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Plomo Escolar `#6b7280`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Plomo Plata `#9FAAB5`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Marrón `#795548`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Verde Botella `#1f4a2e`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Verde Militar `#4a5c3c`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Beige `#d4c5a9`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Celeste `#88C0D0`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Azul `#2B7FD4`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### PPT `#EDE5D8`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

### Acero `#2E3F5C`
- [ ] Portada — Outfit completo (hoodie + pantalón + básico encima)
  - ruta:
- [ ] Galería 1 — Plano cercano solo pantalón (detalle tela y caída)
  - ruta:
- [ ] Galería 2 — Plano lateral solo pantalón
  - ruta:
- [ ] Galería 3 — Toma abierta pose natural (mano en bolsillo trasero)
  - ruta:

---

## PACK 10 OUTFIT · Invierno

Carpeta: `PRODUCTOS/OUTFIT-INVIERNO/`
Prendas: Hoodie Franela (Boxy o Oversize) + Pantalón Franela corte recto + polo 20/1 de regalo visible
⚠ Template ad hoc — crear y validar con 1 color antes de generar los 11
Shots: Portada outfit completo · Plano medio outfit

> Galería 1 usa ghost mannequin hoodie → referencia a HOODIE-BOXY o HOODIE-OVERSIZE.
> Galería 2 usa ghost mannequin pantalón → referencia a PANTS-FRANELA.
> Generar esta sección después de tener ambos pools completos.

### Negro `#1a1a1a`
- [ ] Portada — Plano americano outfit completo (hoodie + pantalón + polo regalo)
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Plomo Escolar `#6b7280`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Plomo Plata `#9FAAB5`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Marrón `#795548`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Verde Botella `#1f4a2e`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Verde Militar `#4a5c3c`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Beige `#d4c5a9`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Celeste `#88C0D0`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Azul `#2B7FD4`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### PPT `#EDE5D8`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

### Acero `#2E3F5C`
- [ ] Portada — Plano americano outfit completo
  - ruta:
- [ ] Galería 3 — Plano lateral outfit
  - ruta:

---

## Totales

| Pool | Packs | Colores | Shots totales | Hecho | Pendiente |
|------|-------|---------|---------------|-------|-----------|
| OVERSIZE | 01 · 08 · 09 | 17 | 68 | 68 | 0 ✅ |
| BOXY | 01 · 08 · 09 | 15 | 60 | 60 | 0 ✅ |
| SLIM FIT PIMA | 07 | 2 | 8 | 8 | 0 ✅ |
| BOXY LARGO | 01 | 13 | 52 | 0 | 52 |
| REGULAR | 01 · 08 | 17 | 68 | 0 | 68 |
| DAMA | 02 | 11 | 44 | 0 | 44 |
| ACID WASH | 03 | 11 | 44 | 0 | 44 |
| HOODIE BOXY | 06 | 8 | 32 | 0 | 32 |
| HOODIE OVERSIZE | 06 · 10 | 15 | 60 | 0 | 60 |
| PANTALÓN FRANELA | 10 | 11 | 44 | 0 | 44 |
| OUTFIT INVIERNO | 10 | 11 | 22 | 0 | 22 |
| **Total** | | **131** | **502** | **136** | **366** |
