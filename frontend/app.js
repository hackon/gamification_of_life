document.addEventListener('DOMContentLoaded', (event) => {
  console.log('The DOM is fully loaded.')
})

document.addEventListener('load', (event) => {
  console.log('The page is fully loaded.')
})

document.addEventListener('beforeunload', (event) => {
  console.log('Beforeunload')
  // show the confirmation dialog
  event.preventDefault()
  alert('before unload')
  // Google Chrome requires returnValue to be set.
  event.returnValue = ''
})

document.addEventListener('unload', (event) => {
  console.log('Unload')
  // send analytic data
})
