---
title: "Panduan Penulisan Markdown untuk Blog Next.js"
date: "2025-06-23"
category: "nextjs"
# description: "Pelajari cara menulis artikel blog menggunakan Markdown dengan struktur dan sintaks yang rapi untuk Next.js App Router."
# author: "Khotami Rais"
# tags: ["Markdown", "Next.js", "Blog", "Panduan"]
---

## 📘 Pendahuluan

Markdown adalah format teks ringan yang memungkinkan kamu menulis artikel dengan gaya yang bersih dan mudah dibaca. Markdown digunakan secara luas di GitHub, Notion, dan kini sangat cocok dipakai untuk membuat **blog statis di Next.js**.

Dengan menggabungkan kekuatan Markdown dan Next.js App Router, kamu bisa menulis artikel dalam file `.md` dan menampilkannya sebagai halaman blog tanpa perlu database atau CMS.

---

## ✍️ Struktur Dasar Markdown

### 1. Heading

Gunakan tanda `#` untuk membuat judul.

```md
# Judul Utama
## Subjudul
### Sub-subjudul
```

### 2. Penekanan

**tebal**, *miring*, ~~coret~~

### 3. Daftar

- Item pertama
- Item kedua
- Item ketiga

1. Langkah pertama
2. Langkah kedua

### 4. Link dan Gambar

[Google](https://www.google.com)

![Kucing Lucu](https://placekitten.com/400/300)

### 5. Code

```js
function hello() {
  console.log("Hello Markdown!");
}
```
