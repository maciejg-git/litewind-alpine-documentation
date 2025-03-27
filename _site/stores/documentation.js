document.addEventListener('alpine:init', () => {
  Alpine.store('documentation', {
    darkMode: Alpine.$persist(false).as("darkMode"),

    init() {
      if (!this.darkMode) {
        document.documentElement.classList.add("dark")
        document.documentElement.style.setProperty("color-scheme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.style.setProperty("color-scheme", "light")
      }
    },
    toggle() {
      this.darkMode = !this.darkMode
      if (!this.darkMode) {
        document.documentElement.classList.add("dark")
        document.documentElement.style.setProperty("color-scheme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.style.setProperty("color-scheme", "light")
      }
    }
  })
})
