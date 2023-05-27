//add an itmem to the session storage
sessionStorage.setItem('name', 'Michael')

//to retrieve the item
console.log(sessionStorage.getItem('name'))

//to remove a single item with the key
sessionStorage.removeItem('name')

//to update a single item
sessionStorage.setItem('name', 'Joshua')

//to clear all the item in the session storage
sessionStorage.clear()