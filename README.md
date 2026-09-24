<div align="center">

# 📝 Notes App

A minimal, grid-background notes app built with React and Tailwind CSS. Add a note with a title and details, view them as cards, and delete them when done.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Overview

Notes App is a simple, single-page note-taking tool. Type a title and some content into the form, hit **Add Notes**, and it appears as a card below. Each note card is scrollable for longer content and can be deleted individually.

## ✨ Features

- ✍️ Add notes with a title and multi-line details
- 🗂️ Notes displayed as a responsive grid of cards
- 🗑️ Delete any note individually
- 📜 Scrollable note cards with a hidden scrollbar for longer content
- 📱 Fully responsive layout (mobile, tablet, desktop breakpoints)
- 🎨 Subtle grid-pattern background and smooth button press animations
- ⚡ Built entirely with React state — no backend or persistence required


The optimized build output will be in the `dist/` folder.

## 📁 Project Structure

```
├── src/
│   ├── App.jsx        # Main component: form + notes list + delete logic
│   ├── App.css         # Component-specific styles
│   ├── index.css       # Tailwind entry point + scrollbar utility
│   └── main.jsx         # App entry point
├── index.html
├── package.json
└── README.md
```

## 🧠 How It Works

1. Enter a **title** and **content** into the form fields.
2. Click **ADD NOTES** to save the note — it's added to the notes list as a card.
3. Each note card shows the title and details, with internal scrolling for long text.
4. Click **Delete** on any card to remove that note from the list.
5. Notes are held in React state (`useState`), so the list resets on page refresh.

## 🛠️ Tech Stack

| Layer      | Technology                  |
|------------|-------------------------------|
| Framework  | React                        |
| Build Tool | Vite                          |
| Styling    | Tailwind CSS                  |

## 🗺️ Possible Improvements

- [ ] Persist notes with `localStorage` or a backend/database
- [ ] Add note editing (not just add/delete)
- [ ] Add timestamps to each note
- [ ] Add search/filter functionality
- [ ] Add drag-and-drop reordering
- [ ] Add color-coded or tagged notes

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/notes-app/issues) or open a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with 📝 and React
</div>
