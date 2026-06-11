# FUZE Website — Image Replacement Guide

Each dashed placeholder box in the website has a label and a spec badge. Here's exactly what to replace each one with, and how to do it.

---

## How to Replace an Image

In the HTML file, find the `ImgPlaceholder` component and replace the entire `<ImgPlaceholder .../>` tag with a standard `<img>` tag:

```jsx
// BEFORE (placeholder)
<ImgPlaceholder height={340} label="Hero Campaign Image" spec="1200×900px"/>

// AFTER (your real image)
<img src="./images/hero-activation.jpg" alt="Fuze brand activation" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
```

Create an `images/` folder next to the HTML file and drop your photos there.

---

## Image Slots Reference

### Hero Section
| Slot | Label | Recommended Size | What to Use |
|------|-------|-----------------|-------------|
| Hero main image | "Hero Campaign Image" | **1200×900px** | Your most impressive activation photo — a crowd, a brand installation, or an event setup. High energy. Well-lit. |

---

### Why FUZE Section
| Slot | Label | Recommended Size | What to Use |
|------|-------|-----------------|-------------|
| Main stacked image | "Team or Activation Photo" | **900×700px** | Your team in the field, or a behind-the-scenes event setup shot |
| Small accent image | "Secondary Image" | **400×400px** | A close-up detail: branded materials, a happy crowd, a product display |

---

### Solutions / Services Section
Each of the 6 service cards has a small image at the bottom (120px tall):

| Card | Label | Recommended Size | What to Use |
|------|-------|-----------------|-------------|
| Brand Activations | "Brand activation event photo" | **600×300px** | A busy activation tent or consumer engagement moment |
| Field Marketing | "Field marketing team photo" | **600×300px** | Your team branded and in position at a market |
| Product Launches | "Product launch event photo" | **600×300px** | A launch event or product unveiling |
| Retail Activations | "Retail activation photo" | **600×300px** | An in-store or point-of-sale activation setup |
| OOH + BTL Integration | "OOH installation photo" | **600×300px** | A branded outdoor installation (the Sprite/Mastercard work is perfect here) |
| Campaign Analytics | "Analytics dashboard screenshot" | **600×300px** | A screenshot of your reporting dashboard or a campaign results slide |

---

### Case Studies Section
Each case card has a 200px-tall image at the top:

| Card | Label | Recommended Size | What to Use |
|------|-------|-----------------|-------------|
| Africa Re | "Africa Re CEO Breakfast event photo" | **800×450px** | Use the JW Marriott ballroom setup photo from the PDF (page 16–17) |
| Sprite | "Sprite experiential installation in Nairobi CBD" | **800×450px** | The CBD installation photo from the PDF (page 23–24) |
| KCB Safari Rally | "KCB Safari Rally KCB Den activation photo" | **800×450px** | The tyre arch / Den photo from the PDF (page 36–37) |
| Nellions | "Nellions 10 Years anniversary event photo" | **800×450px** | The gala night crowd photo from the PDF (page 31) |
| Mastercard | "Mastercard Priceless landmark installation" | **800×450px** | The viewpoint installation wide shot from the PDF (page 43–44) |

---

### About FUZE Section
| Slot | Label | Recommended Size | What to Use |
|------|-------|-----------------|-------------|
| Main image | "Company / Team Photo" | **900×700px** | A strong team photo, your office, or a flagship activation aerial shot |
| Small image | "Award / Recognition Photo" | **400×400px** | A trophy, press feature, or company milestone photo |

---

### Contact Section
| Slot | Label | Recommended Size | What to Use |
|------|-------|-----------------|-------------|
| Office photo | "Office / Team Photo" | **700×320px** | Optional but recommended — your office exterior, reception, or a candid team photo. Makes the contact section more personal. |

---

## Photo Quality Tips

- **Minimum resolution:** 1200px wide for anything full-width; 600px for smaller cards
- **Format:** JPG for photos (smaller file size), PNG if you need transparency
- **Aspect ratios:** Match the spec closely — the CSS uses `objectFit: cover` so images will crop to fit
- **Brightness:** Avoid very dark photos for the service and case study cards — the overlaid text needs contrast
- **File size:** Compress all photos before uploading. Use [Squoosh](https://squoosh.app) or [TinyJPG](https://tinyjpg.com) — aim for under 300KB per image

---

## Quick Extract from the PDF

The activation photos in `FBL_Activations_Revised__compressed.pdf` are already perfect for most slots. Export at high resolution:
- Pages 16–17 → Africa Re case study card
- Pages 23–24 → Sprite case study card  
- Pages 36–37 → KCB Safari Rally case study card
- Pages 30–31 → Nellions case study card
- Pages 43–44 → Mastercard case study card
- Pages 37 (aerial KCB setup) → Hero image candidate
