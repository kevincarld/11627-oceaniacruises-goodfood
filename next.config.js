/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'https://brandedcontent.goodfood.com.au/oceaniacruises/board-world-best-culinary-cruise-line', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'Oceania Cruises', // e.g Black Hawk
      title: 'On board the world’s best culinary cruise line', // e.g Being a good pet parent starts at mealtime
      description: 'Catering to only 650 to 1238 guests, the line’s small, luxurious ships such as Regatta, Marina and brand-new Vista feature stunning interiors, imaginative dining concepts, and the highest standards of residential-style luxury. ',
      siteName: 'Good Food', // The Sydney Morning Herald, Good Food
      icon: 'goodfood', // smh, goodfood, nine, afr, traveller
      themeColour: '#C3A873', // hex
      ogImage: 'tbd',
      date: '01-04-23', // e.g 03-12-23
      year: '2023' // e.g 2023
    },
    jobCode: '11627-oceaniacruises-goodfood', // used for nine ga scripts
    guidelines: false, // shows or hides layout guideline bars
    activateMasthead: true, // shows or hides masthead
    mastheadOverride: 'goodfood', // overrides masthead that's pulling from hostname: e.g honey,style,travel,kitchen,you,parenting,coach,pets,celebrity
  }
}

module.exports = nextConfig