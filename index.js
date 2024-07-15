console.log("Entered!")

// For Menu scrool
window.onscroll = function () {
  let navbar = document.getElementById('myNav')
  if (window.scrollY > 150) {
    navbar.classList.add('scroll-nav-bg')
  } else {
    navbar.classList.remove('scroll-nav-bg')
  }
}

// For Hamburger menu
let menuDisplay = false

document.getElementById('menu-btn').addEventListener('click', () => {
  if (menuDisplay) {
    document.getElementById('menu-ham').classList.add('hidden')
    document.getElementById('menu-btn').innerHTML =
      '<i class="text-white text-2xl fa-solid fa-bars">'
    menuDisplay = false
  } else {
    document.getElementById('menu-ham').classList.remove('hidden')
    document.getElementById('menu-btn').innerHTML =
      '<i class="text-white text-2xl fa-solid fa-xmark"></i>'
    menuDisplay = true
  }
})



// let firstSection = false

// document.getElementById('firstDetailSection').addEventListener('click', () => {
//   console.log('Hello There!')
//   if (firstSection) {
//     document.getElementById('firstSectionDetails').classList.add('hidden')
//     document.getElementById('firstSectionBtn').innerHTML =
//       '<i class="fa-solid fa-plus"></i>'
//     firstSection = false
//   } else {
//     document.getElementById('firstSectionDetails').classList.remove('hidden')
//     document.getElementById('firstSectionBtn').innerHTML =
//       '<i class="text-codroid_purple fa-solid fa-minus"></i>'
//     firstSection = true
//   }
// })
