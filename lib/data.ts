export const navLinks = [
   {
      name: 'Home',
      hash: '/',
   },
   {
      name: 'Shop',
      // name: 'Collections',
      hash: '/#shop',
   },
   {
      name: 'About',
      hash: '/#about',
   },
   {
      name: 'Contact',
      hash: '/#contact',
   },
   // {
   //    name: 'Wishlist',
   //    // hash: user ? '/wishlist' : '/sign-in',
   //    hash: '/wishlist',
   // },
   // {
   //    name: 'Orders',
   //    hash: '/orders',
   // },
] as const;

export const navLinksType = [
   {
      name: 'Home',
   },
   {
      name: 'Shop',
   },
   {
      name: 'About',
   },
   {
      name: 'Contact',
   },
   {
      name: 'Wishlist',
   },
   {
      name: 'Orders',
   },
] as const;
