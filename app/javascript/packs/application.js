// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "bootstrap"

// Sidebar toggle
function setupSidebarToggle() {
  const toggle = document.querySelector('.sidebar-toggle')
  const sidebar = document.querySelector('.sidebar')
  if (!toggle || !sidebar) return

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })

  document.addEventListener('click', (event) => {
    if (window.innerWidth > 768) return
    if (!sidebar.classList.contains('show')) return

    if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
      sidebar.classList.remove('show')
    }
  })
}

// Turbolinks 対応
document.addEventListener('turbolinks:load', setupSidebarToggle)
