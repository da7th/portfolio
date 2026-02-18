tailwind.config = {
  theme: {
    extend: {
      colors: {
        "background-light": "#F3F3F3",
        "background-dark": "#1A1A1A",
        "text-light": "#000000",
        "text-dark": "#FFFFFF",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
    },
  },
};

function downloadCV() {
  const link = document.createElement("a");
  link.href = "curriculum.pdf";
  link.download = "Erick_Estanislau_Curriculum.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
