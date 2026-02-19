export type Language = "en" | "ms";

export const translations = {
  en: {
    nav: {
      links: {
        story: "Our Story",
        menu: "Menu",
        gallery: "Gallery",
        reviews: "Reviews",
        contact: "Contact",
      },
      visitUs: "Visit Us",
      languageLabel: "Language",
    },
    seasonalBanner: {
      title: "Ramadhan Special:",
      message: "Open for Takeaway",
      hours: "4:00 PM - 7:30 PM",
      closeAriaLabel: "Close banner",
    },
    hero: {
      imageAlt: "Authentic Malaysian Cuisine",
      since: "Since 2012",
      titleLine1: "The Authentic Taste",
      titleAccent: "of Pahang",
      description:
        "Experience the legendary Patin Tempoyak, crafted with fermented durian and traditional spices. A culinary journey like no other.",
      viewMenu: "View Our Menu",
      findUs: "Find Us",
      scroll: "Scroll",
    },
    ramadhanPromo: {
      badge: "Ramadhan Special",
      titleLine1: "Berbuka with",
      titleAccent: "Authentic Flavors",
      description:
        "Experience the comfort of hearty, delicious Patin Tempoyak for your Iftar. We are open exclusively for Takeaway during this holy month.",
      hoursLabel: "Hours",
      hoursValue: "4PM - 7:30PM",
      availabilityLabel: "Availability",
      availabilityValue: "Takeaway Only",
      imageAlt: "Patin Tempoyak Iftar",
      imageCaption: "Perfect for Iftar",
    },
    about: {
      imageAlt1: "Chef preparing food",
      imageAlt2: "Ingredients",
      eyebrow: "Our Story",
      titleLine1: "Crafting Heritage,",
      titleAccent: "Serving Passion.",
      paragraph1:
        "At Patin Tempoyak Kak Zee, we believe in the power of authentic flavors. Our journey began with a simple mission: to bring the true taste of Pahang's river heritage to your table.",
      paragraph2:
        "Specializing in silver catfish (Patin) cooked in a rich, tangy fermented durian paste (Tempoyak), every dish is a labor of love, prepared with locally sourced ingredients and generations-old recipes.",
      quote:
        "We don't just serve food; we serve memories of a traditional kampung feast.",
    },
    menu: {
      eyebrow: "Chef's Selection",
      title: "Signature Dishes",
      dishes: [
        {
          id: 1,
          name: "Patin Tempoyak",
          description:
            "Silver catfish cooked in a rich, tangy fermented durian broth. A Pahang signature.",
          tags: ["Signature", "Spicy", "Authentic"],
        },
        {
          id: 2,
          name: "Ayam Penyet",
          description:
            "Smashed fried chicken served with spicy sambal, tempeh, tofu, and fresh ulam.",
          tags: ["Popular", "Crispy", "Spicy"],
        },
      ],
    },
    gallery: {
      eyebrow: "Atmosphere",
      title: "Visual Feast",
      description:
        "A glimpse into our kitchen and the vibrant colors of our dishes.",
      imageAltPrefix: "Gallery image",
    },
    reviews: {
      title: "Voice of Guests",
      items: [
        {
          id: 1,
          name: "Abu Supian Mohammad",
          source: "Google Reviews",
          text: "They even had grilled coconut-milk dishes today. Absolutely solid.",
          rating: 5,
        },
        {
          id: 2,
          name: "Mama Bulus a.k.a Adiela Arus",
          source: "Google Reviews",
          text: "Whenever I pass by or head to Sabak Bernam, I really hope to have lunch here. The kampung dishes are super delicious. My favorite is the fried paper prawns. Prices are reasonable too. If I pass this area, I do not even think about other places to eat.",
          rating: 5,
        },
        {
          id: 3,
          name: "Cotton Nice",
          source: "Google Reviews",
          text: "Wow, the Patin Tempoyak tastes like Temerloh style. Authentic kampung dishes that are hard to find in the city. This place serves locals, so the prices are very worth it.",
          rating: 5,
        },
        {
          id: 4,
          name: "Gufron Hafiz",
          source: "Google Reviews",
          text: "There are many choices of dishes and all are tasty. The ulam and sambal selections are excellent.",
          rating: 5,
        },
        {
          id: 5,
          name: "fauzi khairi",
          source: "Google Reviews",
          text: "The Patin Tempoyak is very delicious.",
          rating: 5,
        },
      ],
    },
    footer: {
      title: "Visit Us",
      description:
        "Experience the authentic taste of Pahang in a cozy, welcoming environment. We look forward to serving you.",
      whatsapp: "WhatsApp",
      monSat: "Mon - Sat:",
      monSatHours: "11:00 AM - 04:30 PM",
      sun: "Sun:",
      sunHours: "Closed",
      directions: "Get Directions",
      copyright: "Patin Tempoyak Kak Zee. All rights reserved.",
    },
  },
  ms: {
    nav: {
      links: {
        story: "Kisah Kami",
        menu: "Menu",
        gallery: "Galeri",
        reviews: "Ulasan",
        contact: "Hubungi",
      },
      visitUs: "Kunjungi Kami",
      languageLabel: "Bahasa",
    },
    seasonalBanner: {
      title: "Istimewa Ramadhan:",
      message: "Dibuka untuk Bawa Pulang",
      hours: "4:00 PM - 7:30 PM",
      closeAriaLabel: "Tutup banner",
    },
    hero: {
      imageAlt: "Masakan Malaysia Asli",
      since: "Sejak 2012",
      titleLine1: "Rasa Asli",
      titleAccent: "Dari Pahang",
      description:
        "Nikmati Patin Tempoyak legenda, dimasak dengan tempoyak dan rempah tradisional. Satu pengalaman rasa yang tiada tandingan.",
      viewMenu: "Lihat Menu Kami",
      findUs: "Lokasi Kami",
      scroll: "Skrol",
    },
    ramadhanPromo: {
      badge: "Istimewa Ramadhan",
      titleLine1: "Berbuka dengan",
      titleAccent: "Rasa Asli",
      description:
        "Nikmati Patin Tempoyak yang menyelerakan untuk juadah iftar anda. Kami beroperasi khusus untuk bawa pulang sepanjang bulan mulia ini.",
      hoursLabel: "Waktu",
      hoursValue: "4PM - 7:30PM",
      availabilityLabel: "Ketersediaan",
      availabilityValue: "Bawa Pulang Sahaja",
      imageAlt: "Patin Tempoyak Iftar",
      imageCaption: "Sesuai Untuk Iftar",
    },
    about: {
      imageAlt1: "Chef menyediakan makanan",
      imageAlt2: "Bahan-bahan masakan",
      eyebrow: "Kisah Kami",
      titleLine1: "Memelihara Warisan,",
      titleAccent: "Menyaji Dengan Ikhlas.",
      paragraph1:
        "Di Patin Tempoyak Kak Zee, kami percaya pada kekuatan rasa asli. Perjalanan kami bermula dengan misi mudah: membawa rasa sebenar warisan sungai Pahang ke meja anda.",
      paragraph2:
        "Kami mengkhusus dalam ikan patin yang dimasak dengan pes tempoyak yang kaya dan masam berlemak. Setiap hidangan disediakan penuh teliti menggunakan bahan tempatan dan resipi turun-temurun.",
      quote:
        "Kami bukan sekadar menyajikan makanan; kami menyajikan kenangan jamuan kampung tradisional.",
    },
    menu: {
      eyebrow: "Pilihan Chef",
      title: "Hidangan Istimewa",
      dishes: [
        {
          id: 1,
          name: "Patin Tempoyak",
          description:
            "Ikan patin dimasak dalam kuah tempoyak yang pekat dan masam berlemak. Identiti asli Pahang.",
          tags: ["Istimewa", "Pedas", "Asli"],
        },
        {
          id: 2,
          name: "Ayam Penyet",
          description:
            "Ayam goreng penyet dengan sambal pedas, tempe, tauhu, dan ulam segar.",
          tags: ["Popular", "Rangup", "Pedas"],
        },
      ],
    },
    gallery: {
      eyebrow: "Suasana",
      title: "Santapan Visual",
      description:
        "Sekilas suasana dapur kami dan warna-warni hidangan yang menyelerakan.",
      imageAltPrefix: "Gambar galeri",
    },
    reviews: {
      title: "Suara Pelanggan",
      items: [
        {
          id: 1,
          name: "Abu Supian Mohammad",
          source: "Ulasan Google",
          text: "Ada pulak lauk lemak panggang tadi. Padu weyy",
          rating: 5,
        },
        {
          id: 2,
          name: "Mama Bulus a.k.a Adiela Arus",
          source: "Ulasan Google",
          text: "Kalu lalu atau ke sabak bernam mmg berharap dpt lunch kat sini\nLauk pauk kampung super duper sedap\nPaling suka udang kertas goreng\nHarga pun ok reasonable\nKalau lalu sini mmg tak fikir kedai lain dah utk makan",
          rating: 5,
        },
        {
          id: 3,
          name: "Cotton Nice",
          source: "Ulasan Google",
          text: "Wahh ikan patin tempoyak rasa macam temerloh. Lauk asli kg yg takde kat bandar tau. Tempat ni Utk org tempatan jadi harga onz",
          rating: 5,
        },
        {
          id: 4,
          name: "Gufron Hafiz",
          source: "Ulasan Google",
          text: "Masakannua banyak pilihan dan sedap.\nUlam ulaman dengan pilihan sambal enak",
          rating: 5,
        },
        {
          id: 5,
          name: "fauzi khairi",
          source: "Ulasan Google",
          text: "Ikan patin masak tempoyak sgt sedap",
          rating: 5,
        },
      ],
    },
    footer: {
      title: "Kunjungi Kami",
      description:
        "Nikmati rasa asli Pahang dalam suasana yang selesa dan mesra. Kami menanti kedatangan anda.",
      whatsapp: "WhatsApp",
      monSat: "Isnin - Sabtu:",
      monSatHours: "11:00 AM - 04:30 PM",
      sun: "Ahad:",
      sunHours: "Tutup",
      directions: "Lokasi Kami",
      copyright: "Patin Tempoyak Kak Zee. Hak cipta terpelihara.",
    },
  },
} as const;

export type TranslationContent = (typeof translations)[Language];
