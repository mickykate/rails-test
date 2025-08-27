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

// Sidebar toggle (event delegation)
function initSidebarHandlers() {
  const root = document

  // Toggle open/close on button click
  root.addEventListener('click', (event) => {
    const toggle = event.target.closest('.sidebar-toggle')
    if (!toggle) return

    const sidebar = document.querySelector('.sidebar')
    if (!sidebar) return

    event.preventDefault()
    sidebar.classList.toggle('show')
  })

  // Close when clicking outside on mobile
  root.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar')
    if (!sidebar) return

    // Only on mobile width
    if (window.innerWidth > 768) return

    // If not open, nothing to do
    if (!sidebar.classList.contains('show')) return

    const toggle = document.querySelector('.sidebar-toggle')

    // Ignore clicks inside sidebar or on the toggle
    if (sidebar.contains(event.target)) return
    if (toggle && toggle.contains(event.target)) return

    sidebar.classList.remove('show')
  })
}

// Ensure handlers are bound for both Turbolinks and non-Turbolinks loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebarHandlers)
} else {
  initSidebarHandlers()
}

document.addEventListener('turbolinks:load', initSidebarHandlers)

